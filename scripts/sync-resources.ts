#!/usr/bin/env npx tsx
/**
 * Sync resources from the Sleep Island API.
 *
 * Usage:
 *   npx tsx scripts/sync-resources.ts          # preview only
 *   npx tsx scripts/sync-resources.ts --write   # write files
 *
 * What it does:
 *   1. Fetches all published resources from the API
 *   2. Saves raw API data to src/data/resources-api.json (for reference)
 *   3. Merges with existing src/data/resources.ts:
 *      - Existing entries: keeps all hand-curated fields, updates audio/cover/rank
 *      - New entries: adds with auto-generated slugs (needs manual titleEn/descEn)
 *   4. Prints a summary of new/updated/removed resources
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'src', 'data');
const RAW_JSON_PATH = join(DATA_DIR, 'resources-api.json');
const RESOURCES_TS_PATH = join(DATA_DIR, 'resources.ts');

const API_BASE = 'https://sleepwell.ciyuans.com/api/resources_v2';

const WRITE_MODE = process.argv.includes('--write');

// ── Types ───────────────────────────────────────────────────────
interface ApiResource {
  id: string;
  resourceId: string;
  category: string;
  tags: string[];
  totalDurationSeconds: number;
  globalPlaybackCount: number;
  localizedContent: { name: string; description: string; coverImageUrl?: string; rank?: number };
  rank: number;
  audioUrl: string;
  audioClipUrl: string;
  audioClipDurationSeconds: number | null;
  videoUrl: string;
  videoClipUrl: string;
  status: string;
  isPublished: boolean;
}

// ── Fetch all pages ─────────────────────────────────────────────
async function fetchAll(): Promise<ApiResource[]> {
  const all: ApiResource[] = [];
  let page = 1;

  while (true) {
    const url = `${API_BASE}?language=zh&page=${page}&pageSize=100`;
    process.stdout.write(`  Fetching page ${page}... `);
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`API ${resp.status}`);
    const json = await resp.json() as { data: ApiResource[]; has_more: boolean };

    const active = json.data.filter(
      (r) => r.isPublished && r.status === 'active' && r.audioClipUrl
    );
    all.push(...active);
    console.log(`${active.length} resources`);

    if (!json.has_more || json.data.length === 0) break;
    page++;
  }

  return all;
}

// ── Slug helpers ────────────────────────────────────────────────
const WORD_MAP: [string, string][] = [
  ['暴风雪', 'blizzard'], ['雷雨', 'thunderstorm'], ['雨林', 'rainforest'],
  ['雨声', 'rain'], ['雨', 'rain'], ['雷', 'thunder'],
  ['海浪', 'ocean-waves'], ['深海', 'deep-sea'], ['海', 'ocean'],
  ['溪流', 'stream'], ['湖', 'lake'], ['水', 'water'], ['瀑布', 'waterfall'],
  ['森林', 'forest'], ['丛林', 'jungle'],
  ['鸟鸣', 'birdsong'], ['鸟', 'birds'], ['虫鸣', 'insects'], ['蟋蟀', 'crickets'],
  ['壁炉', 'fireplace'], ['炉火', 'fireplace'], ['篝火', 'campfire'],
  ['白噪音', 'white-noise'], ['粉红噪音', 'pink-noise'], ['噪音', 'noise'],
  ['冥想', 'meditation'], ['放松', 'relax'], ['助眠', 'sleep-aid'],
  ['睡眠', 'sleep'], ['入睡', 'sleep'], ['失眠', 'insomnia'],
  ['耳鸣', 'tinnitus'], ['钢琴', 'piano'], ['音乐', 'music'],
  ['ASMR', 'asmr'], ['自然', 'nature'], ['夜', 'night'],
  ['洞穴', 'cave'], ['冬', 'winter'], ['气泡', 'bubbles'],
  ['疗愈', 'healing'], ['禅', 'zen'],
];

function makeSlug(name: string, id: string, taken: Set<string>): string {
  const clean = name.replace(/[\s😴😪💤🌺✨💈🎵🎶]+/g, ' ').trim();

  // Try English words first
  const en = clean.match(/[a-zA-Z]{2,}/g);
  let parts: string[] = [];
  if (en && en.length >= 2) {
    parts = en.slice(0, 4).map((w) => w.toLowerCase());
  } else {
    for (const [zh, enw] of WORD_MAP) {
      if (clean.includes(zh) && !parts.includes(enw)) {
        parts.push(enw);
        if (parts.length >= 3) break;
      }
    }
  }

  if (parts.length === 0) parts = ['res', id.slice(0, 8)];

  let slug = parts.join('-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');
  let final = slug;
  let n = 2;
  while (taken.has(final)) { final = `${slug}-${n++}`; }
  return final;
}

function fmtDuration(s: number): { iso: string; label: string } {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h >= 1) return { iso: `PT${h}H${m > 0 ? m + 'M' : ''}`, label: `${h} 小时${m > 0 ? ' ' + m + ' 分钟' : ''}` };
  return { iso: `PT${m}M`, label: `${m} 分钟` };
}

function mapCategory(tags: string[]): string {
  if (tags.includes('nature')) return 'Nature';
  if (tags.includes('white_noise')) return 'White Noise';
  if (tags.includes('ASMR')) return 'ASMR';
  if (tags.includes('meditation')) return 'Meditation';
  return 'Music';
}

function mapScenes(tags: string[]): string[] {
  const m: Record<string, string[]> = {
    nature: ['入睡', '放松'], white_noise: ['入睡', '遮蔽噪音'],
    ASMR: ['放松', '入睡'], meditation: ['冥想', '放松'],
  };
  const s = new Set<string>();
  for (const t of tags) (m[t] || []).forEach((x) => s.add(x));
  if (s.size === 0) { s.add('放松'); s.add('入睡'); }
  return [...s].slice(0, 3);
}

function cleanDesc(desc: string): string {
  // Remove YouTube cruft: URLs, channel promotions, timestamps, special chars
  return desc
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\d{2}:\d{2}\s*/g, '')
    .replace(/[┈୨୧⭐️]+/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .slice(0, 150);
}

// ── Parse existing resources.ts to build id→slug map ────────────
function parseExisting(): Map<string, string> {
  // Returns a map of apiId → existing slug (from the `id` field if present)
  // Also returns all existing slugs for reference
  const idToSlug = new Map<string, string>();

  if (!existsSync(RESOURCES_TS_PATH)) return idToSlug;

  const src = readFileSync(RESOURCES_TS_PATH, 'utf-8');
  // Match patterns like: 'some-slug': { ... id: '...' ... }
  const re = /'([a-z0-9-]+)':\s*\{[^}]*?id:\s*'([a-f0-9]+)'/gs;
  let m;
  while ((m = re.exec(src)) !== null) {
    idToSlug.set(m[2], m[1]);
  }

  return idToSlug;
}

function getExistingSlugs(): Set<string> {
  if (!existsSync(RESOURCES_TS_PATH)) return new Set();
  const src = readFileSync(RESOURCES_TS_PATH, 'utf-8');
  const slugs = new Set<string>();
  const re = /^\s*'([a-z0-9-]+)':\s*\{/gm;
  let m;
  while ((m = re.exec(src)) !== null) slugs.add(m[1]);
  return slugs;
}

// ── Main ────────────────────────────────────────────────────────
async function main() {
  console.log('Syncing resources from API...\n');

  const apiItems = await fetchAll();
  console.log(`\nTotal: ${apiItems.length} active resources from API`);

  // Save raw JSON for reference
  if (WRITE_MODE) {
    const raw = apiItems.map((r) => ({
      id: r.id,
      name: r.localizedContent.name,
      description: r.localizedContent.description.slice(0, 300),
      category: r.category,
      tags: r.tags,
      durationSeconds: r.totalDurationSeconds,
      playbackCount: r.globalPlaybackCount,
      cover: r.localizedContent.coverImageUrl || '',
      audioUrl: r.audioUrl,
      audioClipUrl: r.audioClipUrl,
      videoUrl: r.videoUrl,
      videoClipUrl: r.videoClipUrl,
      rank: r.rank,
    }));
    writeFileSync(RAW_JSON_PATH, JSON.stringify(raw, null, 2), 'utf-8');
    console.log(`\nRaw API data saved to ${RAW_JSON_PATH}`);
  }

  // Build slug assignments
  const existingSlugs = getExistingSlugs();
  const existingIdMap = parseExisting();
  const apiIds = new Set(apiItems.map((r) => r.id));

  // Assign slugs: reuse existing where possible
  const takenSlugs = new Set<string>(existingSlugs);
  const idToSlug = new Map<string, string>();
  const newItems: ApiResource[] = [];

  for (const r of apiItems) {
    const existingSlug = existingIdMap.get(r.id);
    if (existingSlug) {
      idToSlug.set(r.id, existingSlug);
    } else {
      const slug = makeSlug(r.localizedContent.name, r.id, takenSlugs);
      takenSlugs.add(slug);
      idToSlug.set(r.id, slug);
      newItems.push(r);
    }
  }

  // Report
  const existingIds = new Set(existingIdMap.keys());
  const removedIds = [...existingIds].filter((id) => !apiIds.has(id));

  console.log(`\n── Summary ──`);
  console.log(`  Existing (kept):  ${existingIdMap.size - removedIds.length}`);
  console.log(`  New resources:    ${newItems.length}`);
  console.log(`  Removed from API: ${removedIds.length}`);

  if (newItems.length > 0) {
    console.log(`\n── New resources ──`);
    for (const r of newItems.slice(0, 20)) {
      const slug = idToSlug.get(r.id)!;
      const name = r.localizedContent.name.slice(0, 40);
      console.log(`  ${slug.padEnd(30)} ${name}`);
    }
    if (newItems.length > 20) console.log(`  ... and ${newItems.length - 20} more`);
  }

  if (removedIds.length > 0) {
    console.log(`\n── Removed (still in API but no longer active) ──`);
    for (const id of removedIds) {
      console.log(`  ${existingIdMap.get(id)} (${id})`);
    }
  }

  // Generate new entries code
  if (newItems.length > 0 && WRITE_MODE) {
    console.log('\n── Generating new entries ──');

    // Read existing file
    let existingContent = readFileSync(RESOURCES_TS_PATH, 'utf-8');

    // Build new entries string
    const newEntries: string[] = [];
    for (const r of newItems) {
      const slug = idToSlug.get(r.id)!;
      const name = r.localizedContent.name
        .replace(/\s*[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FEFF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2702}-\u{27B0}\u{FE0F}★]+\s*/gu, ' ')
        .replace(/\n+/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .replace(/'/g, "\\'")
        .trim();
      const dur = fmtDuration(r.totalDurationSeconds);
      const cat = mapCategory(r.tags);
      const scenes = mapScenes(r.tags);
      const desc = cleanDesc(r.localizedContent.description);
      const cover = r.localizedContent.coverImageUrl || '';
      const audio = r.audioClipUrl;
      const video = r.videoClipUrl || r.videoUrl || '';

      newEntries.push(`  '${slug}': {
    id: '${r.id}',
    title: '${name}',
    titleEn: '', // TODO: add English title
    category: '${cat}',
    scenes: [${scenes.map((s) => `'${s}'`).join(', ')}],
    duration: '${dur.iso}',
    durationLabel: '${dur.label}',
    audio: '${audio}',
    cover: '${cover}',${video ? `\n    video: '${video}',` : ''}
    desc: '${desc.replace(/'/g, "\\'")}',
    descEn: '', // TODO: add English description
    related: [],
  }`);
    }

    // Insert before the closing `};`
    const insertPoint = existingContent.lastIndexOf('};');
    if (insertPoint === -1) {
      console.error('Could not find closing }; in resources.ts');
      process.exit(1);
    }

    const before = existingContent.slice(0, insertPoint);
    const after = existingContent.slice(insertPoint);

    // Add section comment + entries
    const newSection = `\n  // ── Synced from API ${new Date().toISOString().slice(0, 10)} ──\n${newEntries.join(',\n\n')},\n`;

    writeFileSync(RESOURCES_TS_PATH, before + newSection + after, 'utf-8');
    console.log(`\nAppended ${newItems.length} new entries to resources.ts`);
    console.log('TODO: Fill in titleEn, descEn, and related fields for new entries.');
  }

  if (!WRITE_MODE) {
    console.log('\n💡 Run with --write to save changes:');
    console.log('   npx tsx scripts/sync-resources.ts --write\n');
  }
}

main().catch((err) => {
  console.error('Sync failed:', err);
  process.exit(1);
});

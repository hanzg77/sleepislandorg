import { LANGS, type Lang } from '../data/i18n';

export const SITE_URL = 'https://www.sleepisland.org';
export const DEFAULT_LANG: Lang = 'zh-Hans';

// Paste the token from Cloudflare dashboard → Web Analytics → your site → "Manage site"
// to switch on privacy-friendly, cookieless pageview + Core Web Vitals tracking.
// Left empty = the beacon is not emitted (no-op), so it is safe to ship as-is.
export const CF_ANALYTICS_TOKEN = '';
export const ALL_LANGS = LANGS.map(({ code }) => code);

const OG_LOCALE_BY_LANG: Record<Lang, string> = {
  'zh-Hans': 'zh_CN',
  en: 'en_US',
  'zh-Hant': 'zh_TW',
  ja: 'ja_JP',
  ko: 'ko_KR',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  pt: 'pt_BR',
  ru: 'ru_RU',
  ar: 'ar_SA',
  hi: 'hi_IN',
  vi: 'vi_VN',
  th: 'th_TH',
  id: 'id_ID',
};

const HREFLANG_BY_LANG: Record<Lang, string> = {
  'zh-Hans': 'zh-Hans',
  en: 'en',
  'zh-Hant': 'zh-Hant',
  ja: 'ja',
  ko: 'ko',
  es: 'es',
  fr: 'fr',
  de: 'de',
  pt: 'pt',
  ru: 'ru',
  ar: 'ar',
  hi: 'hi',
  vi: 'vi',
  th: 'th',
  id: 'id',
};

const LANG_PREFIX_BY_CODE = new Map(LANGS.map(({ code, prefix }) => [code, prefix]));

export function normalizeSeoText(value: string): string {
  return value
    .replaceAll('睡眠岛 Sleep Island', '睡眠岛 Sleep Island')
    .replaceAll('Sleep Island 睡眠岛', 'Sleep Island 睡眠岛')
    .replace(/\bHushbay\b/g, 'Sleep Island');
}

export function normalizeSiteUrl(value: string): string {
  return value.replaceAll('https://www.sleepisland.org', SITE_URL);
}

export function normalizeSchemaData<T>(value: T): T {
  if (typeof value === 'string') {
    return normalizeSeoText(normalizeSiteUrl(value)) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeSchemaData(item)) as T;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value).map(([key, item]) => [key, normalizeSchemaData(item)]);
    return Object.fromEntries(entries) as T;
  }

  return value;
}

export function getOgLocale(lang: Lang): string {
  return OG_LOCALE_BY_LANG[lang];
}

export function getHrefLang(lang: Lang): string {
  return HREFLANG_BY_LANG[lang];
}

function ensureTrailingSlash(pathname: string): string {
  if (pathname === '/') {
    return pathname;
  }

  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '') {
    return '/';
  }

  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return ensureTrailingSlash(withLeadingSlash);
}

function stripCurrentLangPrefix(pathname: string, currentLang: Lang): string {
  const normalizedPath = normalizePathname(pathname);
  const currentPrefix = LANG_PREFIX_BY_CODE.get(currentLang) ?? '';

  if (!currentPrefix) {
    return normalizedPath;
  }

  if (normalizedPath === `${currentPrefix}/`) {
    return '/';
  }

  if (normalizedPath.startsWith(`${currentPrefix}/`)) {
    return normalizePathname(normalizedPath.slice(currentPrefix.length));
  }

  return normalizedPath;
}

export function buildLocalizedPath(pathname: string, currentLang: Lang, targetLang: Lang): string {
  const normalizedPath = stripCurrentLangPrefix(pathname, currentLang);
  const targetPrefix = LANG_PREFIX_BY_CODE.get(targetLang) ?? '';

  if (!targetPrefix) {
    return normalizedPath;
  }

  if (normalizedPath === '/') {
    return `${targetPrefix}/`;
  }

  return `${targetPrefix}${normalizedPath}`;
}

// Sections that are built for every language. Pages outside these only exist in
// zh-Hans + en, so emitting hreflang for the other 13 would point at 404s.
const FULLY_LOCALIZED_SECTIONS = new Set(['resources', 'sounds']);

export function getDefaultAlternateLangs(pathname: string): Lang[] {
  const normalizedPath = normalizePathname(pathname);
  const segments = normalizedPath.split('/').filter(Boolean);

  // Root homepage.
  if (segments.length === 0) {
    return ALL_LANGS;
  }

  // A localized homepage (e.g. /ja/, /en/).
  const firstIsLangPrefix = LANGS.some(({ prefix }) => prefix === `/${segments[0]}`);
  if (segments.length === 1 && firstIsLangPrefix) {
    return ALL_LANGS;
  }

  // Strip a leading language segment to inspect the underlying route, then expose the
  // full 15-language cluster only for sections that actually exist in every language.
  const routeSegments = firstIsLangPrefix ? segments.slice(1) : segments;
  if (FULLY_LOCALIZED_SECTIONS.has(routeSegments[0])) {
    return ALL_LANGS;
  }

  return [DEFAULT_LANG, 'en'];
}

export function getAlternateLinks(
  pathname: string,
  currentLang: Lang,
  alternateLangs?: Lang[],
): { lang: Lang; hreflang: string; href: string }[] {
  const langs = alternateLangs ?? getDefaultAlternateLangs(pathname);

  return langs.map((lang) => ({
    lang,
    hreflang: getHrefLang(lang),
    href: new URL(buildLocalizedPath(pathname, currentLang, lang), SITE_URL).href,
  }));
}

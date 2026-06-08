// Data for the "Best Free Sleep Apps / Calm alternative" comparison landing page.
// Built for zh-Hans + en. Facts verified against competitor sites/reviews (2026); kept
// to stable, qualitative claims (no hard prices) and deliberately fair — each competitor's
// real strength is stated, and Sleep Island's limits (iOS-only, smaller library) are too.
import type { Lang } from './i18n';

export type CatLang = 'zh' | 'en';
export const cmpLang = (lang: Lang): CatLang => (lang === 'zh-Hans' || lang === 'zh-Hant' ? 'zh' : 'en');

export const COMPARISON_APPS = [
  { key: 'sleep-island', name: 'Sleep Island', highlight: true },
  { key: 'calm', name: 'Calm', highlight: false },
  { key: 'bettersleep', name: 'BetterSleep', highlight: false },
  { key: 'snorelab', name: 'SnoreLab', highlight: false },
];

// Cell states: 'y' = yes/✓, 'n' = no/✗, 'p' = partial-or-limited/~, 'na' = not-applicable/—
export type Cell = 'y' | 'n' | 'p' | 'na';

export const COMPARISON_ROWS: { label: { zh: string; en: string }; cells: Cell[] }[] = [
  { label: { zh: '核心功能免费（无需订阅）', en: 'Core features free (no subscription)' }, cells: ['y', 'n', 'p', 'p'] },
  { label: { zh: '入睡自动停止（检测入睡，非定时器）', en: 'Auto-stop on sleep onset (not just a timer)' }, cells: ['y', 'n', 'n', 'na'] },
  { label: { zh: '鼾声记录', en: 'Snore recording' }, cells: ['y', 'n', 'n', 'y'] },
  { label: { zh: '梦话记录', en: 'Sleep-talk recording' }, cells: ['y', 'n', 'n', 'n'] },
  { label: { zh: '无需穿戴设备（仅用手机）', en: 'No wearable needed (phone only)' }, cells: ['y', 'na', 'na', 'y'] },
  { label: { zh: '耳鸣遮蔽声音', en: 'Tinnitus-masking sounds' }, cells: ['y', 'n', 'p', 'n'] },
  { label: { zh: '睡眠记录与分析', en: 'Sleep tracking & analysis' }, cells: ['y', 'n', 'p', 'p'] },
  { label: { zh: '冥想 / 睡眠故事库', en: 'Meditation / sleep-story library' }, cells: ['p', 'y', 'y', 'n'] },
];

// Honest one-paragraph take on each app, including where it leads.
export const APP_NOTES: Record<string, { summary: { zh: string; en: string }; bestFor: { zh: string; en: string }; platforms: string; site: string }> = {
  'sleep-island': {
    summary: {
      zh: '核心功能全免费、无强制订阅:手机即可的睡眠记录、鼾声与梦话记录、入睡自动停止，以及耳鸣遮蔽的自然声音。坦白说:声音/内容库比 Calm、BetterSleep 小，且目前仅有 iOS 版。',
      en: 'A free core with no forced subscription: phone-only sleep tracking, snore and sleep-talk recording, auto-stop on sleep onset, and tinnitus-masking nature sounds. Honestly: the sound/content library is smaller than Calm or BetterSleep, and it is iOS-only for now.',
    },
    bestFor: {
      zh: '想免费用睡眠记录 + 鼾声/梦话记录、又不想戴手表、也不想被订阅绑架的人。',
      en: 'People who want free sleep tracking plus snore/sleep-talk recording, without a wearable or a subscription.',
    },
    platforms: 'iOS',
    site: 'https://apps.apple.com/app/id6747609991',
  },
  calm: {
    summary: {
      zh: '最精致的冥想 App,拥有 500+ 睡眠故事、名人朗读和庞大的冥想库——这是它真正的强项。但免费版很有限,绝大多数内容需要付费订阅(7 天试用后收费),且不做鼾声记录。',
      en: 'The most polished meditation app, with 500+ Sleep Stories, celebrity narrations and a deep meditation library — that is its real strength. But the free tier is very limited; most content needs a paid subscription (7-day trial, then paid), and it has no snore recording.',
    },
    bestFor: {
      zh: '想要引导冥想与睡眠故事、且不介意订阅的人。',
      en: 'Guided meditation and sleep stories, if you do not mind a subscription.',
    },
    platforms: 'iOS, Android',
    site: 'https://www.calm.com/',
  },
  bettersleep: {
    summary: {
      zh: '强大的声音混音器(可叠加多达 9 层声音),而且混音器在免费版就能用——这点很实在。完整声音库、SleepTales 和进阶睡眠分析属于付费(7 天试用后收费)。不做鼾声记录。',
      en: 'A powerful sound mixer (layer up to 9 sounds), and the mixer works on the free tier — a genuine plus. The full library, SleepTales and advanced tracking are premium (7-day trial, then paid). No snore recording.',
    },
    bestFor: {
      zh: '喜欢自己调配声音混音、且需要跨平台的人。',
      en: 'Building custom sound mixes, with cross-platform support.',
    },
    platforms: 'iOS, Android',
    site: 'https://www.bettersleep.com/',
  },
  snorelab: {
    summary: {
      zh: '全球最知名的专业鼾声记录 App,获耳鼻喉科医生背书——专攻打鼾分析是它的强项。但整夜录音与趋势属付费,且它是打鼾专用工具,而非综合助眠声音 App。',
      en: 'The most established dedicated snore-recording app, ENT-endorsed — deep snore analysis is its strength. But full-night recording and trends are premium, and it is a snore-focused tool rather than a general sleep-sound app.',
    },
    bestFor: {
      zh: '需要深入、专业级打鼾分析的人。',
      en: 'Deep, clinical-grade snore analysis.',
    },
    platforms: 'iOS, Android',
    site: 'https://www.snorelab.com/',
  },
};

export const COMPARISON_FAQ: { q: { zh: string; en: string }; a: { zh: string; en: string } }[] = [
  {
    q: { zh: '有没有完全免费、不用订阅的助眠 App?', en: 'Are there sleep apps that are free with no subscription?' },
    a: {
      zh: '有。睡眠岛的核心功能——睡眠记录、鼾声与梦话记录、白噪音与耳鸣遮蔽声音——免费且无需订阅。而 Calm、BetterSleep 等大多在 7 天试用后需要付费才能解锁完整内容。',
      en: 'Yes. Sleep Island’s core — sleep tracking, snore and sleep-talk recording, white noise and tinnitus-masking sounds — is free with no subscription. Apps like Calm and BetterSleep generally require paying after a 7-day trial to unlock the full experience.',
    },
  },
  {
    q: { zh: 'Calm 有没有免费替代?', en: 'What is a free alternative to Calm?' },
    a: {
      zh: '如果你主要想要助眠声音、白噪音和睡眠记录,而不是引导冥想和睡眠故事,睡眠岛可以免费提供这些。Calm 的强项是它庞大的冥想与睡眠故事库,这部分睡眠岛并不主打。',
      en: 'If you mainly want sleep sounds, white noise and sleep tracking rather than guided meditation and sleep stories, Sleep Island offers those for free. Calm’s strength is its large meditation and sleep-story library, which Sleep Island does not focus on.',
    },
  },
  {
    q: { zh: '记录睡眠或打鼾需要智能手表吗?', en: 'Do I need a smartwatch to track sleep or snoring?' },
    a: {
      zh: '不需要。睡眠岛和 SnoreLab 都用手机的麦克风与传感器工作,无需任何穿戴设备。',
      en: 'No. Both Sleep Island and SnoreLab use your phone’s microphone and sensors — no wearable required.',
    },
  },
];

export const COMPARISON_PAGE = {
  title: { zh: '免费助眠 App 推荐：无需订阅（2026）', en: 'Best Free Sleep Apps With No Subscription (2026)' },
  desc: {
    zh: '公正对比 Sleep Island、Calm、BetterSleep、SnoreLab：哪款助眠 App 核心功能真正免费、无需订阅,以及各自最适合谁。',
    en: 'An honest comparison of Sleep Island, Calm, BetterSleep and SnoreLab — which sleep app is genuinely free with no subscription, and who each one is best for.',
  },
  intro: {
    zh: '大多数助眠 App 在 7 天试用后,会把睡眠记录、声音库等功能锁进订阅。下面我们公正对比四款热门应用——既写清各家强项,也直说短板——帮你找到真正适合自己的那一款。',
    en: 'Most sleep apps lock features — sleep tracking, sound libraries — behind a subscription after a 7-day trial. Below is a fair comparison of four popular apps, with each one’s strengths and limits stated plainly, to help you find the right fit.',
  },
};

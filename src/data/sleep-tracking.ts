// Content for the Sleep Tracking landing page (zh-Hans + en). The app's most
// differentiated feature: phone-only sleep tracking, no wearable.
//
// HONESTY CONSTRAINTS (per the founder's verified facts — do not loosen):
// - Sleep/wake ("are you asleep") agreement with an Apple Watch is ~95%. State it as
//   "agreement with a Watch", not clinical/PSG validation.
// - Sleep STAGES (light/deep) are an ESTIMATE from movement; a heart-rate wearable is
//   more precise. Do NOT imply parity with a Watch on staging.
// - REM is NOT reported on phone (accelerometer can't see it) — say so, don't fake it.
// - NOT fully offline: raw snore/sleep-talk audio stays on device, but anonymized
//   minute-level motion features upload for calibration. Never claim "nothing leaves".
// - The sound "stops" / "pauses" on detected sleep — it is a hard pause, NOT a fade.

type T = { zh: string; en: string };

export const ST: {
  metaTitle: T; metaDesc: T;
  heroTitle: T; heroSub: T;
  intro: T;
  howHeading: T; how: { title: T; desc: T }[];
  givesHeading: T; gives: T[];
  honestHeading: T; honest: T;
  autostopHeading: T; autostop: T;
  privacyHeading: T; privacy: T;
  faqHeading: T; faq: { q: T; a: T }[];
} = {
  metaTitle: {
    zh: '睡眠监测 - 不用手表,一部手机就够 | 睡眠岛 Sleep Island',
    en: 'Sleep Tracking Without an Apple Watch — Free, Phone-Only | Sleep Island',
  },
  metaDesc: {
    zh: '睡眠岛用手机的运动传感器监测睡眠:无需手表手环、无需账号、免费。基于 Cole-Kripke 行动记录法与 HMM 模型,诚实呈现入睡、清醒、深浅睡——不伪造 REM。',
    en: 'Sleep Island tracks your sleep with your phone’s motion sensors — no wearable, no account, free. Built on Cole-Kripke actigraphy + an HMM model, with honest sleep/wake and light/deep estimates and no faked REM.',
  },
  heroTitle: { zh: '睡眠监测,只用一部手机', en: 'Sleep tracking with just your phone' },
  heroSub: {
    zh: '无需手表手环,无需账号,免费。放在床头,早上看懂自己的一夜。',
    en: 'No wearable, no account, free. Leave it on the nightstand and wake up to a clear picture of your night.',
  },
  intro: {
    zh: '大多数准的睡眠追踪都要你戴一只每天充电的手表。睡眠岛用手机本身的运动传感器——放在床上或床头柜就能记录一整晚,手腕上不用绑东西,也不用再买设备。',
    en: 'Most accurate sleep trackers need a watch you have to wear and charge every day. Sleep Island uses your phone’s own motion sensors — leave it on the bed or nightstand and it records the whole night. Nothing on your wrist, no extra device to buy.',
  },
  howHeading: { zh: '它是怎么工作的', en: 'How it works' },
  how: [
    {
      title: { zh: '整夜采集运动', en: 'It samples movement all night' },
      desc: {
        zh: '手机的加速度计以恒定频率记录你的体动。采集本身很省电——重的计算留到最后再做。',
        en: 'Your phone’s accelerometer records your body movement at a constant rate. Collection itself is cheap on battery — the heavy math is saved for the end.',
      },
    },
    {
      title: { zh: '一次性分析整晚', en: 'It compiles the whole night at once' },
      desc: {
        zh: '停止记录后,设备上的引擎把整夜数据一次算完:用行动记录法(Cole-Kripke,睡眠研究自 1990 年代沿用的运动判睡方法)加上一个统计模型(HMM),还原你何时清醒、入睡、深睡浅睡。',
        en: 'After you stop, an on-device engine analyzes the entire night in one pass — using actigraphy (Cole-Kripke, the movement-based method sleep researchers have used since the 1990s) plus a statistical model (an HMM) to reconstruct when you were awake, asleep, light vs deep.',
      },
    },
    {
      title: { zh: '每晚为你校准', en: 'It calibrates to you each night' },
      desc: {
        zh: '它会按你当晚的数据建立个人基线,而不是套用一刀切的阈值——所以越用越贴合你自己。',
        en: 'It builds a per-night baseline from your own data instead of applying one-size-fits-all thresholds — so it adapts to you rather than to an average sleeper.',
      },
    },
  ],
  givesHeading: { zh: '你能看到什么', en: 'What you get' },
  gives: [
    { zh: '入睡时间、清醒次数、总睡眠时长', en: 'Time to fall asleep, wake-ups, total time asleep' },
    { zh: '整夜的清醒 / 睡眠时间线', en: 'A full-night awake / asleep timeline' },
    { zh: '深睡与浅睡的估计', en: 'A light- vs deep-sleep estimate' },
    { zh: '鼾声与梦话录音(可单独查看)', en: 'Snore and sleep-talk recordings (reviewable separately)' },
    { zh: 'AI 助手对当晚数据的简要解读', en: 'A short AI summary of your night' },
  ],
  honestHeading: { zh: '它能做什么、不能做什么(我们直说)', en: 'What it can and can’t do (we say it straight)' },
  honest: {
    zh: '判断"你睡着没有"这件事,手机做得很好——在我们自己对照 Apple Watch 的测试里,睡 / 醒的判断大约 95% 一致。但深睡 / 浅睡这种"分期"是从体动推断出来的估计:能读心率的手表会比手机更准,我们不假装一样。REM 我们干脆不在手机上给——只靠加速度计看不出 REM,与其编一个,不如老实给你 4 个真实的阶段,而不是 5 个里有一个是猜的。如果你要的是精确的睡眠分期,手表确实比这个强。',
    en: 'Telling whether you’re asleep at all is something a phone does well — in our own testing against an Apple Watch, sleep-vs-wake agreed about 95% of the time. But staging (light/deep) is an estimate inferred from movement: a watch that reads your heart rate is more precise, and we won’t pretend otherwise. We don’t report REM on the phone at all — an accelerometer can’t see it, so rather than invent one we give you 4 honest stages instead of 5 with a guessed one. If you need precise staging, a Watch genuinely beats this.',
  },
  autostopHeading: { zh: '为什么声音会"恰好"在你睡着后停', en: 'Why the sound stops right after you fall asleep' },
  autostop: {
    zh: '因为它知道你真的睡着了。助眠声音不是按固定定时器停的——定时器要么在你还醒着时突然切掉、那一下安静反而把你弄醒,要么开一整晚费电又累耳朵。睡眠岛是在"检测到入睡 + 持续约 10 分钟安静"后才停,失败模式是"停得稍微晚一点",而不是"在你还醒着时就停了"。',
    en: 'Because it knows you actually fell asleep. The ambient sound doesn’t stop on a fixed timer — a timer either cuts out while you’re still awake (and the sudden silence wakes you) or runs all night, draining battery and tiring your ears. Sleep Island stops only after it detects sleep plus about 10 quiet minutes. The failure mode is “stops a little late,” never “stops while you’re still awake.”',
  },
  privacyHeading: { zh: '隐私', en: 'Privacy' },
  privacy: {
    zh: '没有账号、不用登录,唯一标识是匿名的设备标识。你的鼾声和梦话录音留在手机本地,从不上传。为了持续改进算法,只有匿名的、按分钟聚合的运动特征会上传——所以它不是"完全离线",这点我们如实说明,而不是假装什么都不传。',
    en: 'No account, no login — the only identifier is an anonymized device ID. Your snore and sleep-talk recordings stay on your phone and are never uploaded. To keep improving the model, only anonymized, minute-level motion features are sent — so it is not “fully offline,” and we say that plainly rather than pretend nothing leaves.',
  },
  faqHeading: { zh: '常见问题', en: 'FAQ' },
  faq: [
    {
      q: { zh: '监测睡眠需要智能手表吗?', en: 'Do I need a smartwatch to track sleep?' },
      a: {
        zh: '不需要。睡眠岛只用手机的运动传感器,手腕上不用戴任何东西,也不用买额外设备。',
        en: 'No. Sleep Island uses only your phone’s motion sensors — nothing on your wrist and no extra device to buy.',
      },
    },
    {
      q: { zh: '和 Apple Watch 比准不准?', en: 'How accurate is it compared to an Apple Watch?' },
      a: {
        zh: '睡 / 醒的判断在我们的对照测试里约 95% 一致;深浅睡的分期是估计,能读心率的手表更准;REM 我们不在手机上给。要精确分期,手表更合适——但日常了解自己的睡眠,手机足够。',
        en: 'Sleep-vs-wake agreed about 95% of the time in our testing. Staging (light/deep) is an estimate and a heart-rate watch is more precise; we don’t report REM on phone. For precise staging a Watch is better — but for understanding your sleep day to day, the phone is plenty.',
      },
    },
    {
      q: { zh: '会很费电吗?', en: 'Does it drain my battery overnight?' },
      a: {
        zh: '设计上很省:整夜只做廉价的传感器采集,重的分析只在早上结束时跑一次,而不是整晚持续计算。',
        en: 'It’s designed to be light: cheap sensor collection runs overnight, and the heavy analysis runs just once in the morning rather than continuously through the night.',
      },
    },
    {
      q: { zh: '真的免费?有什么套路?', en: 'Is it really free? What’s the catch?' },
      a: {
        zh: '核心功能免费,没有订阅、没有 7 天试用、不用注册账号。唯一如实说明的代价是:匿名运动特征会上传用于改进算法。',
        en: 'The core is free — no subscription, no 7-day trial, no account. The one honest caveat: anonymized motion features upload to improve the model.',
      },
    },
  ],
};

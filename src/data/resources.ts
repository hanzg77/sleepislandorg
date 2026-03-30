export const resources: Record<string, any> = {
  // ── Rain 雨声 ──────────────────────────────────────────
  'rain-fireplace': {
    id: '699466c24a7ad44fa0f98997',
    title: '窗外雨声与壁炉',
    titleEn: 'Rain & Fireplace',
    category: 'Rain',
    scenes: ['入睡', '放松', '阅读'],
    duration: 'PT8H',
    durationLabel: '8 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/vol04_rain_fireplace_2.mp3',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/699466c24a7ad44fa0f98997_zh_6.jpg',
    video: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/video/699466c24a7ad44fa0f98997_6.mp4',
    desc: '窗外淅淅沥沥的雨声搭配室内温暖的壁炉噼啪声，营造舒适安眠的氛围。',
    descEn: 'Gentle rain outside paired with warm crackling fireplace sounds, creating a cozy atmosphere for sleep.',
    related: ['lake-rain', 'gentle-night-rain', 'tropical-rainforest', 'winter-cave-fireplace', 'thunderstorm'],
  },
  'lake-rain': {
    id: '698ee7a94a7ad44fa0f7f302',
    title: '湖面雨滴',
    titleEn: 'Lake Raindrops',
    category: 'Rain',
    scenes: ['入睡', '放松', '冥想'],
    duration: 'PT8H',
    durationLabel: '8 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/vol03_rain_lake.mp3',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/698ee7a94a7ad44fa0f7f302_zh_16.jpg',
    video: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/video/698ee7a94a7ad44fa0f7f302_15.mp4',
    desc: '雨滴落在湖面上泛起涟漪，轻柔的水声伴你安然入睡。',
    descEn: 'Raindrops creating ripples on a lake surface, gentle water sounds to help you fall asleep.',
    related: ['rain-fireplace', 'relaxing-rain', 'gentle-night-rain', 'rain-forest-stream', 'deep-sea-bubbles'],
  },
  'relaxing-rain': {
    id: '68f723625c1b7e498cd53509',
    title: '放松雨声',
    titleEn: 'Relaxing Rain',
    category: 'Rain',
    scenes: ['入睡', '放松', '减压'],
    duration: 'PT10H',
    durationLabel: '10 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68f723625c1b7e498cd53509_clip.m4a',
    cover: '/assets/covers/relaxing-rain.jpg',
    desc: '纯粹的雨声，没有音乐和雷声干扰，帮助你彻底放松并缓缓入睡。',
    descEn: 'Pure rain sounds without music or thunder, helping you fully relax and gently drift to sleep.',
    related: ['gentle-night-rain', 'lake-rain', 'rain-fireplace', 'rain-forest-stream', 'thunderstorm'],
  },
  'gentle-night-rain': {
    id: '684b0130cbbee57a39e40f24',
    title: '轻柔夜雨',
    titleEn: 'Gentle Night Rain',
    category: 'Rain',
    scenes: ['入睡', '失眠', '放松'],
    duration: 'PT3H',
    durationLabel: '3 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684b0130cbbee57a39e40f24_clip.m4a',
    cover: '/assets/covers/gentle-night-rain.webp',
    desc: '夜间轻柔的雨声，无音乐无雷声，2 分钟内帮你安然入睡。',
    descEn: 'Soft night rain sounds, no music or thunder, helping you fall asleep within 2 minutes.',
    related: ['relaxing-rain', 'lake-rain', 'rain-fireplace', 'rain-forest-stream', 'thunderstorm'],
  },
  'rain-forest-stream': {
    id: '696706a14a7ad44fa0e9b6bd',
    title: '雨声与溪流',
    titleEn: 'Rain & Forest Stream',
    category: 'Rain',
    scenes: ['入睡', '放松', '冥想'],
    duration: 'PT10H',
    durationLabel: '10 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/696706a14a7ad44fa0e9b6bd_clip.m4a',
    cover: '/assets/covers/rain-forest-stream.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/696706a14a7ad44fa0e9b6bd_c.mp4',
    desc: '雨声与森林溪流声交融，流水潺潺加上淅淅雨声，双重自然白噪音。',
    descEn: 'Rain and forest stream sounds intertwined, double natural white noise for deep relaxation.',
    related: ['lake-rain', 'relaxing-rain', 'tropical-rainforest', 'gentle-night-rain', 'rain-fireplace'],
  },
  'thunderstorm': {
    id: '69309157e992a1a94be4705a',
    title: '铁皮屋顶雷雨',
    titleEn: 'Thunderstorm on Tin Roof',
    category: 'Rain',
    scenes: ['深度放松', '遮蔽噪音', '入睡'],
    duration: 'PT3H',
    durationLabel: '3 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/69309157e992a1a94be4705a_clip.m4a',
    cover: '/assets/covers/thunderstorm.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/69309157e992a1a94be4705a_c.mp4',
    desc: '铁皮屋顶上的倾盆大雨与远处雷声，强效遮蔽环境噪音，帮你快速入睡。',
    descEn: 'Heavy rain on a tin roof with distant thunder, powerful noise masking for quick sleep.',
    related: ['rain-fireplace', 'gentle-night-rain', 'relaxing-rain', 'blizzard', 'rain-forest-stream'],
  },

  // ── Nature 自然 ────────────────────────────────────────
  'tropical-rainforest': {
    id: '69949bde4a7ad44fa0f9a39a',
    title: '热带雨林·鸟鸣',
    titleEn: 'Tropical Rainforest',
    category: 'Nature',
    scenes: ['入睡', '冥想', '放松'],
    duration: 'PT8H',
    durationLabel: '8 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/vol05_rainforest_5.mp3',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/69949bde4a7ad44fa0f9a39a_zh_2.jpg',
    video: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/video/69949bde4a7ad44fa0f9a39a_2.mp4',
    desc: '雨林深处的鸟鸣声与倾盆大雨交织，沉浸式丛林白噪音伴你入眠。',
    descEn: 'Birdsong and heavy rain deep in the rainforest, immersive jungle white noise for sleep.',
    related: ['rain-forest-stream', 'rain-fireplace', 'crickets-insects', 'lake-rain', 'blizzard'],
  },
  'deep-sea-bubbles': {
    id: '698c9d384a7ad44fa0f74198',
    title: '深海气泡',
    titleEn: 'Deep Sea Bubbles',
    category: 'Nature',
    scenes: ['深度放松', '冥想', '入睡'],
    duration: 'PT8H',
    durationLabel: '8 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/vol01_deep_sea_bubbles.mp3',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/698c9d384a7ad44fa0f74198_zh_4.jpg',
    video: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/video/68454134f6e588687f9bd24d_1.mp4',
    desc: '来自深海的气泡白噪音，沉浸式助眠体验。',
    descEn: 'Deep sea bubble white noise for an immersive sleep experience.',
    related: ['lake-rain', 'tropical-rainforest', 'rain-forest-stream', 'blizzard', 'pink-noise'],
  },
  'blizzard': {
    id: '684ab3b4cbbee57a39e40a70',
    title: '暴风雪',
    titleEn: 'Blizzard',
    category: 'Nature',
    scenes: ['入睡', '放松', '遮蔽噪音'],
    duration: 'PT10H',
    durationLabel: '10 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684ab3b4cbbee57a39e40a70_clip.m4a',
    cover: '/assets/covers/blizzard.webp',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/7BrIJrjxVxA.mp4',
    desc: '森林中的暴风雪声和呼啸的北极风，营造平静的氛围，帮助放松和入睡。',
    descEn: 'Blizzard sounds with howling arctic wind in the forest, creating a calm atmosphere for sleep.',
    related: ['thunderstorm', 'deep-sea-bubbles', 'rain-fireplace', 'pink-noise', 'relaxing-rain'],
  },

  // ── Fireplace 炉火 ────────────────────────────────────
  'winter-cave-fireplace': {
    id: '6862ab1558388f37091ca5a6',
    title: '冬日洞穴炉火',
    titleEn: 'Winter Cave Fireplace',
    category: 'Fireplace',
    scenes: ['放松', '入睡', '冥想'],
    duration: 'PT8H',
    durationLabel: '8 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6862ab1558388f37091ca5a6_clip.m4a',
    cover: '/assets/covers/winter-cave-fireplace.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6862ab1558388f37091ca5a5_c.mp4',
    desc: '在舒适的冬日洞穴中伴着噼啪作响的炉火放松身心，外面是荒野中柔和的自然之声。',
    descEn: 'Relax in a cozy winter cave with a crackling fireplace, surrounded by soft wilderness sounds.',
    related: ['rain-fireplace', 'thunderstorm', 'blizzard', 'deep-sea-bubbles', 'gentle-night-rain'],
  },

  // ── Tinnitus Relief 耳鸣缓解 ──────────────────────────
  'cricket-sounds': {
    id: '692f6203e992a1a94be45a9f',
    title: '蟋蟀对话',
    titleEn: 'Cricket Sounds',
    category: 'Tinnitus Relief',
    scenes: ['耳鸣缓解', '放松', '入睡'],
    duration: 'PT10H',
    durationLabel: '10 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/materials/insects/cricket_3min.mp3',
    cover: '/assets/covers/cricket-sounds.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/692f6203e992a1a94be45a9f_c.mp4',
    desc: '夜间蟋蟀对话声，频率范围（2000-6000Hz）与常见耳鸣接近，很多用户反馈可有效缓解耳鸣。',
    descEn: 'Night cricket dialogue sounds, frequency range (2000-6000Hz) close to common tinnitus, many users report effective tinnitus relief.',
    related: ['crickets-insects', 'pink-noise', 'tropical-rainforest', 'rain-forest-stream', 'blizzard'],
  },
  'crickets-insects': {
    id: '69729d6b4a7ad44fa0ef0329',
    title: '草地虫鸣夜风',
    titleEn: 'Crickets & Insects',
    category: 'Tinnitus Relief',
    scenes: ['耳鸣缓解', '助眠', '放松'],
    duration: 'PT10H',
    durationLabel: '10 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/69729d6b4a7ad44fa0ef0329_clip.m4a',
    cover: '/assets/covers/crickets-insects.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/69729d6b4a7ad44fa0ef0329_c.mp4',
    desc: '草地上蟋蟀和昆虫在微风夜晚中的合唱，自然的节奏变化不会造成听觉疲劳，适合耳鸣缓解。',
    descEn: 'Crickets and insects chorus on a grassy hill with breezy night, natural rhythm variation for tinnitus relief.',
    related: ['cricket-sounds', 'pink-noise', 'tropical-rainforest', 'rain-forest-stream', 'deep-sea-bubbles'],
  },

  // ── White Noise 噪音 ──────────────────────────────────
  'pink-noise': {
    id: '684b0bcbcbbee57a39e40f61',
    title: '粉红噪音',
    titleEn: 'Pink Noise',
    category: 'White Noise',
    scenes: ['入睡', '耳鸣缓解', '深度放松'],
    duration: 'PT10H',
    durationLabel: '10 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684b0bcbcbbee57a39e40f61_clip.m4a',
    cover: '/assets/covers/pink-noise.webp',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/RA8gajb1KOU.mp4',
    desc: '低频能量更强的粉红噪音，比白噪音更柔和温暖，研究显示对深度睡眠有促进作用，也适合耳鸣缓解。',
    descEn: 'Pink noise with stronger low-frequency energy, softer and warmer than white noise, promotes deep sleep and tinnitus relief.',
    related: ['cricket-sounds', 'crickets-insects', 'blizzard', 'deep-sea-bubbles', 'thunderstorm'],
  },


  // ── Synced from API 2026-03-30 ──
  'asmr': {
    id: '683dde83c259af71d8ce66bb',
    title: '献给现在就想睡个好觉的人们的ASMR 99.9%的人会睡着 / 3小时 (无说话)',
    titleEn: '', // TODO: add English title
    category: 'ASMR',
    scenes: ['放松', '入睡', '冥想'],
    duration: 'PT3H26M',
    durationLabel: '3 小时 26 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/683dde83c259af71d8ce66bb.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/683dde83c259af71d8ce66bb_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video/lHZ2azw5LCc.mp4',
    desc: '今天的视频是我过去发布的视频中最受欢迎的触发音合集 😊✨ 这个视频包括敲击、刮擦、耳刷、掏耳朵、耳部按摩、麦克风刷、保鲜膜、盖子声、塑料勺等。 感谢大家祝贺频道订阅人数达到200万！😊❤ 时间戳： 预览 塑料勺 蜡烛刮擦 蜡烛敲击 麦克风刷 毛毡杯垫刮擦 洗脸 盖子声 耳刷（深入） 保鲜膜 + ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-69a80a4f': {
    id: '69a80a4f4a7ad44fa0019524',
    title: '穿过麦田，听风吹麦浪的声音',
    titleEn: '', // TODO: add English title
    category: 'White Noise',
    scenes: ['入睡', '遮蔽噪音'],
    duration: 'PT8H',
    durationLabel: '8 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/vol01_wind_autumn_field_1.mp3',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/69a80a4f4a7ad44fa0019524_zh_8.jpg',
    video: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/video/69a80a4f4a7ad44fa0019524_5.mp4',
    desc: '秋季草地上的微风，干草沙沙声混合轻柔风声，适合助眠和放松',
    descEn: '', // TODO: add English description
    related: [],
  },

  'sleep-insomnia': {
    id: '6862b8f058388f37091ca692',
    title: '立刻入睡 立即缓解失眠 消除潜意识消极情绪',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT3H52M',
    durationLabel: '3 小时 52 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6862b8f058388f37091ca692.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6862b8f058388f37091ca692_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6862b8f058388f37091ca691_c.mp4',
    desc: '立即入睡 ★ 快速缓解失眠 ★ 消除潜意识消极情绪 频道：无重力内心冥想 🎵音轨信息： 作曲：无重力 _________________________ 放松睡眠、冥想、学习、阅读、按摩、SPA或睡眠的音乐。这种音乐非常适合对抗焦虑、压力或失眠，因为它有助于放松，并帮助我们消除不良振动。您还可以将',
    descEn: '', // TODO: add English description
    related: [],
  },

  'relax-sleep-insomnia': {
    id: '6909ad012f0f6a7319edd5fb',
    title: '失眠疗愈，褪黑素和毒素释放，即时放松 - 疗愈睡眠音乐',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H44M',
    durationLabel: '3 小时 44 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6909ad012f0f6a7319edd5fb.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6909ad012f0f6a7319edd5fb_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6909ad012f0f6a7319edd5fb_c.mp4',
    desc: '失眠治疗，释放褪黑素和毒素，即时放松 - 疗愈睡眠音乐 🌙欢迎来到睡眠音乐。 伴随我们舒缓的音乐，体验宁静而充满活力的夜晚睡眠。 释放压力，拥抱褪黑素的镇静效果，让您的身体在您进入深度、安宁的睡眠时排毒。 使用此放松声音合集，营造完美的气氛，享受宁静的夜晚休息。 _________________',
    descEn: '', // TODO: add English description
    related: [],
  },

  'rain-forest-relax': {
    id: '6842b124f6e588687f9badec',
    title: '聆听森林小径上的雨声，放松身心，减轻焦虑，并深度睡眠。',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '遮蔽噪音', '放松'],
    duration: 'PT2H49M',
    durationLabel: '2 小时 49 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6842b124f6e588687f9badec.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6842b124f6e588687f9badec_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/SnUBb-FAlCY.mp4',
    desc: '自然雨声，睡眠音乐，白噪音，ASMR，雷暴雨，睡眠，雨，下雨天，真实雨声，学习，工作，冥想，失眠，催眠，生活记录，雨声助眠... #雨 #自然 #ASMR',
    descEn: '', // TODO: add English description
    related: [],
  },

  'rain-forest-sleep': {
    id: '68f2031b43c57ba8c1c9dec4',
    title: '【4M】森林之夜最佳雨声 | 伴随大雨声深度睡眠',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '遮蔽噪音', '放松'],
    duration: 'PT8H',
    durationLabel: '8 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68f2031b43c57ba8c1c9dec4.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68f2031b43c57ba8c1c9dec4_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/68f2031b43c57ba8c1c9dec4_c.mp4',
    desc: '在夜晚，伴随着倾盆大雨落在僻静的森林小屋上的强大节奏声入睡。 当暴风雨包围着你时，在甲板上放松身心——没有循环，没有音乐，只有 8 小时纯粹、身临其境的自然氛围。 🎧 理想用于 – 深度睡眠和缓解失眠– 平静专注和作为学习或工作的背景音乐– 冥想、缓解焦虑和夜间放松 ⏳ 章节– 伴随大雨入睡 8 ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'crickets-relax-sleep': {
    id: '6862b81158388f37091ca68f',
    title: '放松的睡眠音乐和夜晚的自然之声：轻柔的蟋蟀声、优美的钢琴声、深度睡眠音乐',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松'],
    duration: 'PT3H27M',
    durationLabel: '3 小时 27 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6862b81158388f37091ca68f.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6862b81158388f37091ca68f_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6862b81158388f37091ca68e_c.mp4',
    desc: '优美的钢琴音乐和宁静的夏夜声音，伴有蟋蟀和萤火虫。 在 Spotify 上收听 ► ✨ Spotify 播放列表 ► 🌌 夜晚声音播放列表 ► 订阅 Dream Sounds 以获取未来上传的最新信息 ► 更多放松音乐： ☔ 放松雨声 ► 🌲 自然之声 ► 💧 水声 ► 🎧 下载/播放 ► ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'meditation-relax-sleep': {
    id: '684b002ecbbee57a39e40f22',
    title: '真正消除疲劳 | 真正消除疲劳，助您熟睡的睡眠引导音乐、舒缓的冥想音乐，让您放松。| Minan',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT3H30M',
    durationLabel: '3 小时 30 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684b002ecbbee57a39e40f22.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/684b002ecbbee57a39e40f22_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/6YIRR9U6iPg.mp4',
    desc: '大家好！ 我用心创作了这些音符钢琴曲！ 希望它也能触动你的心！ 而且，听我的音乐，能让你感到舒适、放松，并能让你睡得很香！ 休息得越多，免疫系统就越强。德尔塔脑波状态可以改善各个层面的健康——包括对疾病的额外免疫力。睡眠不足会影响免疫系统。研究表明，睡眠质量差或睡眠不足的人，在接触到普通感冒病毒等病',
    descEn: '', // TODO: add English description
    related: [],
  },

  'rain-thunder-relax': {
    id: '6907f7582f0f6a7319edc999',
    title: '用于睡眠、学习和放松的暴雨雷声 - 避风港氛围 | 3 小时',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '遮蔽噪音', '放松'],
    duration: 'PT3H',
    durationLabel: '3 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6907f7582f0f6a7319edc999.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6907f7582f0f6a7319edc999_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6907f7582f0f6a7319edc999_c.mp4',
    desc: 'Enjoy this calming and relaxing heavy thunderstorm sounds, relaxing rain & lightning thunder for sleep, study and total relaxation. Perfect ASMR Ambie',
    descEn: '', // TODO: add English description
    related: [],
  },

  'meditation-sleep-music': {
    id: '685e5fec97b4f445daa7d3af',
    title: '西藏 - 疗愈空灵氛围冥想 - 轻松睡眠氛围音乐',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT1H',
    durationLabel: '1 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/685e5fec97b4f445daa7d3af.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/685e5fec97b4f445daa7d3af_1.jpg',
    video: 'https://www.youtube.com/watch?v=Rc7g5jKET_Q',
    desc: '在这首乐曲中，我使用了多种西藏颂钵的声音变奏，并加入了各种原声纹理和柔和旋律元素的回声。 作者的话：大家好，我是永恒深渊（Eternal Depth）！我创作各种形式的氛围音乐。在这个频道，你会找到诸如舒缓氛围音乐、太空氛围音乐、放松氛围音乐、冥想氛围音乐、梦幻氛围音乐、空灵氛围音乐、治愈氛围音乐、',
    descEn: '', // TODO: add English description
    related: [],
  },

  'rain-sleep-insomnia': {
    id: '68bf1765f26e9b47b8bde497',
    title: '立即入睡 - 舒缓睡眠音乐 + 失眠 | 缓解压力、焦虑的雨声',
    titleEn: '', // TODO: add English title
    category: 'White Noise',
    scenes: ['入睡', '遮蔽噪音'],
    duration: 'PT3H',
    durationLabel: '3 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68bf1765f26e9b47b8bde497.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68bf1765f26e9b47b8bde497_1.jpg',
    video: 'https://www.youtube.com/watch?v=loO-KqvSZ6U',
    desc: 'FALL INTO SLEEP INSTANTLY - 助眠放松音乐 + 失眠 | 雨声舒缓压力、焦虑 ----------------------------------------- ►欢迎来到放松雨声助眠音乐频道！ ►您是否正在寻找一个绝佳的放松空间，以缓解压力、恢复良好睡眠并治愈心灵？快来加',
    descEn: '', // TODO: add English description
    related: [],
  },

  'bgm-nature-sounds-hour': {
    id: '6852e252ac14de312b614973',
    title: '【睡眠用BGM│自然音】 乡村的夜晚│虫鸣・潺潺流水・青蛙・猫【Nature Sounds 3hour】',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松', '遮蔽噪音'],
    duration: 'PT3H',
    durationLabel: '3 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6852e252ac14de312b614973.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6852e252ac14de312b614973_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6852e252ac14de312b614973_c.mp4',
    desc: '遥远不知名的小镇的夜晚。 从屋外传来的虫鸣声和潺潺的流水声， 给人一种回到老家的安心感。 推荐用于工作、睡眠用BGM等^^ 今天也睡个好觉😴 ◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆ 【热门相关视频】 ■【自然音】噼啪作响的舒适篝火影像×催眠的朗读 ＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿ 感',
    descEn: '', // TODO: add English description
    related: [],
  },

  'sleep-aid-sleep-night': {
    id: '68e3234ea68e75503cb86f87',
    title: '【助眠历史故事】 在古代中国生活，你能撑过几个小时？ #睡眠 #助眠 #夜晚故事 #沉浸式#history#古代生活#夜晚故事 #古代中国 #农民生活',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H37M',
    durationLabel: '1 小时 37 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68e3234ea68e75503cb86f87.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68e3234ea68e75503cb86f87_1.jpg',
    video: 'https://www.youtube.com/watch?v=1vRVd4UK8Cg',
    desc: '今晚就来放松一下吧，听一段专门为助眠设计的故事，让你的思绪慢慢安静下来，轻轻进入深度睡眠。这段一个小时四十分钟的影片，把温暖壁炉劈啪作响的声音，和温柔低语的讲述结合在一起，讲的是那些关于战争和历史时刻的故事。在火光微弱跳动中，带你揭开历史名人的不为人知一面，探索未解的谜团，还有那些令人难忘的往事。它',
    descEn: '', // TODO: add English description
    related: [],
  },

  'lo-fi': {
    id: '6842fb65f6e588687f9baf0c',
    title: '相信自己。一切都会好的。[Lo-fi]',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松'],
    duration: 'PT5H41M',
    durationLabel: '5 小时 41 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6842fb65f6e588687f9baf0c.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6842fb65f6e588687f9baf0c_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/SOSxHRwK6GI.mp4',
    desc: '``` #jazzhop #chillhop #citypop #rainlofi #lofirain #studymusic #studywithme #lofi #lofihiphop #lofibeats #beatstostudy #chillmusic #jazzhop #chillhop',
    descEn: '', // TODO: add English description
    related: [],
  },

  'birds-chirping': {
    id: '683dcc15c259af71d8ce6601',
    title: '4K 自然环境音 / 涌泉流淌的河水声 鸟鸣 birds chirping',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '遮蔽噪音', '放松'],
    duration: 'PT3H',
    durationLabel: '3 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/683dcc15c259af71d8ce6601.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/683dcc15c259af71d8ce6601_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/683dcc15c259af71d8ce6601_c.mp4',
    desc: '4K 自然环境音 ASMR 涌水流淌的河川之音 鸟鸣 岐阜县山县市 圆原川 在圆原川，从春天到夏天可以听到极具特色的鸟鸣声。 这个视频中的鸟鸣声是在当地新录制的，并进行了视频编辑，请观看新的2025年版视频。 The bird sounds in this video have been newly',
    descEn: '', // TODO: add English description
    related: [],
  },

  'asmr-nature-sounds': {
    id: '684b05aacbbee57a39e40f28',
    title: '【环境音/ASMR】水的声音・虫鸣｜安静夜晚的虫鸣・轻柔的水声｜睡眠・放松｜自然环境音・Nature Sounds',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松'],
    duration: 'PT2H',
    durationLabel: '2 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684b05aacbbee57a39e40f28.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/684b05aacbbee57a39e40f28_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/8gxWEYoJFMg.mp4',
    desc: '【环境音/ASMR】水声・虫鸣｜静谧夜晚的虫鸣声・轻柔的水声。静静流淌的水声和虫鸣声能诱人舒适入眠。据说比起单一的鸣叫声，多种虫鸣声更能带来睡眠・放松等心理上的恢复效果。请尽情享受能舒适入睡的治愈环境音/ASMR“静谧夜晚的虫鸣声・平静的水声”。 这里的自然音是双耳录音（立体音响），因此完成了具有纵',
    descEn: '', // TODO: add English description
    related: [],
  },

  'relax-piano': {
    id: '68d2861229b3d54f00a5ac39',
    title: '4 首动听的配乐 | 放松钢琴曲 [10分钟]',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT10M',
    durationLabel: '10 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68d2861229b3d54f00a5ac39.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68d2861229b3d54f00a5ac39_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/68d2861229b3d54f00a5ac39.mp4',
    desc: '🎼 学习乐谱，与 Jacob 一起 ▶ 🎵 乐谱 ▶ 🎹 学习钢琴 ► 🎧 Spotify ► ► MIDI 文件: 我的原创钢琴曲 ► 不用 Spotify？ 别担心： ► 专辑页面: ► Apple Music (iTunes): ► Amazon Music: ▼曲目列表▼ ; 天使爱',
    descEn: '', // TODO: add English description
    related: [],
  },

  'chill-mix-study-work': {
    id: '68c0e04cf26e9b47b8bdf3fd',
    title: '【2025全新英文歌单】无广告好听抒情英文歌单｜专注读书与工作背景音乐｜福冈耶诞市集氛围｜chill mix/study/work | #music #playlist #bgm ｜读书音乐｜工作音乐',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H3M',
    durationLabel: '1 小时 3 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68c0e04cf26e9b47b8bdf3fd.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68c0e04cf26e9b47b8bdf3fd_1.jpg',
    video: 'https://www.youtube.com/watch?v=EVqAd_dRrtA',
    desc: '#英文抒情音樂 #工作音樂 #讀書音樂 #放鬆旋律 哈囉大家好！我是樂樂～2025年的第一個週末，天氣有點冷，你們那邊怎麼樣呢？希望你們都有穿暖暖的哦～最近，我特別準備了一份全新英文抒情音樂歌單，希望能陪伴你們在讀書或工作的時候，營造一個溫暖又專注的氛圍！🎵 這次的畫面選在 日本福岡的耶誕市集夜晚',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-684afc1b': {
    id: '684afc1bcbbee57a39e40f1e',
    title: '852 Hz - 释放恐惧、过度思考和担忧 | 清除破坏性能量 | 唤醒直觉',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT4H',
    durationLabel: '4 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684afc1bcbbee57a39e40f1e.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/684afc1bcbbee57a39e40f1e_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/-vvpsIiUVKY.mp4',
    desc: '梭菲吉欧 852 Hz 与光的原则直接相关，而光是生物能量的一种更高形式。 这个频率可以作为与你的高我沟通、唤醒你的直觉和内在力量的一种方式。 这个频率可以用来清除被困的负能量，消除恐惧、过度思考和忧虑。 下载：此音频 + 6 个更多版本（含自然声音）；可在 iTunes 上获取： 这个频率可以作为',
    descEn: '', // TODO: add English description
    related: [],
  },

  'hz-malte-marten': {
    id: '687a1b51846a1db211d08396',
    title: '成长的种子 (1111hz) | 1 小时手碟音乐 | Malte Marten',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT1H4M',
    durationLabel: '1 小时 4 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/687a1b51846a1db211d08396.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/687a1b51846a1db211d08396_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/687a1b51846a1db211d08395.mp4',
    desc: '在我们内心深处有这样一个地方，只有当我们敢于向无尽的可能之海敞开胸怀时，它才会变得鲜活。允许它存在会让我们感到最脆弱和最危险。它又如此的不安全，以至于我们大多数人甚至从未想过完全地进入它。 正是这个地方，也被称为我们的心，提供了最大的自由和难以形容的活力。 正是在这里，成长的种子找到了肥沃的土壤来扎',
    descEn: '', // TODO: add English description
    related: [],
  },

  'asmr-2': {
    id: '68f0def3d89ffd86fb96e849',
    title: '越南全身护理课程 ASMR采耳，足部护理，面部 & 背部按摩，洗发',
    titleEn: '', // TODO: add English title
    category: 'ASMR',
    scenes: ['放松', '入睡'],
    duration: 'PT1H19M',
    durationLabel: '1 小时 19 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68f0def3d89ffd86fb96e849.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68f0def3d89ffd86fb96e849_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/68f0def3d89ffd86fb96e849.mp4',
    desc: '你好 :) 在这个视频中，我将通过耳部清洁、足部护理、面部和背部按摩以及洗发来帮助您放松。 请享受。 非常感谢您的观看，希望您有一个平静的夜晚！ 时间戳🧺 介绍 欢迎 足部护理 泡沫 足部喷雾 去除老茧 足部乳液 面部刮胡 面部按摩 头皮按摩 颈部和肩部按摩 敷黄瓜片 耳部清洁 左耳清洁 指甲护理',
    descEn: '', // TODO: add English description
    related: [],
  },

  'piano': {
    id: '689ebf9c48f6b8d1034a4935',
    title: '肖邦精选：钢琴独奏',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT2H5M',
    durationLabel: '2 小时 5 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/689ebf9c48f6b8d1034a4935.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/689ebf9c48f6b8d1034a4935_1.jpg',
    video: 'https://www.youtube.com/watch?v=bdo-b7NjOAs',
    desc: '👉 在Patreon上支持我们: 🎧 Spotify: 🎧 Apple Music: 🎶 购买音乐: 🛒 古典绿洲周边商品: ☕ 捐赠: 🎵 Spotify 播放列表: • 古典钢琴: • 每周更新: ✅ 订阅: *⃣ Linktree: ▶ 肖邦夜曲的历史： 超过2小时的肖邦最伟大的独',
    descEn: '', // TODO: add English description
    related: [],
  },

  'asmr-spa': {
    id: '69030dbffe59907d39b0cf00',
    title: 'ASMR 为了缓解压力去做了头部SPA，简直像在天堂一样。 尖叫吧 订阅者活动~~~头皮按摩，体验酥麻的睡眠~',
    titleEn: '', // TODO: add English title
    category: 'ASMR',
    scenes: ['放松', '入睡'],
    duration: 'PT47M',
    durationLabel: '47 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/69030dbffe59907d39b0cf00.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/69030dbffe59907d39b0cf00_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/69030dbffe59907d39b0cf00.mp4',
    desc: '``` #asmr #头皮按摩 #头部SPA #睡眠 #酥麻 #esteASMR 大家好，我是 este ASMR😪 今天好久没去做了头部SPA和头皮按摩， 在一个氛围超棒的地方接受舒适的护理，简直就是治愈本身~ 酥麻的声音此起彼伏，感觉就要进入梦乡了。 不仅有管理师凉爽的按摩技巧，还有\'wate',
    descEn: '', // TODO: add English description
    related: [],
  },

  'healing-zen': {
    id: '68f740575c1b7e498cd53780',
    title: '西藏禅音疗愈全身，疗愈净化情绪与心灵 - 528 Hz',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT1H44M',
    durationLabel: '1 小时 44 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68f740575c1b7e498cd53780.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68f740575c1b7e498cd53780_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/68f740575c1b7e498cd53780_c_v1761042212.mp4',
    desc: '藏传禅音疗愈全身，净化情绪与灵魂 - 528 Hz 🌿 藏传禅音与528 Hz频率（被称为爱与疗愈的频率）结合，带来深刻的体验，疗愈整个身体，净化情绪和灵魂。 这些纯净的振动温和地影响每个细胞，唤起平衡和谐的能量。 当您聆听时，您会感受到平静的蔓延，有助于缓解压力，治愈情感创伤，并为灵魂打开一个清',
    descEn: '', // TODO: add English description
    related: [],
  },

  'bgm-sleep-music-minan': {
    id: '684b06f4cbbee57a39e40f2a',
    title: '【睡眠用bgm・5分で寝落ち】疲れた心身的恢复・放松效果・学习中或作业用、醒来的早上、或者睡不着的夜晚也请享用。| Sleep music| Minan - 睡眠用bgm 疲劳恢复',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['冥想', '放松', '入睡'],
    duration: 'PT3H1M',
    durationLabel: '3 小时 1 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684b06f4cbbee57a39e40f2a.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/684b06f4cbbee57a39e40f2a_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/pHynydQfeX8.mp4',
    desc: '🌙 不被打扰，给您带来最佳睡眠体验。 根据我自身和许多人的体验，我精心挑选了能引导你进入深度睡眠的最佳音乐，并将其整理成播放列表。 👉 欢迎通过此播放列表，享受宁静的夜晚。 大家好！ 我全心全意地创作了这些音符钢琴曲！ 希望它也能触动你的心！ 而且，聆听我的音乐，您会感到舒适、放松，并进入深度睡',
    descEn: '', // TODO: add English description
    related: [],
  },

  'ocean': {
    id: '6853fcb43c5f34b1355fc5dc',
    title: '体验日出后的宁静氛围，在空无一人的海滩上，4K 高清',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松', '遮蔽噪音'],
    duration: 'PT1H9M',
    durationLabel: '1 小时 9 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6853fcb43c5f34b1355fc5dc.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6853fcb43c5f34b1355fc5dc_1.jpg',
    video: 'https://www.youtube.com/watch?v=VEK3gXyhUBk',
    desc: '体验海岸景色的宁静，展示野花和摇曳的草地，以大海为背景的迷人景象。这款4K视频非常适合放松或用作屏幕保护程序，会将您带到一个平静的地方。让海浪轻轻地哄您入睡。 在此处查找更多海上的日出氛围： 如需在此处观看城市探索的轻松氛围视频： 在此处欣赏我的日落氛围视频： 如果您喜欢流水的声音和景色，请在此处欣',
    descEn: '', // TODO: add English description
    related: [],
  },

  'asmr-relaxing-long-hair': {
    id: '69683adc4a7ad44fa0ea80da',
    title: 'ASMR Relaxing Long Hair Service by Ukrainian Barber Girl Daria',
    titleEn: '', // TODO: add English title
    category: 'ASMR',
    scenes: ['放松', '入睡'],
    duration: 'PT37M',
    durationLabel: '37 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/69683adc4a7ad44fa0ea80da.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/69683adc4a7ad44fa0ea80da_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/69683adc4a7ad44fa0ea80da.mp4',
    desc: '💈ASMR Relaxing Long Hair Service by Ukrainian Barber Girl Daria Hi guys, I\'m a barber Daria from Kyiv. Your support means a lot to me, thank you! Con',
    descEn: '', // TODO: add English description
    related: [],
  },

  'hz-dna': {
    id: '6862a65858388f37091ca3ca',
    title: '【528Hz・睡眠导入】用修复DNA的索尔菲日频率和安静的冥想音乐，在得到治愈的同时享受高质量的睡眠…听着音乐轻松入睡、缓解压力、恢复疲劳',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT3H28M',
    durationLabel: '3 小时 28 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6862a65858388f37091ca3ca.m4a',
    cover: 'https://i.ytimg.com/vi_webp/EW4iydAQCUo/maxresdefault.webp',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6862a65858388f37091ca3c9_c.mp4',
    desc: '感谢您的观看。 也请订阅频道和评论！ 将Solfeggio频率528Hz融入柔和的治愈音乐中，成为诱人入睡的睡眠音乐。 除了睡觉时，疲惫时或想集中精神时也可以听听看。 今天也辛苦了… 之前的静止图像长时间版本也在公开中↓ LINE@也正在运营，请由此进入↓ Twitter请由此进入↓ 也可由此处订阅',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-6842f725': {
    id: '6842f725f6e588687f9baece',
    title: '最棒的燃燒壁爐：舒適的柴火噼啪聲和舒緩的光芒，助您入眠和放鬆 4K 超高清',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '遮蔽噪音', '放松'],
    duration: 'PT3H',
    durationLabel: '3 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6842f725f6e588687f9baece.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6842f725f6e588687f9baece_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/2wYtJwDkKIk.mp4',
    desc: '大家好！让我们聚集在一起，庆祝壁炉永恒的魅力。 壁炉不仅仅是房屋中的一个特色，更是一个避难所——一个温暖与宁静相遇，故事诞生的地方。 壁炉的故事可以追溯到几个世纪前，它从最初为早期房屋提供温暖和宜居性的简陋炉膛，演变为我们今天欣赏的优雅、精美制作的壁炉。在那些早期的日子里，壁炉是房屋的中心——光、热',
    descEn: '', // TODO: add English description
    related: [],
  },

  'asmr-3': {
    id: '68f1cf0243c57ba8c1c9d8bb',
    title: '摩卡慕斯妆容 ASMR ⸝ ⸝ 无语声 𐬹 ˙ ｡ ˚ ⠀༘',
    titleEn: '', // TODO: add English title
    category: 'ASMR',
    scenes: ['放松', '入睡'],
    duration: 'PT36M',
    durationLabel: '36 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68f1cf0243c57ba8c1c9d8bb.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68f1cf0243c57ba8c1c9d8bb_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/68f1cf0243c57ba8c1c9d8bb.mp4',
    desc: 'instagram 👉🏻 @go_zissss contact 👉🏻 go_zissss@dmil.kr 隐形眼镜 - 렌즈미 블론티 밀크쵸코 (LENS ME Blondie Milk Choco) 衣服 -',
    descEn: '', // TODO: add English description
    related: [],
  },

  'lofi-hip-hop': {
    id: '68c0e2f7f26e9b47b8bdf3fe',
    title: '慵懒的周日 [lofi hip hop]',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H13M',
    durationLabel: '1 小时 13 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68c0e2f7f26e9b47b8bdf3fe.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68c0e2f7f26e9b47b8bdf3fe_1.jpg',
    video: 'https://www.youtube.com/watch?v=zFhfksjf_mY',
    desc: '🎼 | 在 Spotify、Apple Music 等平台收听 → 💬 | 加入 Lofi Girl 社区 → → 🌎 | Lofi Girl 在所有社交媒体平台 → 👕 | Lofi Girl 周边 → 📝 | 提交你的音乐/艺术作品 → 🎨 Julia Shi 的艺术作品 → → →',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68bf46a8': {
    id: '68bf46a8f26e9b47b8bde804',
    title: '太平天国（合集）| 全网最详细讲解太平天国',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT7H20M',
    durationLabel: '7 小时 20 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68bf46a8f26e9b47b8bde804.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68bf46a8f26e9b47b8bde804_1.jpg',
    video: 'https://www.youtube.com/watch?v=nRr0wOxUbyo',
    desc: '＼免费公开课／ ■如何分析历史？从历史中学到精华的独家方法 ■「1921-1945年专题历史课程」 免费领取： 太平天国（1） | 洪秀全创教、传教 太平天国（2） | 拜上帝教为什么传的比基督教快 | 上帝在人间的七个孩子 太平天国（3）| 金田起义、永安建制 太平天国（4）| 围攻长沙，攻克武昌',
    descEn: '', // TODO: add English description
    related: [],
  },

  'meditation-relax-music': {
    id: '684af55bcbbee57a39e40ef9',
    title: '内在平静之声 14 | 528 Hz | 用于冥想、禅修、瑜伽和减压的放松音乐',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT3H',
    durationLabel: '3 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684af55bcbbee57a39e40ef9.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/684af55bcbbee57a39e40ef9_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/FTqrQsSIKR0.mp4',
    desc: '[3 小时] 用于冥想、禅、瑜伽和压力缓解的放松音乐 | 内心平静之声 14 | 528 Hz 这段 3 小时的平静和放松的环境音乐以 528 Hz 频率为特色 - 它带来转变和增加的爱能量、思维清晰、意识、激活的创造力和内心平静 - 以及舒缓的溪流声。 佛像的视频和动态的香烟雾气补充了氛围。 这非',
    descEn: '', // TODO: add English description
    related: [],
  },

  'music': {
    id: '68b2e1b565c4fc213f58c63f',
    title: '古典音乐：莫扎特、肖邦、德彪西、柴可夫斯基...（适合阅读时聆听）',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT2H27M',
    durationLabel: '2 小时 27 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68b2e1b565c4fc213f58c63f.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68b2e1b565c4fc213f58c63f_1.jpg',
    video: 'https://www.youtube.com/watch?v=mIYzp5rcTvU',
    desc: '🎵 在 Halidon Music 官方商店购买 MP3 专辑： 🎧 在 Spotify 上收听我们的播放列表： 💿 在亚马逊上订购“阅读音乐”！ 黑胶唱片： 2-CD 套装： 这些录音可用于网络视频制作、企业宣传片、电影、广告和音乐合辑的同步授权。 如需更多信息和授权，请联系 info@ha',
    descEn: '', // TODO: add English description
    related: [],
  },

  'malte-marten-chantress-seba': {
    id: '68a1895366b315411652dbf9',
    title: '嗡甘咒 (1 小时) - 清除能量 & 移除障碍 - Malte Marten & Chantress Seba',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT1H5M',
    durationLabel: '1 小时 5 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68a1895366b315411652dbf9.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68a1895366b315411652dbf9_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/68a1895366b315411652dbf8.mp4',
    desc: '祝福大家，我们邀请您加入我们一起吟唱象头神伽内什真言。通过以下简单的步骤，您可以驾驭伽内什强大的能量，并将和平、清晰和指引带入您的生活。 第一步：找到一个安静舒适的空间 舒适地坐好，做几次深呼吸。 第二步：重复真言 缓慢而清晰地吟唱“Om Gam Ganapataye Namaha”，让真言深入你的',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68abf496': {
    id: '68abf496a30d1d61989e4901',
    title: '只是想想...复古爵士',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT2H54M',
    durationLabel: '2 小时 54 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68abf496a30d1d61989e4901.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68abf496a30d1d61989e4901_1.jpg',
    video: 'https://www.youtube.com/watch?v=nv_2rz5BFDA',
    desc: '#爵士乐 #lofi音乐 #lofi学习 用这首流畅的复古爵士乐放松、学习，或只是简单地放松身心。 非常适合深夜专注学习、品尝威士忌，或只是让你的思绪飘荡。 以醇厚的钢琴和深情的萨克斯风为特色，这种悠闲的爵士乐融合为您的安静时刻带来怀旧的触感。 🎷 非常适合： – 学习或工作 – 在家放松 – 背',
    descEn: '', // TODO: add English description
    related: [],
  },

  'water': {
    id: '689b13b0189e8b47d8a4afb4',
    title: '晓松一口气讲《金瓶梅》，背叛与色欲游戏！？“三观尽毁”的小说，其实最真实！#矮大紧 #高晓松 #晓得 #天晓得 #晓说 #晓松奇谈 #矮大紧指北 #晓年鉴 #金瓶梅 #红楼梦 #水浒传 #明朝那些事儿',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H55M',
    durationLabel: '1 小时 55 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/689b13b0189e8b47d8a4afb4.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/689b13b0189e8b47d8a4afb4_1.jpg',
    video: 'https://www.youtube.com/watch?v=YVqM_uiNd-M',
    desc: '🎯内容介绍： 晓松带你深入了解被誉为“中国第一禁书”的《金瓶梅》。 它不仅是情色小说，更是一面照见人性欲望、社会腐败与阶级撕裂的镜子。 从潘金莲的欲望挣扎，到西门庆的荒淫成空，原来这才是真正的“大明宫词”。 🔍 为什么这部小说数百年来饱受争议？ 🔥 哪些桥段至今仍让人脸红心跳？ 😱 结局反转',
    descEn: '', // TODO: add English description
    related: [],
  },

  'meditation-music-healing': {
    id: '6862baae58388f37091ca695',
    title: '佛教冥想音乐，带来正能量：泰国佛教僧侣吟唱疗愈咒语',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT2H1M',
    durationLabel: '2 小时 1 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6862baae58388f37091ca695.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6862baae58388f37091ca695_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6862baae58388f37091ca694_c.mp4',
    desc: '佛教冥想音乐，带来正能量：泰国佛教僧侣吟唱疗愈真言。 我们致力于打造一个让你在需要放松和疗愈时可以随时回归的地方。 您想观看以下哪些精选视频播放列表？ 冥想音乐 精选我们最好的冥想曲目，受不同文化、宗教和思想流派影响的音乐。 乐器和吟唱的声音，拥有数千年的历史，例如印度长笛和佛教吟唱，承载着冥想的精',
    descEn: '', // TODO: add English description
    related: [],
  },

  'rain-sleep-healing': {
    id: '6862a22a58388f37091ca33a',
    title: '3 分钟入睡 - 快速入睡，焦虑症、抑郁症的疗愈 - 雨天 [深度睡眠]',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H54M',
    durationLabel: '3 小时 54 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6862a22a58388f37091ca33a.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6862a22a58388f37091ca33a_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6862a22a58388f37091ca339_c.mp4',
    desc: '3 分钟入睡 - 快速入睡，治疗焦虑症、抑郁症 - 雨天 [深度睡眠] 视频制作：Moose _______________________ 📜 您今天过得怎么样？ 我的今天就是来创作这些旋律、声音。音乐是生活中不可或缺的。如果我的音乐能帮助您变得快乐，忘记生活中的烦恼，我会非常高兴。 听我的音乐',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-683c596e': {
    id: '683c596e419e33a54c364d25',
    title: '慢生活 (安静的生活播放列表)',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松'],
    duration: 'PT30M',
    durationLabel: '30 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/683c596e419e33a54c364d25.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/683c596e419e33a54c364d25_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/683c596e419e33a54c364d25_c.mp4',
    desc: 'Spotify 播放列表： 乐谱（部分曲目）： 很多人在 Instagram 上为“慢生活（安静的生活）”创作了非常精美的视频，所以这首歌在 YouTube 上也应该有一个自己的播放列表 :) 时间戳： Ophelia Wilde - 慢生活（安静的生活） Ophelia Wilde - 草地上的野',
    descEn: '', // TODO: add English description
    related: [],
  },

  'relax-night-healing': {
    id: '6842a929f6e588687f9badd0',
    title: '【疗愈】新绿信州安昙野的清流与疗愈音效4小时／静谧时光的片刻……疲惫身心的恢复、放松效果、学习或工作时、清晨醒来、难以入眠的夜晚也请随意享用。',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松'],
    duration: 'PT4H24M',
    durationLabel: '4 小时 24 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6842a929f6e588687f9badd0.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6842a929f6e588687f9badd0_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/Ka3Smc5OfZg.mp4',
    desc: '用柔和的声音，信州・长野县安昙野的清澈流水声和鸟鸣声，以及美丽的新绿来治愈身心的疲惫吧。清爽的绿色和雄伟的自然会让心情放松。 ▼如果喜欢的话，请订阅频道 ▼蓝光光盘版（HD画质）请从雅虎购物购买。 如果能稍微缓解您的内心不安，我会很高兴的。 请在房间观赏、工作、学习时，或者在清晨醒来和睡眠时，聆听治',
    descEn: '', // TODO: add English description
    related: [],
  },

  'relax-piano-2': {
    id: '683dd847c259af71d8ce666f',
    title: '魔法是存在的。- 10分钟放松钢琴曲 (詹姆斯·马利基 作)',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT9M',
    durationLabel: '9 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/683dd847c259af71d8ce666f.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/683dd847c259af71d8ce666f_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/683dd847c259af71d8ce666e_c.mp4',
    desc: '这是翻译成简体中文的结果： 我的E大调即兴演奏，一次录制完成，灵感来自维也纳迷人的夜景——城市逐渐消逝的灯光和迷人的、颜色变幻的喷泉。 “琴键只有黑白两色， 但挑战在于演奏出介于两者之间的所有色彩。” “魔法确实存在。 音乐是它诞生的源泉之一。” 献给 Alessandro 老师 如果您喜欢我的内容',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-689f4c92': {
    id: '689f4c9266b315411652b612',
    title: '【有声书】诺贝尔文学奖《米格尔街》奈保尔（字幕完整版）',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT5H39M',
    durationLabel: '5 小时 39 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/689f4c9266b315411652b612.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/689f4c9266b315411652b612_1.jpg',
    video: 'https://www.youtube.com/watch?v=3zOx16CCGpU',
    desc: ':00 01.鲍嘉 :17 02.没有名字的东西 :41 03.乔治和他的粉红房子 :45 04.职业选择 :10 05.曼曼 :37 06.B.华兹华斯 :25 07.懦夫 :51 08.花炮师 :39 09.泰斯特·霍依特，中级文学学士 :42 10.母性的本能 :38 11.蓝色马车 :48 ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'rain-sleep-music': {
    id: '685416873c5f34b1355fc626',
    title: '“在雨中” 浪漫的睡眠音乐 - 你是梦吗..',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松'],
    duration: 'PT7H21M',
    durationLabel: '7 小时 21 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/685416873c5f34b1355fc626.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/685416873c5f34b1355fc626_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/685416873c5f34b1355fc625_c.mp4',
    desc: '阴天，晴天，下雨天 无论何时漫步都充满浪漫的我的城市， 以及你。 你，是梦吗… 🎵曲名 🎨画名 "In the rain" “下雨天” "Midnight" 音乐作曲 - G.W ㅣ 美术 - Hyunhyun 🌙希望通过 \'Music Drawing\' 的音乐和绘画， 分享小小的日常，带来温',
    descEn: '', // TODO: add English description
    related: [],
  },

  'rain': {
    id: '6863360058388f37091cab9e',
    title: '以下是翻译成简体中文的结果，并保留了原始的格式： 雨声伴眠故事 | 天文学家 | 成人睡前故事',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H40M',
    durationLabel: '1 小时 40 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6863360058388f37091cab9e.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6863360058388f37091cab9e_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6863360058388f37091cab9d_c.mp4',
    desc: '由托马斯·琼斯讲述。一位天文学家在这个沉睡改编的伊索寓言故事中学会欣赏他周围的世界。 欢迎来到 Get Sleepy 睡前放松 带雨声的睡前故事 背景睡眠音乐 今晚，我们将在古希腊的星空下漫步，在这个沉睡的改编故事中，讲述伊索寓言中关于欣赏你所在之处和你所拥有的一切的重要性。 😴 声音设计：蟋蟀声',
    descEn: '', // TODO: add English description
    related: [],
  },

  'water-healing': {
    id: '68c0ddb1f26e9b47b8bdf384',
    title: '水声疗愈 (30分钟) - 净化您的能量 - 舒缓焦虑、压力和悲伤',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT31M',
    durationLabel: '31 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68c0ddb1f26e9b47b8bdf384.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68c0ddb1f26e9b47b8bdf384_1.jpg',
    video: 'https://www.youtube.com/watch?v=wQiSW_0iTPc',
    desc: '本周 30 分钟的声音疗愈，融入了柔和的水流，旨在让你更贴近自然流动状态，净化任何稠密能量，释放压力，让情绪自由流动。 这段视频中的吟唱纯粹是直觉式的，是一种通灵的声音疗愈激活，并配以原创的手碟乐曲。 祝福 Chantress Seba Gemini and Finn I and I #睡眠 #睡眠',
    descEn: '', // TODO: add English description
    related: [],
  },

  'jungle': {
    id: '6874b163846a1db211d06ceb',
    title: '在我的丛林营地独自露营两天 - 睡在土制庇护所 - 在泥炉上烹饪大牛排',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松'],
    duration: 'PT32M',
    durationLabel: '32 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6874b163846a1db211d06ceb.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6874b163846a1db211d06ceb_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/6874b163846a1db211d06cea.mp4',
    desc: '有时候你只是需要放松的一天。在我的狂野森林之旅中，我在倒下的树里建造了一个秘密庇护所。我展示了我的丛林生存技能。我用泥土烹饪牛排。我的庇护所从下方加热。在森林里建造一个隐藏的碎片避难所。 请点击“赞”和“订阅”按钮，以及“通知铃”。感谢观看。:)) 一定要看看其他露营/生存视频； 丛林生存冬季露营 ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-683dda7c': {
    id: '683dda7cc259af71d8ce6693',
    title: '波萨诺瓦地平线 – 悠扬吉他和傍晚的宁静',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H19M',
    durationLabel: '1 小时 19 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/683dda7cc259af71d8ce6693.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/683dda7cc259af71d8ce6693_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video/G7x-Z0mCP_k.mp4',
    desc: '👋 欢迎来到 Bossanova Relaxing！ ☕ 在这里，舒缓的爵士乐与平和的时刻相遇。 🎼 关于我们的频道 欢迎来到 Bossanova Relaxing，这里是您每日逃离喧嚣，进入平静、咖啡和海岸魅力的世界的避风港。我们的频道致力于为您带来完美的平和时刻的配乐——将柔和的巴萨诺瓦节奏',
    descEn: '', // TODO: add English description
    related: [],
  },

  'meditation-sleep': {
    id: '68abd6cd3a9c31fde20ebb57',
    title: '在几分钟内入睡！ 催眠式引导冥想睡眠谈话，助您入眠',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT3H',
    durationLabel: '3 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68abd6cd3a9c31fde20ebb57.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68abd6cd3a9c31fde20ebb57_1.jpg',
    video: 'https://www.youtube.com/watch?v=U6Ay9v7gK9w',
    desc: '一段优美的引导式睡眠冥想，让你在几分钟内入睡！这是一个睡眠引导催眠，帮助你释放一天的压力，进入梦乡。 通过我的免费冥想来改变你的生活 - 开启前所未有的平静、疗愈和睡眠。立即下载 获得更好的睡眠 - 订阅 在你喜欢的平台上预先保存我的最新音频 聆听更多冥想和音乐： Spotify: Apple Mu',
    descEn: '', // TODO: add English description
    related: [],
  },

  'jungle-fireplace': {
    id: '68776a6e846a1db211d07a35',
    title: '建造完整且温暖的生存避难所 | 丛林工艺土屋、草屋顶和带粘土的壁炉',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松'],
    duration: 'PT20M',
    durationLabel: '20 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68776a6e846a1db211d07a35.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68776a6e846a1db211d07a35_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/68776a6e846a1db211d07a35.720p.mp4',
    desc: '我建造了一个小泥屋来隐藏在自然中，我用枯木做结构，黏土和石头做壁炉，草做屋顶。这里有很多野猪，我安顿在了它们的领地！ 🎮 TWITCH | ➯ 在社交网络上加入冒险者团队 ☟ 🚩 INSTAGRAM | 🚩 FACEBOOK | 🚩 TIKTOK | 🚩 YOUTUBE | ➯ 有想法？有',
    descEn: '', // TODO: add English description
    related: [],
  },

  'relax-music': {
    id: '683dd759c259af71d8ce666d',
    title: '音乐疗法 舒缓神经系统，焕发心灵，放松 #2',
    titleEn: '', // TODO: add English title
    category: 'Nature',
    scenes: ['入睡', '放松'],
    duration: 'PT1H25M',
    durationLabel: '1 小时 25 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/683dd759c259af71d8ce666d.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/683dd759c259af71d8ce666d_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video/9Zq79uu_o5E.mp4',
    desc: '#musicforthesoul #sleepmusic #pianomusic Music therapy 🌿Soothes the nervous system and refreshes the soul, relaxing #2 🌞 Beautiful Relaxing Music 💝',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-689f19c2': {
    id: '689f19c266b315411652b2bd',
    title: '老梁：铭记历史要有洁癖｜南京照相馆｜美国传教士｜国民党抗日｜排华法案｜孙中山革命｜唐生智｜爱尔兰人｜历史上不是任人打扮的小姑娘',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT42M',
    durationLabel: '42 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/689f19c266b315411652b2bd.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/689f19c266b315411652b2bd_1.jpg',
    video: 'https://www.youtube.com/watch?v=h262SoSA7Iw',
    desc: '老梁通过解读南京照相馆，讲那段历史背后的故事',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68961df2': {
    id: '68961df2189e8b47d8a4635f',
    title: '有声书 《局外人》| 完整版 加缪',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT4H39M',
    durationLabel: '4 小时 39 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68961df2189e8b47d8a4635f.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68961df2189e8b47d8a4635f_1.jpg',
    video: 'https://www.youtube.com/watch?v=WTYgWZb9V1M',
    desc: '',
    descEn: '', // TODO: add English description
    related: [],
  },

  'night': {
    id: '68abea02a30d1d61989e4693',
    title: '收听这个深夜播放列表，逃离现实',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H53M',
    durationLabel: '1 小时 53 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68abea02a30d1d61989e4693.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68abea02a30d1d61989e4693_1.jpg',
    video: 'https://www.youtube.com/watch?v=8lIz80F5Eyo',
    desc: '以下是将文本翻译成简体中文并保留原始格式的结果： 聆听这个深夜歌单，逃离现实" 歌单是为你想要逃离世界，让音乐与你的灵魂对话的时刻准备的。 💔让每一首歌带你穿越失恋的痛苦与美好，在寂静的夜晚提供慰藉。 🎧如果这个歌单触动了你的心弦，请点击“订阅”并开启小铃铛，以聆听更多触动你灵魂的音乐。 #悲伤',
    descEn: '', // TODO: add English description
    related: [],
  },

  'asmr-she-did-everything': {
    id: '696838324a7ad44fa0ea8061',
    title: '(ASMR) She Did Everything! Barbering Full Service – Haircut, Shave & More',
    titleEn: '', // TODO: add English title
    category: 'ASMR',
    scenes: ['放松', '入睡'],
    duration: 'PT45M',
    durationLabel: '45 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/696838324a7ad44fa0ea8061.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/696838324a7ad44fa0ea8061_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/696838324a7ad44fa0ea8061.mp4',
    desc: 'Join this channel to get access to perks: 📍Location: Barber TOKUTOKO 3 Chome-34-3 Central, Nakano City, Tokyo 164-0011 Phone number: 0332296222 Googl',
    descEn: '', // TODO: add English description
    related: [],
  },

  'neheart-reidenshi': {
    id: '68c32fb5f26e9b47b8be0bb3',
    title: '体验宁静：Øneheart x reidenshi - 雪景 (1 小时)',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H2M',
    durationLabel: '1 小时 2 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68c32fb5f26e9b47b8be0bb3.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68c32fb5f26e9b47b8be0bb3_1.jpg',
    video: 'https://www.youtube.com/watch?v=cJBNUJMB5_0',
    desc: '体验宁静：Øneheart x reidenshi - 飘雪 我的频道 让你的灵魂在这里慢下来。 请订阅 #氛围音乐 #飘雪 #睡眠音乐 #黑暗音乐 #黑暗氛围音乐',
    descEn: '', // TODO: add English description
    related: [],
  },

  'music-2': {
    id: '68cbc145575572c43dbcbac4',
    title: '电脑工作时的音乐 | 专注和提高效率的背景音乐',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H13M',
    durationLabel: '3 小时 13 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68cbc145575572c43dbcbac4.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68cbc145575572c43dbcbac4_1.jpg',
    video: 'https://www.youtube.com/watch?v=qwosU7e9mqc',
    desc: '沉浸在这个工作和学习的音乐混音中，感受平静和专注的氛围。 这些精心挑选的chill、lo-fi和氛围音乐将帮助您应对压力，提高注意力并进入心流状态。 非常适合办公室工作、自由职业、学习或只是进行深入的脑力劳动。 电脑工作音乐 | 专注和生产力背景音乐 🎧 这种音乐可以帮助： • 提高专注力和注意力',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-6862abe9': {
    id: '6862abe958388f37091ca5a8',
    title: '【有声书】全球数千万患者实践有效的非药物治疗法 半个世纪以来深入焦虑症患者内心的治疗原则《焦虑症的自救》“从神经系统角度出发治愈焦虑症”完整版（高音质）',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT6H31M',
    durationLabel: '6 小时 31 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6862abe958388f37091ca5a8.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6862abe958388f37091ca5a8_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6862abe958388f37091ca5a7_c.mp4',
    desc: '#听音阅读 #音频阅读 #音频书籍 #高分书 #听书 #聽書 #有声书 #精读 #完整书 #高音质 #无广告 #自我成长 #认知提升 #个人成长 #自我突破 #人生智慧 #高人指点 📚 每天听本好书，每日用至少30分钟的时间感受成长的快乐，变成更丰富的自己。总有一本书能解决您生命中某个问题。 --',
    descEn: '', // TODO: add English description
    related: [],
  },

  'relax-sleep-music': {
    id: '6862a4d958388f37091ca3c7',
    title: '[试听 3 分钟] 快速入睡 | 深度睡眠放松音乐',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT1H59M',
    durationLabel: '1 小时 59 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6862a4d958388f37091ca3c7.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6862a4d958388f37091ca3c7_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6862a4d958388f37091ca3c6_c.mp4',
    desc: '呈现来自“快速入睡”系列的“深度睡眠音乐”。这是帮助深度睡眠的睡眠音乐。 优美的放松音乐，助您立即入睡。 希望您能通过此音乐找到内心的平静。 🌈“安静心灵，灵魂自语”。 🔔 订阅 @NovaRelaxingMusic 以获取更新 优美的睡眠音乐 🌟 助眠和深度放松音乐 - 🌟 深度睡眠音乐 ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68b31c6e': {
    id: '68b31c6e65c4fc213f58c780',
    title: '你需要睡觉。',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H',
    durationLabel: '3 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68b31c6e65c4fc213f58c780.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68b31c6e65c4fc213f58c780_1.jpg',
    video: 'https://www.youtube.com/watch?v=2AH5t_o7lmg',
    desc: '你需要睡觉。(播放列表) | 我的播放列表: 可以平静你的心灵，可以伴你入睡，或者让你过度思考的音乐。 我希望你能够沉浸在我们才华横溢的艺术家们创作的优美音调中。❤ 所有音乐都由真正的艺术家创作。 ❄ ig: @julezambient mail: prdjulez@gmail.com #ambie',
    descEn: '', // TODO: add English description
    related: [],
  },

  'rain-sleep': {
    id: '6863367a58388f37091caba1',
    title: '最舒心的睡前故事：雨天面包房 | 睡眠故事讲述',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT2H19M',
    durationLabel: '2 小时 19 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6863367a58388f37091caba1.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6863367a58388f37091caba1_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6863367a58388f37091caba0_c.mp4',
    desc: '在今晚温馨的睡前故事合集中，让我们回到雨天面包房，那里闪烁的彩灯和令人舒适的香气，一定会照亮最灰暗的日子。 旁白：Thomas Jones 🇬🇧 作者：Shady Grove ✍ 音效设计：轻柔的雨打窗户声 🌧 包括提及：食物，猫，怀旧，烹饪 欢迎来到 Get Sleepy 南瓜派和咖啡 狂风',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-689a2056': {
    id: '689a2056189e8b47d8a49b66',
    title: '《金瓶梅》【1回 - 35回】（1/7）完整版',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT11H56M',
    durationLabel: '11 小时 56 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/689a2056189e8b47d8a49b66.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/689a2056189e8b47d8a49b66_1.jpg',
    video: 'https://www.youtube.com/watch?v=hbt5wwLzhYs',
    desc: '完整版列表： :00 001.《金瓶梅》第01回 :38 002.《金瓶梅》第02回 :03 003.《金瓶梅》第03回 :20 004.《金瓶梅》第04回 :36 005.《金瓶梅》第05回 :08 006.《金瓶梅》第06回 :28 007.《金瓶梅》第07回 :35 008.《金瓶梅》第08回',
    descEn: '', // TODO: add English description
    related: [],
  },

  'music-3': {
    id: '6862aa2a58388f37091ca499',
    title: '专注音乐，双耳节拍专注音乐，用于学习，超级智能',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT2H42M',
    durationLabel: '2 小时 42 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6862aa2a58388f37091ca499.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6862aa2a58388f37091ca499_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6862aa2a58388f37091ca498_c.mp4',
    desc: '专注音乐，双耳节拍专注音乐，适用于学习，超级智能 *我使用的设备清单：* ---------------------------------------------------------------------------------------------- * 学习音乐和专注音乐： 学习音乐和',
    descEn: '', // TODO: add English description
    related: [],
  },

  'music-4': {
    id: '68bf49b9f26e9b47b8bde829',
    title: '最棒的吉卜力工作室原声音乐 | 舒缓心灵的平静旋律',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H',
    durationLabel: '1 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68bf49b9f26e9b47b8bde829.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68bf49b9f26e9b47b8bde829_1.jpg',
    video: 'https://www.youtube.com/watch?v=R6MNlWagZhk',
    desc: 'Greatest Studio Ghibli Soundtracks | Peaceful Melodies for a Tranquil Mind 最棒的吉卜力工作室原声配乐 | 宁静的旋律，带来心灵的安宁 Welcome to "Ghibli Music BGM". While you are ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'lo-fi-remix': {
    id: '68c4eb83575572c43dbca30a',
    title: '老歌但是 Lo-fi remix',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT24M',
    durationLabel: '24 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68c4eb83575572c43dbca30a.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68c4eb83575572c43dbca30a_1.jpg',
    video: 'https://www.youtube.com/watch?v=BrnDlRmW5hs',
    desc: '🎧 在 Spotify 上关注我们： 🎧 在 Apple Music 上关注我们： 🎼 聆听我的第一首单曲： 老歌，但这是 lofi/chillhop remix 希望你喜欢 ♡ ♫ 请考虑订阅以获取更多内容 ♫ 🎼 聆听更多 - Lo-fi 音乐歌单： → 💬 加入我们的 Discord',
    descEn: '', // TODO: add English description
    related: [],
  },

  'snatam-kaur-mul-mantra': {
    id: '68c3848df26e9b47b8be0da7',
    title: 'Snatam Kaur - Mul Mantra - Ek Ong Kar',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT11M',
    durationLabel: '11 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68c3848df26e9b47b8be0da7.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68c3848df26e9b47b8be0da7_1.jpg',
    video: 'https://www.youtube.com/watch?v=Pf8CeGa7tII',
    desc: '🔮 从 Sat Nam Oracle 牌组中抽取一张免费卡片： 基于真理、呼吸和神圣振动的真言指导。 锡克教由 Guru Nanak Dev Ji 于 15 世纪创立，是一条奉献、平等和真理的道路。锡克教真言带有精神、心理和情感的疗愈力量 —— 念诵真言以平静心灵、敞开心扉并记住神。 🕊 真言益',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68c3556e': {
    id: '68c3556ef26e9b47b8be0cea',
    title: '悲伤情歌歌单 - 减速混响英文歌曲 - 真的会让你哭的悲伤歌曲',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H26M',
    durationLabel: '1 小时 26 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68c3556ef26e9b47b8be0cea.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68c3556ef26e9b47b8be0cea_1.jpg',
    video: 'https://www.youtube.com/watch?v=5I0n2lOAEvY',
    desc: '伤感爱情歌曲歌单 - 慢速混响英文歌曲 - 让你哭的超伤感歌曲 #伤感歌曲 #慢速混响 #慢速伤感 Spotify： 所有Magic Chill Pop音乐： 曲目列表: [:00] 1 Let Me Down Slowly - Honeyfox, lost., Pop Mage [:09] 2 A',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68c0db30': {
    id: '68c0db30f26e9b47b8bdf383',
    title: '适用于清晨的歌单',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT39M',
    durationLabel: '39 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68c0db30f26e9b47b8bdf383.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68c0db30f26e9b47b8bdf383_1.jpg',
    video: 'https://www.youtube.com/watch?v=-1qX9PdD4io',
    desc: 'Spotify播放列表: 乐谱 (部分曲目): 时间戳: Ophelia Wilde - in the morning Thomas Klak - inner silence Jesse Brown - heaven Ophelia Wilde - the fairy Robert Gromotka',
    descEn: '', // TODO: add English description
    related: [],
  },

  'relax-sleep-music-2': {
    id: '68c0d883f26e9b47b8bdf382',
    title: '奇幻中世纪/酒馆音乐 - 深度睡眠放松音乐',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H13M',
    durationLabel: '3 小时 13 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68c0d883f26e9b47b8bdf382.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68c0d883f26e9b47b8bdf382_1.jpg',
    video: 'https://www.youtube.com/watch?v=a3pz0OOhfEk',
    desc: 'Fantasy Medieval/Tavern Music - Relaxing Music for Deep Sleep #fantasy #relaxing #sleep 关注我们的 Spotify： - - 聆听更多您喜爱的旋律： 🎧 曲目列表： village Ambiance (乡村氛围',
    descEn: '', // TODO: add English description
    related: [],
  },

  'billie-eilish': {
    id: '68b3200e65c4fc213f58c835',
    title: 'Billie Eilish 唱歌哄你入睡 || 柔和的雨声 || 第二部分',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT23M',
    durationLabel: '23 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68b3200e65c4fc213f58c835.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68b3200e65c4fc213f58c835_1.jpg',
    video: 'https://www.youtube.com/watch?v=_agyUyAwdJE',
    desc: '0:00 - 我爱你 4:36 - 我想要的一切 8:20 - 在我离开之前听我说 - 派对结束后 - ilomilo - 8 - 希望你是同性恋',
    descEn: '', // TODO: add English description
    related: [],
  },

  'pop-chillhop-for-ep': {
    id: '68abc0873a9c31fde20eb8d7',
    title: '好听到融化的英文歌｜像J-POP一样细腻动人 Chillhop for 学习・放松・陪伴・工作 | EP05 #Chillhop #英语歌单 #疗愈音乐 #FocusBGM #LoFiStyle',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H24M',
    durationLabel: '1 小时 24 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68abc0873a9c31fde20eb8d7.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68abc0873a9c31fde20eb8d7_1.jpg',
    video: 'https://www.youtube.com/watch?v=sKxQveyAgqc',
    desc: '🎧 welcome to nice.fm 我们用 Chillhop 节奏与 J-POP 式的细腻旋律，编织出一份份舒服的英文歌单。 陪你度过读书、工作、放松、发呆的每一个时刻。 这里是属于你的小角落，一起听听这些好听到融化的旋律吧 🎶 📌 推荐使用情境： 📚 学习专注 💼 工作放空 🛋 ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68954f51': {
    id: '68954f51189e8b47d8a452bd',
    title: '梁文道┃八分半┃到底该怎么读《百年孤独》？/ 怎么理解《百年孤独》里的孤独 ？/ 怎样评价《百年孤独》的影视改编 ？',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H25M',
    durationLabel: '3 小时 25 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68954f51189e8b47d8a452bd.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68954f51189e8b47d8a452bd_1.jpg',
    video: 'https://www.youtube.com/watch?v=N-KgE5AgZ74',
    desc: '#梁文道 #八分半 一 到底该怎么读《百年孤独》？ 二 怎么理解《百年孤独》里的孤独 ？ 三 怎样评价《百年孤独》的影视改编 ？',
    descEn: '', // TODO: add English description
    related: [],
  },

  'sleep-music': {
    id: '692c7cefe992a1a94be4042f',
    title: '三分钟内快速入睡 婴儿睡眠音乐 莫扎特勃拉姆斯摇篮曲',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H7M',
    durationLabel: '3 小时 7 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/692c7cefe992a1a94be4042f.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/692c7cefe992a1a94be4042f_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/692c7cefe992a1a94be4042f_c.mp4',
    desc: '立即在 3 分钟内入睡 ♥ 婴儿睡眠音乐 ♫ 莫扎特勃拉姆斯摇篮曲 立即在 3 分钟内入睡 ♥ 婴儿睡眠音乐 ♫ 莫扎特勃拉姆斯摇篮曲 立即在 3 分钟内入睡 ♥ 婴儿睡眠音乐 ♫ 莫扎特勃拉姆斯摇篮曲',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-6908ec1d': {
    id: '6908ec1d2f0f6a7319edd2c2',
    title: '【有声书】《小岛经济学》（完整版）',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H41M',
    durationLabel: '3 小时 41 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6908ec1d2f0f6a7319edd2c2.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6908ec1d2f0f6a7319edd2c2_1.jpg',
    video: 'https://www.youtube.com/watch?v=ID3jj1qeR3w',
    desc: '【本书链接 How an Economy Grows and Why It Crashes】 【荐阅 Economics in One Lesson】 ============================================ :00 01.《小岛经济学》第一章 一个好点子出炉了 :0',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68d4adb2': {
    id: '68d4adb229b3d54f00a5bcc5',
    title: '中國第一批留美幼童 | 洋務運動',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT26M',
    durationLabel: '26 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68d4adb229b3d54f00a5bcc5.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68d4adb229b3d54f00a5bcc5_1.jpg',
    video: 'https://www.youtube.com/watch?v=SPk9ubY6kCk',
    desc: '＼免费公开课／ ■如何分析历史？从历史中学到精华的独家方法 ■「1921-1945年专题历史课程」 免费领取： 1872年8月11号，上海码头，30名孩子踏上前往美国的轮船。他们当中，年龄最小的10岁，年龄最大的16岁。他们是清朝公派的，第一批前往美国留学的幼童。他们的身上，寄托着清廷洋务派实现国家',
    descEn: '', // TODO: add English description
    related: [],
  },

  'teddy-swims-lose-control': {
    id: '68cbd2bc086eca26af462303',
    title: 'Teddy Swims - Lose Control (The Village Sessions)',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3M',
    durationLabel: '3 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68cbd2bc086eca26af462303.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68cbd2bc086eca26af462303_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/68cbd2bc086eca26af462303.mp4',
    desc: 'Stream "Lose Control" (The Village Sessions) now: Stream my new album, \'I\'ve Tried Everything But Therapy (Part 2)\': Follow Teddy Swims: Join Teddy Sw',
    descEn: '', // TODO: add English description
    related: [],
  },

  'the-dead-south-in': {
    id: '68cbcdd2575572c43dbcbaed',
    title: 'The Dead South - In Hell I\'ll Be In Good Company [官方音乐视频]',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT4M',
    durationLabel: '4 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68cbcdd2575572c43dbcbaed.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68cbcdd2575572c43dbcbaed_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/68cbcdd2575572c43dbcbaed.mp4',
    desc: 'Official video for "In Hell I\'ll Be In Good Company" by The Dead South. Stream/Buy the full album, "Good Company": Stream the new single "Will The Cir',
    descEn: '', // TODO: add English description
    related: [],
  },

  'emilio-piano-ft-lucie': {
    id: '68cbc8e2575572c43dbcbac6',
    title: 'Emilio Piano ft. Lucie - Maison',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT2M',
    durationLabel: '2 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68cbc8e2575572c43dbcbac6.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68cbc8e2575572c43dbcbac6_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/68cbc8e2575572c43dbcbac6.mp4',
    desc: '"Maison" 现已在所有平台上线： 在这里获取周边和乐谱： 🔔 订阅 Emilio 的频道: 关注 Emilio Piano： 制作人员: 表演者：Emilio Piano, Lucie 音乐：Emilio Piano, Wojciech Urbański, Lili Poe, Józef R',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68cbc3f7': {
    id: '68cbc3f7575572c43dbcbac5',
    title: '爵士乐风格，但不要太爵士乐。',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H',
    durationLabel: '1 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68cbc3f7575572c43dbcbac5.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68cbc3f7575572c43dbcbac5_1.jpg',
    video: 'https://www.youtube.com/watch?v=OgU_UDYd9lY',
    desc: '「jazzy but not too jazzy」（爵士，但又不太爵士）是一系列流畅的 Lo-fi 爵士（但又不太爵士）嘻哈节拍合集，适合您在阅读、学习、工作或只是放松身心，享受一天的时候聆听。:) ~~~~~~~~~~ spotify: apple music: ~~~~~~~~~~ Track ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68c9f7ac': {
    id: '68c9f7ac575572c43dbcb029',
    title: '湘军崛起（合集） | 2小时了解湘军始末 | 曾国藩的艰难创业 | 了解了湘军，就懂得了近代军阀 | 了解了曾国藩，就懂得了中国政治',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT2H1M',
    durationLabel: '2 小时 1 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68c9f7ac575572c43dbcb029.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68c9f7ac575572c43dbcb029_1.jpg',
    video: 'https://www.youtube.com/watch?v=wmupmpQHJi4',
    desc: '＼為説歷史公開課／ ■ 如何分析歷史？從歷史中學到精華的獨家方法 ■ 1921-1945年專題歷史課程 免費領取： 湘軍是現代軍閥的鼻祖，曾國藩是湘軍的創辦者。 湘軍創辦以來，淮軍、新軍、北洋軍閥都跟他一脈相承，身上都有湘軍的基因。 甚至到後來有無湘不成軍的說法。 在清朝，滿清政權對漢人擁有軍權限制',
    descEn: '', // TODO: add English description
    related: [],
  },

  'nujabes-compilation-best-of': {
    id: '68abe5bda30d1d61989e4692',
    title: 'Nujabes Compilation｜Best of Nujabes ｜Mixlofihiphop, jazzhop and chillhop',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H59M',
    durationLabel: '1 小时 59 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68abe5bda30d1d61989e4692.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68abe5bda30d1d61989e4692_1.jpg',
    video: 'https://www.youtube.com/watch?v=9CE6-2DwPK4',
    desc: 'Lofi hiphop 2 hour mix Nujabes Tribute Nujabes Compilation｜Best of Nujabes ｜Mixlofihiphop, jazzhop and chillhop PLAYLIST :00. Nujabes - reflection ete',
    descEn: '', // TODO: add English description
    related: [],
  },

  'feeling-good-mix-deep': {
    id: '68abde76a30d1d61989e456b',
    title: 'Feeling Good Mix - 英文 Deep House, Vocal House, Nu Disco | 情绪化 / 亲密氛围 #3',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT58M',
    durationLabel: '58 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68abde76a30d1d61989e456b.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68abde76a30d1d61989e456b_1.jpg',
    video: 'https://www.youtube.com/watch?v=vPg67r76hAA',
    desc: 'Feeling Good Mix - English Deep House, Vocal House, Nu Disco | Emotional / Intimate Mood #3 🎧 Genre: Emotional / Intimate Mood / Chill House 🌴 Mood:',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68aa3406': {
    id: '68aa34063a9c31fde20e9e19',
    title: '汉斯·季默 - 星际穿越 (太空之声)',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT2H1M',
    durationLabel: '2 小时 1 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68aa34063a9c31fde20e9e19.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68aa34063a9c31fde20e9e19_1.jpg',
    video: 'https://www.youtube.com/watch?v=5gO0xpY_Y3E',
    desc: '``` \'\'重要提示 我不拥有此处任何作品的版权。 每首作品均属于我喜爱和尊重的古典新音乐艺术家。 如果您有版权问题，可以通过电子邮件 (perissann@gmail.com) 与我联系。 您最晚会在 8 小时内收到回复。 感谢您的理解，祝您收听愉快。\'\' 所有音乐均由 dhe Perissann',
    descEn: '', // TODO: add English description
    related: [],
  },

  'meditation-healing': {
    id: '68a2819966b315411652e4c1',
    title: '古代寺庙冥想 639Hz - 疗愈频率 - 转化并协调身心灵',
    titleEn: '', // TODO: add English title
    category: 'Meditation',
    scenes: ['冥想', '放松'],
    duration: 'PT1H',
    durationLabel: '1 小时',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68a2819966b315411652e4c1.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68a2819966b315411652e4c1_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video/68a2819966b315411652e4c0.mp4',
    desc: '来自神圣的古代蒂卡尔神庙的疗愈频率，坐落在充满活力的丛林中心。此传输旨在支持和引导你度过人生的旅程。沉浸在丛林的自然声音中——鸟儿的歌唱、猴子的叫声——与有意的疗愈音乐和 639Hz 的转化共振（心轮频率）融为一体。它们共同构成一种音乐灵药，旨在平静灵魂、打开心扉，并促进与你真正自我的更深层次的联系',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-689b1bfb': {
    id: '689b1bfb189e8b47d8a4b197',
    title: '老梁：惊世骇俗的《竹书纪年》',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT46M',
    durationLabel: '46 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/689b1bfb189e8b47d8a4b197.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/689b1bfb189e8b47d8a4b197_1.jpg',
    video: 'https://www.youtube.com/watch?v=nakmmgj0izE',
    desc: '成为此频道的会员即可获享以下福利：',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-689a1346': {
    id: '689a1346189e8b47d8a496dc',
    title: '甲午战争（合集）5小时无删减 | 全网最详细讲解甲午战争',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT5H20M',
    durationLabel: '5 小时 20 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/689a1346189e8b47d8a496dc.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/689a1346189e8b47d8a496dc_1.jpg',
    video: 'https://www.youtube.com/watch?v=XCVGmeretIM',
    desc: '＼免费公开课／ ■如何分析历史？从历史中学到精华的独家方法 ■「1921-1945年专题历史课程」 免费领取： 本期视频是合集，但是不包含甲午战争的前两支前传影片，也就是「日本的崛起」和「朝鲜的开国」，大家在看合集影片之前，最好先看一下这两支前传影片。 ▼ ※※相关影片※※▼ 甲午战争（前传）20分',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-689a1046': {
    id: '689a1046189e8b47d8a495f5',
    title: '老梁：陈佩斯的矫情 戏比天大｜慈禧｜毛泽东｜江青｜朱镕基｜李瑞环｜丁关根｜张百发',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT44M',
    durationLabel: '44 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/689a1046189e8b47d8a495f5.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/689a1046189e8b47d8a495f5_1.jpg',
    video: 'https://www.youtube.com/watch?v=CgXDAoeH1nY',
    desc: '老梁通过陈佩斯的电影《戏台》，解读“戏比天大”和“老祖宗的东西不能改”，戏到底有没有天大？老祖宗的东西又为什么总改......',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-688e3a80': {
    id: '688e3a80189e8b47d8a41be4',
    title: '袁世凯（合集） | 2个小时带你看懂从晚清灭亡到民国诞生 | 甲午战争 | 戊戌变法 | 庚子国变 | 辛亥革命 | 武昌起义 | 恢复帝制',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT2H36M',
    durationLabel: '2 小时 36 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/688e3a80189e8b47d8a41be4.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/688e3a80189e8b47d8a41be4_1.jpg',
    video: 'https://www.youtube.com/watch?v=Vgah1K2Qfec',
    desc: '＼為說歷史公開課／ ■ 如何分析歷史？從歷史中學到精華的獨家方法 ■ 1921-1945年專題歷史課程 免費領取： 袁世凱的一生貫穿了晚清的滅亡到民國的誕生。 在晚清到民國的所有大事件中，包括甲午戰爭、戊戌變法、庚子國變、辛亥革命、建立民國、恢復帝制。 在這些大事件中，他都在事件的核心，扮演了重要角',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-688ce456': {
    id: '688ce456189e8b47d8a408bb',
    title: '【有声书】《人类简史（上 1-10章）》',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT6H45M',
    durationLabel: '6 小时 45 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/688ce456189e8b47d8a408bb.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/688ce456189e8b47d8a408bb_1.jpg',
    video: 'https://www.youtube.com/watch?v=zERp1IJ0R4U',
    desc: '``` :00 01.《人类简史》第1章 人类：一种也没什么特别的动物（1） :07 02.《人类简史》第1章 人类：一种也没什么特别的动物（2） :45 03.《人类简史》第2章 知善恶树（1） :31 04.《人类简史》第2章 知善恶树（2） :15 05.《人类简史》第3章 亚当和夏娃的一天（',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-688ce13d': {
    id: '688ce13d189e8b47d8a4084e',
    title: '鸦片战争（合集）| 3小时带您了解真实的鸦片战争',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H2M',
    durationLabel: '3 小时 2 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/688ce13d189e8b47d8a4084e.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/688ce13d189e8b47d8a4084e_1.jpg',
    video: 'https://www.youtube.com/watch?v=evxF9wfM7PI',
    desc: '＼免费公开课／ ■如何分析历史？从历史中学到精华的独家方法 ■「1921-1945年专题历史课程」 免费领取： 鸦片战争被认为是中國近代史的开端。这场战争是中國和英國在1840年-1842年打的一场战争。 为什么被称作是中國近代史的开端，因为这是以中國为核心的东方文化，与西方文化的大碰撞的开始。这场',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-688c7ae8': {
    id: '688c7ae8846a1db211d0a78d',
    title: '北洋时代（合集）| 一部影片讲透北洋军阀 | 段祺瑞、黎元洪、冯国璋、张作霖、曹锟、吴佩孚…',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H48M',
    durationLabel: '3 小时 48 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/688c7ae8846a1db211d0a78d.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/688c7ae8846a1db211d0a78d_1.jpg',
    video: 'https://www.youtube.com/watch?v=773Y4S2izZA',
    desc: '＼限时免费公开课／ ■ 如何分析历史？从历史中学到精华的独家方法 ■ 1921-1945年专题历史课程 免费领取： 民国期间的北洋时期，是最好时代，也是坏的时代。 军阀们就像过场的角儿一样，你方唱罢我登场。 但是在军阀的统治下，人们的思想、言论确是空前的自由。 在这个时代里，有驰骋天下的枭雄，也出了',
    descEn: '', // TODO: add English description
    related: [],
  },

  'rock-roast': {
    id: '687b681c846a1db211d0893f',
    title: '邱瑞：笑到喉咙沙哑！本年度必看段子，每句都上头！《脱口秀大会S5 Rock & Roast》',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H2M',
    durationLabel: '1 小时 2 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/687b681c846a1db211d0893f.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/687b681c846a1db211d0893f_1.jpg',
    video: 'https://www.youtube.com/watch?v=8w5TxXrPtXs',
    desc: '【欢迎订阅】▶▶▶ 【脱口秀大会 第五季】▶▶▶ 《脱口秀大会 第五季》是一档原创棚内喜剧脱口秀竞演节目。来自各行各业的脱口秀演员根据对生活的观察和感悟，以不同的视角切入，通过专业的喜剧创作能力，向观众展示一场场高质量的脱口秀表演，并且传递幽默的魅力——“人人都能快乐五分钟”。新老演员同台较量，共同',
    descEn: '', // TODO: add English description
    related: [],
  },

  'music-winter': {
    id: '68633a2358388f37091caba4',
    title: '冬日 _____ . | 平静的原声音乐',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H10M',
    durationLabel: '1 小时 10 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68633a2358388f37091caba4.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68633a2358388f37091caba4_1.jpg',
    video: 'https://www.youtube.com/watch?v=lrE8fWHHyW4',
    desc: '美丽在于未尽之言。 - 曲目列表： - Intro / Time Capsule （介绍 / 时间胶囊） - Winter （冬季） - Timelapse （延时） - Memories （回忆） - Frozen （冰冻） - travel back in time （时光倒流） - winte',
    descEn: '', // TODO: add English description
    related: [],
  },

  'relax-sleep-insomnia-2': {
    id: '684b04b9cbbee57a39e40f26',
    title: '放松睡眠音乐 + 失眠 - 缓解压力，放松音乐，深度睡眠音乐',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H5M',
    durationLabel: '3 小时 5 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684b04b9cbbee57a39e40f26.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/684b04b9cbbee57a39e40f26_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/bP9gMpl1gyQ.mp4',
    desc: '放松睡眠音乐 + 失眠 - 缓解压力，放松音乐，深度睡眠音乐 优美的钢琴播放列表 - - ------------------------------------------------------------------------------ 鸣谢: ❋ BGM 制作人 - - - ❋ 壁纸: ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-684afe21': {
    id: '684afe21cbbee57a39e40f20',
    title: '"시간이 멈췄으면 좋겠어" 꿈속의 우리 - 행복한 수면음악',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT8H12M',
    durationLabel: '8 小时 12 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684afe21cbbee57a39e40f20.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/684afe21cbbee57a39e40f20_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/RrFLVGz15Vk.mp4',
    desc: '지금 이 순간 시간이 멈췄으면 좋겠어, 지금 이 순간 우리가 행복했으면 좋겠어! "별이 빛나는 시간에" 🎵곡명 🎨그림명 "Forever" “마지막 꿈” "별이 빛나는 시간" 음악작곡 - G.W ㅣ 미술 - Hyunhyun 🌙\'Music Drawing\' 의 음악과 ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'rain-relax-music': {
    id: '683dd631c259af71d8ce6644',
    title: '在4K舒适咖啡店的雨天 用于放松、学习、工作的背景音乐',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT3H9M',
    durationLabel: '3 小时 9 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/683dd631c259af71d8ce6644.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/683dd631c259af71d8ce6644_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/683dd631c259af71d8ce6644_c.mp4',
    desc: '以下为翻译： 4K舒适咖啡厅的雨天 ❄ 适合放松、学习、工作的背景音乐。 用这美丽的4K雨天舒适咖啡厅背景音乐逃离日常生活的喧嚣。 营造一个宁静的氛围，非常适合学习、工作或仅仅是放松。 享受雨滴和环境音乐的平和声音，帮助您保持专注和高效。 准备好体验大自然就在您家中的舒缓力量！ #爵士乐 #放松音乐',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-683dce09': {
    id: '683dce09c259af71d8ce6611',
    title: '1940年代复古爵士乐 - 怀旧爵士乐',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H12M',
    durationLabel: '1 小时 12 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/683dce09c259af71d8ce6611.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/683dce09c259af71d8ce6611_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/683dce09c259af71d8ce6611_c.mp4',
    desc: '跟随30年代和40年代的复古爵士经典重返旧时光 ~ 古董老歌。顺滑而怀旧的氛围。 🎷 订阅：@barelyjazzmusic 📻 曲目列表： - The Smell of His Tobacco （他的烟草味） - Lover on the 8:15 （8:15的恋人） - A Chair at',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-6839bee3': {
    id: '6839bee3b9771737ce81203f',
    title: '1940年代爵士吧 - 复古经典',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT1H16M',
    durationLabel: '1 小时 16 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/6839bee3b9771737ce81203f.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/6839bee3b9771737ce81203f_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/6839bee3b9771737ce81203f_c.mp4',
    desc: '聆听时光倒流的声音，30-40年代复古爵士经典 ~ 古董老歌。流畅而怀旧的氛围。🎷 订阅：@barelyjazzmusic 📻 曲目列表： Midnight’s Not for Me (午夜不属于我) One Last Look in Satin (最后一眼丝绸) Only the Piano ',
    descEn: '', // TODO: add English description
    related: [],
  },

  'res-68632bda': {
    id: '68632bda58388f37091ca9da',
    title: '【有声书】最近13000年来所有人的简短历史巨著 历史上到底发生了什么事让世界这么不平等《枪炮、病菌与钢铁》「人类社会的命运」（上）完整版（高音质）无广告',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT9H22M',
    durationLabel: '9 小时 22 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/68632bda58388f37091ca9da.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/68632bda58388f37091ca9da_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/sleep/video_clips/68632bda58388f37091ca9d9_c.mp4',
    desc: '#听音阅读 #听书 #聽書 #有声书 #有声書 #有声小说 #有声读物 #精读 #有聲小說 #思维 #知识 #成长 #提升 📚 每天听本好书，每日只用30分钟的时间感受成长的快乐，变成更丰富的自己。总有一本书能解决您生命中某个问题。 --------------------------------',
    descEn: '', // TODO: add English description
    related: [],
  },

  'baby-music-box-water': {
    id: '684b0852cbbee57a39e40f2c',
    title: '[高清干净无广告版] 6小时宝宝水晶音乐和流水声 - 平复情绪不哭闹 - BABY MUSIC BOX ＆ WATER SOUND',
    titleEn: '', // TODO: add English title
    category: 'Music',
    scenes: ['放松', '入睡'],
    duration: 'PT6H5M',
    durationLabel: '6 小时 5 分钟',
    audio: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/audio/684b0852cbbee57a39e40f2c.m4a',
    cover: 'https://cdnringbd.shoujiduoduo.com/ringres/aimusic/sleep/cover/684b0852cbbee57a39e40f2c_1.jpg',
    video: 'http://uploadttcdn.fuciyuan7.com/video_clip/FDZ9fbKDtoM.mp4',
    desc: '6小时的舒眠音乐一播放宝宝就可以聆听一整个晚上～辛苦的怀孕妈妈也能有个好眠 ❤ 从2016年开始我们就专门制作宝宝和妈妈音乐, Baby Lullaby 制作长时间音乐, 中间不安插广告, 希望你喜欢 ★ 如果您喜欢我的频道，请订阅（Subscribe）☞ UCpqws0LafgXnazan96_E',
    descEn: '', // TODO: add English description
    related: [],
  },
};

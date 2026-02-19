export const guides: Record<string, any> = {
  'white-noise-sleep': {
    title: '如何用白噪音更快入睡',
    titleEn: 'How to Fall Asleep Faster with White Noise',
    topic: '睡眠',
    summary: '三步法选择白噪音类型、音量与时长，并推荐可试听音景资源。',
    problem: '很多人躺在床上翻来覆去睡不着——可能是脑子太活跃，也可能是环境太吵或太安静。白噪音能帮大脑从兴奋状态过渡到放松状态。',
    steps: [
      { title: '选对类型', desc: '自然白噪音（雨声、海浪）比机械白噪音更舒适。如果你容易被突然声响惊醒，选持续稳定的声音（如粉噪音）；如果喜欢有节奏感，选海浪或雨声。' },
      { title: '调好音量', desc: '音量不需要太大，40-50 分贝即可（大约是轻声说话的音量）。太大反而影响睡眠质量。' },
      { title: '设定定时', desc: '不建议整夜播放。使用睡眠岛的「入睡自动停止」功能，检测到你入睡后自动关闭。' },
    ],
    resources: [
      { title: '粉红噪音', slug: 'pink-noise', category: 'White Noise', scene: '入睡、深度放松', duration: '10 小时' },
      { title: '窗外雨声与壁炉', slug: 'rain-fireplace', category: 'Rain', scene: '入睡、放松', duration: '8 小时' },
      { title: '轻柔夜雨', slug: 'gentle-night-rain', category: 'Rain', scene: '入睡、放松', duration: '3 小时' },
    ],
    faqs: [
      { q: '白噪音和粉噪音有什么区别？', a: '白噪音所有频率能量均等（像电视雪花声），粉噪音低频更强更柔和（像稳定的雨声）。粉噪音对大多数人来说更舒适。' },
      { q: '长期听白噪音会依赖吗？', a: '不会产生生理依赖。但如果形成习惯后突然停用，可能需要几天适应。这和习惯开风扇睡觉是一样的。' },
    ]
  },
  'best-sleep-soundscapes': {
    title: '最佳睡前音景组合',
    titleEn: 'Best Soundscape Combinations for Sleep',
    topic: '睡眠',
    summary: '不同场景下的音景搭配推荐，帮你找到最适合自己的入睡声音。',
    problem: '单一声音听久了可能会免疫。组合不同的自然声音，既能保持新鲜感，又能创造更丰富的声音环境。',
    steps: [
      { title: '选一个基底音', desc: '选一个持续稳定的声音作为基底：雨声、海浪或白噪音都是好选择。' },
      { title: '叠加一个点缀音', desc: '在基底上加一个有节奏变化的声音：壁炉噼啪声、远处雷声、或虫鸣。' },
      { title: '调整比例', desc: '基底音占 70%，点缀音占 30%。在 App 内可以自由调整各声音的音量比例。' },
    ],
    resources: [
      { title: '窗外雨声与壁炉', slug: 'rain-fireplace', category: 'Rain', scene: '入睡、放松', duration: '8 小时' },
      { title: '深海气泡', slug: 'deep-sea-bubbles', category: 'Nature', scene: '深度放松', duration: '8 小时' },
      { title: '冬日洞穴炉火', slug: 'winter-cave-fireplace', category: 'Fireplace', scene: '放松、入睡', duration: '8 小时' },
    ],
    faqs: [
      { q: '可以自定义组合吗？', a: '可以。睡眠岛 App 支持同时播放多个声音并独立调节音量。' },
    ]
  },
  'auto-stop-sleep': {
    title: '入睡自动停止：为什么重要',
    titleEn: 'Auto-Stop on Sleep: Why It Matters',
    topic: '睡眠',
    summary: '了解整夜播放白噪音的潜在问题，以及入睡自动停止功能如何帮助你。',
    problem: '很多人用白噪音助眠，但整夜播放可能影响深度睡眠质量，还会增加耗电。',
    steps: [
      { title: '理解整夜播放的问题', desc: '研究显示持续的声音刺激可能减少深度睡眠比例。入睡后大脑仍在处理声音信息。' },
      { title: '使用入睡自动停止', desc: '睡眠岛通过手机传感器检测你的入睡状态，自动停止播放。不需要设定时间，它知道你什么时候睡着了。' },
      { title: '给大脑安静的深睡环境', desc: '入睡后停止声音，让大脑在安静环境中进入深度睡眠，获得更好的恢复效果。' },
    ],
    resources: [
      { title: '粉红噪音', slug: 'pink-noise', category: 'White Noise', scene: '入睡、深度放松', duration: '10 小时' },
      { title: '放松雨声', slug: 'relaxing-rain', category: 'Rain', scene: '入睡、放松', duration: '10 小时' },
      { title: '轻柔夜雨', slug: 'gentle-night-rain', category: 'Rain', scene: '入睡、放松', duration: '3 小时' },
    ],
    faqs: [
      { q: '入睡自动停止怎么知道我睡着了？', a: '通过手机加速度传感器检测你的身体活动变化。入睡后身体活动明显减少，翻身频率降低。' },
    ]
  },
  'sound-masking-tinnitus': {
    title: '声音遮蔽疗法：耳鸣缓解入门',
    titleEn: "Sound Masking Therapy: A Beginner's Guide to Tinnitus Relief",
    topic: '耳鸣',
    summary: '科学认识声音遮蔽疗法，了解为什么它是缓解耳鸣最被推荐的非药物方法。',
    problem: '耳鸣影响全球约 15% 的人口。在安静环境（尤其是睡前）耳鸣会格外明显，严重影响生活质量和睡眠。',
    steps: [
      { title: '了解原理', desc: '声音遮蔽通过播放外部声音来盖住或分散对耳鸣声的注意力。大脑会逐渐习惯外部声音而忽略耳鸣。' },
      { title: '选择合适的声音', desc: '选择频率接近你耳鸣的声音效果最好。高频耳鸣（像蟋蟀声）用虫鸣类；低频耳鸣（像嗡嗡声）用海浪或深海声。' },
      { title: '坚持使用', desc: '声音疗法需要持续使用才有效。每晚入睡前播放，随着时间推移，大脑对耳鸣的感知会逐渐降低。' },
    ],
    resources: [
      { title: '蟋蟀对话', slug: 'cricket-sounds', category: 'Tinnitus Relief', scene: '耳鸣缓解、入睡', duration: '10 小时' },
      { title: '草地虫鸣夜风', slug: 'crickets-insects', category: 'Tinnitus Relief', scene: '耳鸣缓解、助眠', duration: '10 小时' },
      { title: '深海气泡', slug: 'deep-sea-bubbles', category: 'Nature', scene: '深度放松', duration: '8 小时' },
    ],
    faqs: [
      { q: '声音遮蔽疗法有科学依据吗？', a: '有。Mayo Clinic、美国耳鸣协会（ATA）等权威机构均推荐声音疗法作为耳鸣管理的核心手段。' },
      { q: '多久能见效？', a: '因人而异。有些人立刻感到缓解，有些人需要数周的持续使用。关键是找到适合你的声音类型和音量。' },
    ]
  },
  'tinnitus-sleep-strategies': {
    title: '耳鸣患者的睡眠策略',
    titleEn: 'Sleep Strategies for Tinnitus Sufferers',
    topic: '耳鸣',
    summary: '耳鸣导致失眠？综合声音疗法和睡眠习惯调整帮你改善。',
    problem: '耳鸣在夜间安静时最为明显，导致入睡困难和频繁醒来，形成耳鸣-失眠-焦虑的恶性循环。',
    steps: [
      { title: '打破安静', desc: '睡前开始播放声音遮蔽，不要等到躺在床上才开始。让大脑提前适应外部声音。' },
      { title: '建立睡前仪式', desc: '固定时间播放固定声音，形成条件反射。大脑会把这个声音和该睡觉了联系起来。' },
      { title: '配合入睡自动停止', desc: '在 App 中开启入睡自动停止。声音帮你入睡后自动关闭，给大脑安静的深睡环境。' },
    ],
    resources: [
      { title: '蟋蟀对话', slug: 'cricket-sounds', category: 'Tinnitus Relief', scene: '耳鸣缓解、入睡', duration: '10 小时' },
      { title: '窗外雨声与壁炉', slug: 'rain-fireplace', category: 'Rain', scene: '入睡、放松', duration: '8 小时' },
      { title: '粉红噪音', slug: 'pink-noise', category: 'White Noise', scene: '入睡、深度放松', duration: '10 小时' },
    ],
    faqs: [
      { q: '耳鸣会因为听声音加重吗？', a: '在合理音量下不会。相反，持续使用声音疗法有助于大脑习惯化耳鸣，逐渐降低对它的感知。' },
    ]
  },
  'choose-tinnitus-sounds': {
    title: '如何选择适合你的耳鸣缓解声音',
    titleEn: 'How to Choose the Right Sound for Your Tinnitus',
    topic: '耳鸣',
    summary: '高频耳鸣与低频耳鸣的声音选择指南，帮你找到最有效的缓解声音。',
    problem: '耳鸣的频率因人而异，选对声音是有效缓解的关键。',
    steps: [
      { title: '判断你的耳鸣频率', desc: '高频耳鸣听起来像蟋蟀、蝉鸣、嘶嘶声；低频耳鸣像嗡嗡声、引擎声。' },
      { title: '匹配声音类型', desc: '高频耳鸣用蟋蟀声、虫鸣、粉噪音；低频耳鸣用海浪、深海白噪音、雨声。' },
      { title: '微调音量', desc: '音量调到刚好能注意到但不会掩盖所有声音的程度。不需要完全盖住耳鸣，部分遮蔽就有效。' },
    ],
    resources: [
      { title: '蟋蟀对话', slug: 'cricket-sounds', category: 'Tinnitus Relief', scene: '高频耳鸣缓解', duration: '10 小时' },
      { title: '草地虫鸣夜风', slug: 'crickets-insects', category: 'Tinnitus Relief', scene: '高频耳鸣缓解', duration: '10 小时' },
      { title: '深海气泡', slug: 'deep-sea-bubbles', category: 'Nature', scene: '低频耳鸣缓解', duration: '8 小时' },
    ],
    faqs: [
      { q: '可以同时用多种声音吗？', a: '可以。睡眠岛 App 支持混音，你可以把蟋蟀声和雨声叠在一起使用。' },
    ]
  },
  'detect-snoring-phone': {
    title: '如何用手机检测鼾声',
    titleEn: 'How to Detect Snoring with Your Phone',
    topic: '鼾声',
    summary: '不需要额外设备，手机放床头就能监测打鼾情况。',
    problem: '很多人不知道自己打鼾，也不知道打鼾的严重程度。了解是改善的第一步。',
    steps: [
      { title: '下载睡眠岛', desc: 'App Store 搜索「睡眠岛」，免费下载安装。' },
      { title: '开启鼾声监测', desc: '睡前打开 App，开启睡眠监测并打开鼾声监测开关。' },
      { title: '放置手机', desc: '手机放床头柜，关屏就行。AI 会自动区分鼾声、梦话和环境噪音。' },
    ],
    resources: [
      { title: '粉红噪音', slug: 'pink-noise', category: 'White Noise', scene: '入睡、深度放松', duration: '10 小时' },
      { title: '轻柔夜雨', slug: 'gentle-night-rain', category: 'Rain', scene: '入睡、放松', duration: '3 小时' },
      { title: '放松雨声', slug: 'relaxing-rain', category: 'Rain', scene: '入睡、放松', duration: '10 小时' },
    ],
    faqs: [
      { q: '手机监测准确吗？', a: '日常了解打鼾情况完全够用。AI 算法能区分鼾声、梦话和噪音，虽然不如专业睡眠实验室精确，但作为日常监测非常实用。' },
    ]
  },
  'snoring-levels-health': {
    title: '鼾声等级与健康风险',
    titleEn: 'Snoring Levels and Health Risks',
    topic: '鼾声',
    summary: '了解打鼾的严重程度分级和潜在健康风险。',
    problem: '打鼾不只是吵的问题，严重打鼾可能是睡眠呼吸暂停的信号，不治疗会导致高血压、白天嗜睡等问题。',
    steps: [
      { title: '了解鼾声等级', desc: '轻度（少于10次/小时）：通常无害，侧睡可能改善。中度（10-30次）：需关注体重和睡姿。重度（超过30次）：应就医检查。' },
      { title: '监测你的鼾声', desc: '用睡眠岛记录鼾声数据，了解自己的打鼾频率、时长和严重程度。' },
      { title: '必要时就医', desc: '如果重度打鼾或伴有白天嗜睡，带上睡眠岛的鼾声报告去看医生，可能需要排查 OSA。' },
    ],
    resources: [
      { title: '暴风雪', slug: 'blizzard', category: 'Nature', scene: '遮蔽噪音', duration: '10 小时' },
      { title: '窗外雨声与壁炉', slug: 'rain-fireplace', category: 'Rain', scene: '入睡、放松', duration: '8 小时' },
      { title: '深海气泡', slug: 'deep-sea-bubbles', category: 'Nature', scene: '深度放松', duration: '8 小时' },
    ],
    faqs: [
      { q: '打鼾能治好吗？', a: '取决于原因。体重减轻、侧睡、避免睡前饮酒等可以改善轻中度打鼾。重度打鼾可能需要 CPAP 或手术治疗。' },
    ]
  },
};

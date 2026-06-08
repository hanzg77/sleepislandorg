// Crawlable "browse by sound" hub pages. Each maps to a category used in resources.ts.
// Built for zh-Hans + en first (highest-demand markets); other locales fall back to en.
import type { Lang } from './i18n';

export interface SoundCategory {
  /** Exact category string as stored on each resource in resources.ts */
  key: string;
  /** URL segment, e.g. /sounds/rain/ */
  slug: string;
  title: { zh: string; en: string };
  /** Short meta description (~1 sentence). */
  desc: { zh: string; en: string };
  /** 2-3 sentence on-page intro with the why-it-helps angle. */
  intro: { zh: string; en: string };
}

// Ordered roughly by search demand / intent value.
export const SOUND_CATEGORIES: SoundCategory[] = [
  {
    key: 'Rain',
    slug: 'rain',
    title: { zh: '雨声助眠', en: 'Rain Sounds for Sleep' },
    desc: {
      zh: '免费雨声音景:轻柔夜雨、湖面雨滴、铁皮屋顶雷雨等，稳定的雨声遮蔽噪音、助你安然入睡。',
      en: 'Free rain soundscapes — gentle night rain, raindrops on a lake, thunderstorms on a tin roof — steady rain to mask noise and help you sleep.',
    },
    intro: {
      zh: '雨声是最受欢迎的自然助眠音之一:稳定而宽频的淅沥声能盖住突发噪音，也给纷乱的思绪一个柔和的节奏去跟随。下面是我们的免费雨声音景，从轻柔夜雨到铁皮屋顶上的雷雨，点开即可试听。',
      en: 'Rain is one of the most popular natural sleep aids — its steady, broadband patter covers sudden noises and gives a racing mind a gentle rhythm to follow. Browse our free rain soundscapes below, from gentle night rain to thunderstorms on a tin roof, and play a preview instantly.',
    },
  },
  {
    key: 'White Noise',
    slug: 'white-noise',
    title: { zh: '白噪音助眠', en: 'White Noise for Sleep' },
    desc: {
      zh: '免费白噪音与粉红噪音:均匀稳定的声音盖住交通、鼾声、邻居噪音，帮你更快入睡、整夜安睡。',
      en: 'Free white & pink noise — an even, steady wash of sound that covers traffic, snoring and neighbors to help you fall asleep faster and stay asleep.',
    },
    intro: {
      zh: '白噪音把所有可听频率均匀地混合成一片稳定的声音，盖住交通、鼾声、邻居等扰人的背景噪音，被广泛用来更快入睡、整夜安睡。低频更厚实的粉红噪音听感更柔和温暖，很多人觉得更适合深睡。',
      en: 'White noise blends every audible frequency into a steady, even wash of sound that covers disruptive background noise — traffic, snoring, a noisy neighbor. It is widely used to fall asleep faster and stay asleep. Pink noise, with stronger low frequencies, sounds softer and warmer and many find it better for deep sleep.',
    },
  },
  {
    key: 'Nature',
    slug: 'nature',
    title: { zh: '自然助眠声音', en: 'Nature Sounds for Sleep' },
    desc: {
      zh: '免费自然音景:森林、溪流、虫鸣、海浪等，降低压力、舒缓身心，引你慢慢入睡。',
      en: 'Free nature soundscapes — forest, stream, crickets, ocean — lowering stress and easing you gently toward sleep.',
    },
    intro: {
      zh: '森林、溪流、虫鸣、海浪——自然音景通过重现大脑与"安全"相关联的平静、可预期声音，降低压力、舒缓身心，引你慢慢入睡。挑一段最让你放松的自然声，点开即可试听。',
      en: 'Forests, streams, crickets, ocean — natural soundscapes lower stress and ease you toward sleep by recreating the calm, predictable sounds our brains associate with safety. Pick whichever nature sound relaxes you most and play a preview.',
    },
  },
  {
    key: 'ASMR',
    slug: 'asmr',
    title: { zh: 'ASMR 助眠音', en: 'Sleep ASMR Sounds' },
    desc: {
      zh: '免费无人声 ASMR:轻柔敲击、刷擦、掏耳等触发音，带来酥麻放松感，帮你慢慢入睡。',
      en: 'Free no-talking ASMR — gentle tapping, brushing and ear triggers that create a tingling, relaxed feeling to help you drift off.',
    },
    intro: {
      zh: 'ASMR 助眠触发音——轻柔的敲击、刷擦、掏耳等近距离声音——会带来酥麻、深度放松的感觉，帮助很多人慢慢入睡。这里的音轨均为无人声，不会有说话声把你重新拉醒。',
      en: 'ASMR sleep triggers — gentle tapping, brushing, scratching and other close-up sounds — create a tingling, deeply relaxed feeling that helps many people drift off. These tracks are no-talking, so nothing pulls you back awake.',
    },
  },
  {
    key: 'Meditation',
    slug: 'meditation',
    title: { zh: '冥想助眠音乐', en: 'Meditation Music for Sleep' },
    desc: {
      zh: '免费冥想音乐:颂钵、轻柔钢琴、空灵氛围音，引导呼吸放缓、平息杂念，适合冥想与睡眠。',
      en: 'Free meditation music — singing bowls, soft piano, ethereal pads — to slow your breathing and quiet the mind for meditation and sleep.',
    },
    intro: {
      zh: '舒缓的氛围冥想音乐——颂钵、轻柔钢琴、空灵音垫——引导呼吸放缓、平息脑中杂念，适合冥想、放松与睡眠。让旋律带你慢慢沉静下来。',
      en: 'Slow, ambient meditation music — singing bowls, soft piano, ethereal pads — guides your breathing down and quiets mental chatter for meditation, relaxation and sleep. Let the sound settle your mind.',
    },
  },
  {
    key: 'Music',
    slug: 'music',
    title: { zh: '助眠音乐', en: 'Sleep Music' },
    desc: {
      zh: '免费助眠音乐:lo-fi、钢琴、摇篮曲与氛围乐，没有突兀节拍与人声，帮你放松入睡。',
      en: 'Free sleep music — lo-fi, piano, lullabies and ambient pieces, with no jarring beats or vocals, to help you unwind and fall asleep.',
    },
    intro: {
      zh: '舒缓的器乐助眠音乐——lo-fi、钢琴、摇篮曲与氛围乐——没有突兀的节拍与人声，帮你放松身心、安然入睡。睡前挑一首，让它陪你慢慢入眠。',
      en: 'Calm instrumental sleep music — lo-fi, piano, lullabies and ambient pieces — without jarring beats or vocals, composed to help you unwind and fall asleep. Pick one for bedtime and let it carry you off.',
    },
  },
  {
    key: 'Fireplace',
    slug: 'fireplace',
    title: { zh: '炉火声助眠', en: 'Fireplace Sounds' },
    desc: {
      zh: '免费炉火声:温暖的噼啪声营造舒适安心的氛围，适合睡眠、阅读与放松。',
      en: 'Free fireplace sounds — a warm, cozy crackle for sleep, reading and relaxation.',
    },
    intro: {
      zh: '壁炉柔和的噼啪声是一种温暖的低频声音，让人感到舒适与安心——是睡眠、阅读或放松时温馨的背景音。常与雨声、风雪声搭配，氛围更足。',
      en: 'The soft crackle and pop of a fireplace is a warm, low-frequency sound that feels cozy and safe — a comforting backdrop for sleep, reading or relaxation. It pairs beautifully with rain or a winter storm.',
    },
  },
  {
    key: 'Tinnitus Relief',
    slug: 'tinnitus',
    title: { zh: '耳鸣缓解声音', en: 'Sounds for Tinnitus Relief' },
    desc: {
      zh: '免费耳鸣遮蔽声音:蟋蟀声、粉红噪音等接近耳鸣音高的自然声，常用于夜间缓解耳鸣。',
      en: 'Free tinnitus-masking sounds — crickets and pink noise close to the ringing’s pitch, commonly used to ease tinnitus at night.',
    },
    intro: {
      zh: '声音遮蔽疗法用接近耳鸣音高的柔和自然声填补寂静，让耳鸣不再那么明显。下面的蟋蟀声与粉红噪音常用于夜间缓解耳鸣，想了解更多可看我们的耳鸣缓解专页。',
      en: 'Sound masking can make tinnitus less noticeable by filling the silence with gentle, natural noise close to the ringing’s own pitch. These cricket and pink-noise tracks are commonly used for tinnitus relief at night — see our tinnitus relief page to learn more.',
    },
  },
];

export function getCategoryBySlug(slug: string): SoundCategory | undefined {
  return SOUND_CATEGORIES.find((c) => c.slug === slug);
}

type CatLang = 'zh' | 'en';
export function catLang(lang: Lang): CatLang {
  return lang === 'zh-Hans' || lang === 'zh-Hant' ? 'zh' : 'en';
}

export interface CategoryText { title: string; desc: string; intro: string; }

// Localized hub copy for the other 13 languages (zh-Hans + en live on SOUND_CATEGORIES
// above). Keyed slug -> lang -> text. Generated by the translate-sound-categories workflow.
export const CATEGORY_I18N: Record<string, Partial<Record<Lang, CategoryText>>> = {
  "rain": {
    "ja": {
      "title": "雨の音で快眠",
      "desc": "無料の雨のサウンドスケープ。静かな夜の雨、湖面に落ちる雨粒、トタン屋根に響く雷雨など、安定した雨音が騒音をやわらげ、心地よい眠りへ導きます。",
      "intro": "雨の音は、自然の眠りサポートとして最も人気のあるもののひとつです。一定の幅広い周波数を含むその音は、突然の物音をやさしく包み込み、止まらない思考にも穏やかなリズムを与えてくれます。静かな夜の雨からトタン屋根に響く雷雨まで、無料の雨のサウンドスケープを下記からどうぞ。その場ですぐに試聴できます。"
    },
    "ko": {
      "title": "수면용 빗소리",
      "desc": "무료 빗소리 사운드스케이프 — 부드러운 밤비, 호수에 떨어지는 빗방울, 양철 지붕 위 천둥소리 — 잡음을 가려주는 일정한 빗소리로 편안한 잠을 도와줍니다.",
      "intro": "빗소리는 가장 인기 있는 자연 수면 사운드 중 하나입니다. 일정하고 넓은 대역의 빗소리는 갑작스러운 소음을 덮어주고, 복잡한 생각에 따라갈 수 있는 부드러운 리듬을 만들어 줍니다. 아래에서 부드러운 밤비부터 양철 지붕 위 천둥소리까지 무료 빗소리 사운드스케이프를 살펴보고 바로 미리 들어보세요."
    },
    "es": {
      "title": "Sonidos de lluvia para dormir",
      "desc": "Paisajes sonoros de lluvia gratuitos: suave lluvia nocturna, gotas sobre un lago, tormentas sobre un techo de zinc, lluvia constante para enmascarar el ruido y ayudarte a dormir.",
      "intro": "La lluvia es uno de los sonidos naturales más populares para conciliar el sueño: su repiqueteo constante y de banda ancha cubre los ruidos repentinos y le da a una mente acelerada un ritmo suave que seguir. Explora abajo nuestros paisajes sonoros de lluvia gratuitos, desde la suave lluvia nocturna hasta las tormentas sobre un techo de zinc, y escucha una vista previa al instante."
    },
    "fr": {
      "title": "Bruit de pluie pour dormir",
      "desc": "Ambiances sonores de pluie gratuites — pluie nocturne douce, gouttes sur un lac, orages sur un toit en tôle — une pluie régulière pour masquer le bruit et favoriser le sommeil.",
      "intro": "La pluie est l'un des sons naturels les plus appréciés pour dormir : son crépitement régulier et à large spectre couvre les bruits soudains et offre à un esprit agité un rythme apaisant à suivre. Découvrez ci-dessous nos ambiances de pluie gratuites, de la douce pluie nocturne aux orages sur un toit en tôle, et lancez un aperçu en un instant."
    },
    "de": {
      "title": "Regengeräusche zum Einschlafen",
      "desc": "Kostenlose Regenklänge - sanfter Nachtregen, Regentropfen auf einem See, Gewitter auf einem Blechdach - gleichmäßiger Regen, der Lärm überdeckt und beim Einschlafen hilft.",
      "intro": "Regen gehört zu den beliebtesten natürlichen Einschlafhilfen - sein gleichmäßiges, breitbandiges Prasseln überdeckt plötzliche Geräusche und gibt einem kreisenden Kopf einen sanften Rhythmus zum Folgen. Stöbere unten durch unsere kostenlosen Regenklänge, von sanftem Nachtregen bis zu Gewittern auf einem Blechdach, und höre sofort eine Vorschau."
    },
    "pt": {
      "title": "Sons de Chuva para Dormir",
      "desc": "Sons de chuva gratuitos — chuva suave à noite, pingos no lago, trovoadas no telhado de zinco — uma chuva constante que abafa ruídos e ajuda você a dormir.",
      "intro": "A chuva é um dos sons naturais mais populares para dormir: seu repicar constante e abrangente encobre ruídos repentinos e dá à mente agitada um ritmo suave para acompanhar. Conheça abaixo nossos sons de chuva gratuitos, da chuva mansa da noite às trovoadas no telhado de zinco, e ouça uma prévia na hora."
    },
    "ru": {
      "title": "Звуки дождя для сна",
      "desc": "Бесплатные звуки дождя — тихий ночной дождь, капли по воде, гроза по жестяной крыше — ровный шум дождя заглушает посторонние звуки и помогает уснуть.",
      "intro": "Дождь — один из самых популярных природных звуков для сна: его ровный, насыщенный шорох заглушает резкие звуки и даёт беспокойному уму спокойный ритм, за которым можно следовать. Ниже собраны наши бесплатные звуки дождя — от тихого ночного дождя до грозы по жестяной крыше — и каждый можно сразу прослушать."
    },
    "ar": {
      "title": "أصوات المطر للنوم",
      "desc": "مجموعات صوتية مجانية للمطر — مطر ليلي هادئ، قطرات على سطح بحيرة، وعواصف رعدية على سقف معدني — صوت مطر ثابت يحجب الضوضاء ويساعدك على النوم.",
      "intro": "يُعدّ المطر من أكثر الأصوات الطبيعية المفضّلة للنوم؛ فصوت تساقطه الثابت والواسع النطاق يغطّي الضوضاء المفاجئة ويمنح الذهن المشتّت إيقاعًا لطيفًا يتبعه. تصفّح أدناه مجموعاتنا الصوتية المجانية للمطر، من المطر الليلي الهادئ إلى العواصف الرعدية على سطح معدني، واستمع إلى معاينة فورية."
    },
    "hi": {
      "title": "सोने के लिए बारिश की आवाज़",
      "desc": "मुफ़्त बारिश के साउंडस्केप — हल्की रात की बारिश, झील पर गिरती बूँदें, टिन की छत पर तूफ़ान — शोर को दबाने और चैन की नींद पाने के लिए लगातार बहती बारिश की आवाज़।",
      "intro": "बारिश सोने में मदद करने वाली सबसे लोकप्रिय प्राकृतिक आवाज़ों में से एक है — इसकी लगातार, हर फ़्रीक्वेंसी में फैली रिमझिम अचानक आने वाले शोर को ढक देती है और भागते-दौड़ते मन को एक हल्की लय दे देती है जिसका वह पीछा कर सके। नीचे हमारे मुफ़्त बारिश साउंडस्केप देखें, हल्की रात की बारिश से लेकर टिन की छत पर गरजते तूफ़ान तक, और तुरंत एक झलक सुनें।"
    },
    "vi": {
      "title": "Tiếng Mưa Ru Ngủ",
      "desc": "Âm thanh mưa miễn phí — mưa đêm dịu nhẹ, tiếng mưa rơi trên mặt hồ, mưa giông trên mái tôn — tiếng mưa đều đặn che lấp tạp âm và giúp bạn dễ ngủ.",
      "intro": "Tiếng mưa là một trong những âm thanh thiên nhiên ru ngủ được yêu thích nhất — tiếng rả rích đều đặn, trải rộng trên nhiều tần số giúp che đi những tiếng động bất chợt và mang lại một nhịp điệu nhẹ nhàng để tâm trí đang xáo trộn bám theo. Hãy khám phá các bản âm thanh mưa miễn phí bên dưới, từ mưa đêm dịu nhẹ đến mưa giông trên mái tôn, và nghe thử ngay lập tức."
    },
    "th": {
      "title": "เสียงฝนกล่อมนอน",
      "desc": "เสียงฝนฟรี ทั้งฝนพรำยามค่ำคืน เสียงหยดน้ำบนผิวทะเลสาบ และพายุฝนบนหลังคาสังกะสี เสียงฝนสม่ำเสมอที่ช่วยกลบเสียงรบกวนและทำให้คุณหลับสบาย",
      "intro": "เสียงฝนเป็นหนึ่งในเสียงธรรมชาติยอดนิยมที่ช่วยให้หลับ เพราะเสียงพรำที่สม่ำเสมอและครอบคลุมทุกความถี่นั้นช่วยกลบเสียงรบกวนที่เกิดขึ้นกะทันหัน และมอบจังหวะอันนุ่มนวลให้จิตใจที่วุ่นวายได้คล้อยตาม เลือกฟังเสียงฝนฟรีของเราด้านล่างได้เลย ตั้งแต่ฝนพรำยามค่ำคืนไปจนถึงพายุฝนบนหลังคาสังกะสี และกดฟังตัวอย่างได้ทันที"
    },
    "id": {
      "title": "Suara Hujan untuk Tidur",
      "desc": "Suara hujan gratis — hujan malam yang lembut, tetesan air di danau, badai petir di atap seng — suara hujan yang stabil untuk meredam kebisingan dan membantumu tidur.",
      "intro": "Hujan adalah salah satu suara alam paling populer untuk membantu tidur — gemericiknya yang stabil dan berfrekuensi luas menutupi suara-suara mendadak dan memberi pikiran yang gelisah irama lembut untuk diikuti. Jelajahi koleksi suara hujan gratis kami di bawah ini, mulai dari hujan malam yang lembut hingga badai petir di atap seng, dan putar pratinjaunya secara langsung."
    },
    "zh-Hant": {
      "title": "助眠雨聲",
      "desc": "免費雨聲音景：輕柔的夜雨、湖面雨滴、鐵皮屋頂上的雷雨，穩定的雨聲能蓋過噪音，幫助你安然入睡。",
      "intro": "雨聲是最受歡迎的天然助眠音之一，穩定而寬頻的淅瀝聲能蓋過突如其來的噪音，也給紛亂的思緒一個柔和的節奏去跟隨。在下方瀏覽我們的免費雨聲音景，從輕柔的夜雨到鐵皮屋頂上的雷雨，點開即可立即試聽。"
    }
  },
  "white-noise": {
    "ja": {
      "title": "ホワイトノイズで快眠",
      "desc": "無料のホワイトノイズ＆ピンクノイズ。均一で安定した音が交通音やいびき、隣人の物音を包み込み、より早く眠りにつき、ぐっすり眠るのを助けます。",
      "intro": "ホワイトノイズは、あらゆる可聴域の周波数を均一に混ぜ合わせ、一定で滑らかな音の層をつくります。交通音やいびき、隣人の物音といった気になる背景音を包み込み、より早く眠りにつき、ぐっすり眠るために広く使われています。低音がより強いピンクノイズは、やわらかく温かみのある聞こえ方で、深い眠りに向いていると感じる人も多くいます。"
    },
    "ko": {
      "title": "수면용 백색소음",
      "desc": "무료 백색소음과 핑크 노이즈 — 차 소리, 코골이, 이웃 소음을 덮어주는 균일하고 일정한 소리로 더 빨리 잠들고 깊게 자도록 도와줍니다.",
      "intro": "백색소음은 들을 수 있는 모든 주파수를 균일하게 섞어 일정한 소리를 만들어, 차 소리나 코골이, 시끄러운 이웃 같은 거슬리는 배경 소음을 덮어줍니다. 더 빨리 잠들고 깊게 자기 위해 널리 쓰입니다. 저주파가 더 강한 핑크 노이즈는 한결 부드럽고 따뜻하게 들려, 많은 사람이 깊은 잠에 더 좋다고 느낍니다."
    },
    "es": {
      "title": "Ruido blanco para dormir",
      "desc": "Ruido blanco y rosa gratis: un sonido parejo y constante que cubre el tráfico, los ronquidos y a los vecinos para ayudarte a dormirte antes y seguir dormido.",
      "intro": "El ruido blanco mezcla todas las frecuencias audibles en un sonido constante y parejo que cubre el ruido de fondo molesto: el tráfico, los ronquidos, un vecino ruidoso. Se usa mucho para conciliar el sueño más rápido y mantenerse dormido. El ruido rosa, con frecuencias graves más marcadas, suena más suave y cálido, y muchas personas lo prefieren para un sueño profundo."
    },
    "fr": {
      "title": "Bruit blanc pour dormir",
      "desc": "Bruit blanc et rose gratuits — un flot de son régulier et uniforme qui couvre la circulation, les ronflements et les voisins pour vous aider à vous endormir plus vite et à rester endormi.",
      "intro": "Le bruit blanc mélange toutes les fréquences audibles en un flot sonore régulier et uniforme qui couvre les bruits de fond gênants — circulation, ronflements, voisin bruyant. Il est largement utilisé pour s'endormir plus vite et rester endormi. Le bruit rose, aux basses fréquences plus marquées, paraît plus doux et plus chaleureux, et beaucoup le trouvent mieux adapté au sommeil profond."
    },
    "de": {
      "title": "Weißes Rauschen zum Einschlafen",
      "desc": "Kostenloses weißes und rosa Rauschen - ein gleichmäßiger, ruhiger Klangteppich, der Verkehr, Schnarchen und Nachbarn überdeckt, damit du schneller einschläfst und durchschläfst.",
      "intro": "Weißes Rauschen mischt alle hörbaren Frequenzen zu einem gleichmäßigen, ruhigen Klangteppich, der störende Hintergrundgeräusche überdeckt - Verkehr, Schnarchen, einen lauten Nachbarn. Es wird häufig genutzt, um schneller einzuschlafen und durchzuschlafen. Rosa Rauschen mit stärkeren tiefen Frequenzen klingt weicher und wärmer, und viele empfinden es als angenehmer für einen tiefen Schlaf."
    },
    "pt": {
      "title": "Ruído Branco para Dormir",
      "desc": "Ruído branco e rosa gratuitos — um fluxo uniforme e constante de som que abafa o trânsito, o ronco e os vizinhos para você pegar no sono mais rápido e dormir a noite toda.",
      "intro": "O ruído branco mistura todas as frequências audíveis em um fluxo de som constante e uniforme que encobre ruídos de fundo incômodos — trânsito, ronco, um vizinho barulhento. É muito usado para pegar no sono mais rápido e dormir sem interrupções. Já o ruído rosa, com graves mais fortes, soa mais suave e aconchegante, e muita gente o prefere para um sono profundo."
    },
    "ru": {
      "title": "Белый шум для сна",
      "desc": "Бесплатный белый и розовый шум — ровный, постоянный звуковой фон, который заглушает шум машин, храп и соседей, помогая быстрее уснуть и крепче спать.",
      "intro": "Белый шум смешивает все слышимые частоты в ровный, постоянный звук, который заглушает мешающий фон — шум машин, храп, шумных соседей. Его широко используют, чтобы быстрее засыпать и крепче спать. Розовый шум, с более выраженными низкими частотами, звучит мягче и теплее, и многим он кажется лучше подходящим для глубокого сна."
    },
    "ar": {
      "title": "الضوضاء البيضاء للنوم",
      "desc": "ضوضاء بيضاء ووردية مجانية — صوت متجانس وثابت يغطّي حركة المرور والشخير وضجيج الجيران ليساعدك على النوم بسرعة أكبر والبقاء نائمًا.",
      "intro": "تمزج الضوضاء البيضاء كل الترددات المسموعة في صوت ثابت ومتجانس يغطّي الضوضاء الخلفية المزعجة، كحركة المرور والشخير وضجيج الجيران. وتُستخدم على نطاق واسع للنوم بسرعة أكبر والبقاء نائمًا. أما الضوضاء الوردية، بترددات منخفضة أقوى، فتبدو أنعم وأدفأ، ويجدها كثيرون أفضل للنوم العميق."
    },
    "hi": {
      "title": "सोने के लिए व्हाइट नॉइज़",
      "desc": "मुफ़्त व्हाइट और पिंक नॉइज़ — आवाज़ की एक समान, स्थिर लहर जो ट्रैफ़िक, खर्राटों और पड़ोसियों को ढककर आपको जल्दी सोने और गहरी नींद में बने रहने में मदद करती है।",
      "intro": "व्हाइट नॉइज़ हर सुनाई देने वाली फ़्रीक्वेंसी को मिलाकर आवाज़ की एक स्थिर, समान लहर बना देता है जो ट्रैफ़िक, खर्राटों और शोर मचाते पड़ोसी जैसे परेशान करने वाले बैकग्राउंड शोर को ढक देती है। इसका इस्तेमाल जल्दी सोने और पूरी रात नींद बनाए रखने के लिए खूब किया जाता है। पिंक नॉइज़, जिसमें कम फ़्रीक्वेंसी ज़्यादा होती हैं, सुनने में नरम और गर्माहट भरा लगता है और कई लोग इसे गहरी नींद के लिए बेहतर मानते हैं।"
    },
    "vi": {
      "title": "Tiếng Ồn Trắng Ru Ngủ",
      "desc": "Tiếng ồn trắng và hồng miễn phí — một lớp âm thanh đều đặn, ổn định che lấp tiếng xe cộ, tiếng ngáy và hàng xóm, giúp bạn ngủ nhanh hơn và ngủ sâu suốt đêm.",
      "intro": "Tiếng ồn trắng hòa trộn mọi tần số nghe được thành một lớp âm thanh đều đặn, ổn định, che lấp những tạp âm gây khó chịu — tiếng xe cộ, tiếng ngáy hay tiếng ồn từ hàng xóm. Nó được nhiều người dùng để ngủ nhanh hơn và ngủ trọn giấc. Tiếng ồn hồng, với tần số thấp mạnh hơn, nghe êm dịu và ấm áp hơn, và nhiều người thấy nó phù hợp hơn cho giấc ngủ sâu."
    },
    "th": {
      "title": "ไวต์นอยส์กล่อมนอน",
      "desc": "ไวต์นอยส์และพิงก์นอยส์ฟรี เสียงที่สม่ำเสมอและกลมกลืน ช่วยกลบเสียงจราจร เสียงกรน และเสียงเพื่อนบ้าน เพื่อให้คุณหลับเร็วขึ้นและหลับสนิทตลอดคืน",
      "intro": "ไวต์นอยส์ผสานทุกความถี่ที่หูได้ยินเข้าด้วยกันเป็นเสียงที่สม่ำเสมอและกลมกลืน ช่วยกลบเสียงรบกวนรอบตัว ไม่ว่าจะเป็นเสียงจราจร เสียงกรน หรือเสียงเพื่อนบ้าน หลายคนใช้เพื่อให้หลับเร็วขึ้นและหลับสนิทตลอดคืน ส่วนพิงก์นอยส์ที่มีความถี่ต่ำหนักแน่นกว่า จะให้เสียงที่นุ่มนวลและอบอุ่นกว่า หลายคนรู้สึกว่าเหมาะกับการหลับลึกมากกว่า"
    },
    "id": {
      "title": "White Noise untuk Tidur",
      "desc": "White noise dan pink noise gratis — aliran suara yang rata dan stabil untuk menutupi suara lalu lintas, dengkuran, dan tetangga agar kamu lebih cepat tertidur dan tetap terlelap.",
      "intro": "White noise memadukan setiap frekuensi yang dapat didengar menjadi aliran suara yang rata dan stabil, menutupi kebisingan latar yang mengganggu — lalu lintas, dengkuran, atau tetangga yang berisik. Suara ini banyak digunakan agar lebih cepat tertidur dan tetap terlelap sepanjang malam. Pink noise, dengan frekuensi rendah yang lebih kuat, terdengar lebih lembut dan hangat, dan banyak orang merasa lebih cocok untuk tidur nyenyak."
    },
    "zh-Hant": {
      "title": "助眠白噪音",
      "desc": "免費白噪音與粉紅噪音：均勻穩定的聲音能蓋過車流、打鼾與鄰居噪音，幫助你更快入睡、整夜安睡。",
      "intro": "白噪音將所有可聽見的頻率均勻混合成一片穩定的聲音，蓋過車流、打鼾、吵鬧的鄰居等惱人的背景噪音。它被廣泛用來更快入睡、整夜安睡。低頻較強的粉紅噪音聽起來更柔和溫暖，許多人覺得更適合深層睡眠。"
    }
  },
  "nature": {
    "ja": {
      "title": "自然の音で快眠",
      "desc": "無料の自然のサウンドスケープ。森、せせらぎ、虫の声、波の音などが、ストレスをやわらげ、おだやかに眠りへと誘います。",
      "intro": "森、せせらぎ、虫の声、波の音。自然のサウンドスケープは、私たちの脳が「安全」と結びつける穏やかで予測しやすい音を再現することで、ストレスをやわらげ、眠りへと導いてくれます。いちばんリラックスできる自然の音を選んで、試聴してみてください。"
    },
    "ko": {
      "title": "수면용 자연의 소리",
      "desc": "무료 자연 사운드스케이프 — 숲, 시냇물, 풀벌레, 파도 — 스트레스를 낮추고 부드럽게 잠으로 이끌어 줍니다.",
      "intro": "숲, 시냇물, 풀벌레, 파도 — 자연의 소리는 우리 뇌가 '안전함'과 연결 짓는 차분하고 예측 가능한 소리를 재현해 스트레스를 낮추고 부드럽게 잠으로 이끌어 줍니다. 가장 편안하게 느껴지는 자연의 소리를 골라 바로 미리 들어보세요."
    },
    "es": {
      "title": "Sonidos de la naturaleza para dormir",
      "desc": "Paisajes sonoros de la naturaleza gratuitos: bosque, arroyo, grillos y mar, que reducen el estrés y te llevan suavemente hacia el sueño.",
      "intro": "Bosques, arroyos, grillos, el mar: los paisajes sonoros naturales reducen el estrés y te acercan al sueño al recrear los sonidos tranquilos y predecibles que nuestro cerebro asocia con la seguridad. Elige el sonido de la naturaleza que más te relaje y escucha una vista previa."
    },
    "fr": {
      "title": "Sons de la nature pour dormir",
      "desc": "Ambiances naturelles gratuites — forêt, ruisseau, grillons, océan — pour réduire le stress et vous guider doucement vers le sommeil.",
      "intro": "Forêts, ruisseaux, grillons, océan — les ambiances naturelles réduisent le stress et vous accompagnent vers le sommeil en recréant les sons calmes et prévisibles que notre cerveau associe à la sécurité. Choisissez le son de la nature qui vous détend le plus et lancez un aperçu."
    },
    "de": {
      "title": "Naturgeräusche zum Einschlafen",
      "desc": "Kostenlose Naturklänge - Wald, Bach, Grillen, Meer - die Stress abbauen und dich sanft in den Schlaf begleiten.",
      "intro": "Wälder, Bäche, Grillen, das Meer - Naturklänge bauen Stress ab und begleiten dich sanft in den Schlaf, indem sie die ruhigen, vertrauten Geräusche nachbilden, die unser Gehirn mit Sicherheit verbindet. Wähle den Naturklang, der dich am meisten entspannt, und höre eine Vorschau."
    },
    "pt": {
      "title": "Sons da Natureza para Dormir",
      "desc": "Paisagens sonoras da natureza gratuitas — floresta, riacho, grilos, mar — que reduzem o estresse e conduzem você suavemente ao sono.",
      "intro": "Florestas, riachos, grilos, mar — os sons da natureza reduzem o estresse e conduzem você ao sono ao recriar os ruídos calmos e previsíveis que nosso cérebro associa à sensação de segurança. Escolha o som natural que mais relaxa você e ouça uma prévia."
    },
    "ru": {
      "title": "Звуки природы для сна",
      "desc": "Бесплатные звуки природы — лес, ручей, сверчки, океан — снижают стресс и мягко настраивают на сон.",
      "intro": "Лес, ручей, сверчки, океан — звуки природы снижают стресс и мягко настраивают на сон, воссоздавая спокойные, предсказуемые звуки, которые наш мозг связывает с безопасностью. Выберите тот природный звук, что расслабляет вас сильнее всего, и сразу включите его для прослушивания."
    },
    "ar": {
      "title": "أصوات الطبيعة للنوم",
      "desc": "مجموعات صوتية مجانية من الطبيعة — الغابة والجدول والصراصير والمحيط — تخفّف التوتر وتقودك بلطف نحو النوم.",
      "intro": "الغابات والجداول والصراصير والمحيط — تخفّف أصوات الطبيعة التوتر وتقودك نحو النوم عبر استحضار الأصوات الهادئة والمتوقّعة التي يربطها عقلنا بالأمان. اختر صوت الطبيعة الذي يريحك أكثر واستمع إلى معاينة له."
    },
    "hi": {
      "title": "सोने के लिए प्रकृति की आवाज़ें",
      "desc": "मुफ़्त प्रकृति साउंडस्केप — जंगल, झरना, झींगुर, समुद्र — जो तनाव कम करके आपको धीरे-धीरे नींद की ओर ले जाते हैं।",
      "intro": "जंगल, झरने, झींगुर, समुद्र — प्रकृति की आवाज़ें उन शांत और अनुमान लगाने योग्य ध्वनियों को फिर से रचकर तनाव कम करती हैं जिन्हें हमारा दिमाग़ सुरक्षा से जोड़ता है, और आपको धीरे-धीरे नींद की ओर ले जाती हैं। जो भी प्राकृतिक आवाज़ आपको सबसे ज़्यादा सुकून दे, उसे चुनें और एक झलक सुनें।"
    },
    "vi": {
      "title": "Âm Thanh Thiên Nhiên Ru Ngủ",
      "desc": "Âm thanh thiên nhiên miễn phí — rừng cây, suối chảy, tiếng dế, sóng biển — giúp giảm căng thẳng và nhẹ nhàng đưa bạn vào giấc ngủ.",
      "intro": "Rừng cây, suối chảy, tiếng dế, sóng biển — âm thanh thiên nhiên giúp giảm căng thẳng và nhẹ nhàng đưa bạn vào giấc ngủ bằng cách tái hiện những âm thanh yên bình, dễ đoán mà bộ não chúng ta gắn liền với cảm giác an toàn. Hãy chọn âm thanh thiên nhiên khiến bạn thư giãn nhất và nghe thử ngay."
    },
    "th": {
      "title": "เสียงธรรมชาติกล่อมนอน",
      "desc": "เสียงธรรมชาติฟรี ทั้งป่าไม้ ลำธาร เสียงจิ้งหรีด และคลื่นทะเล ช่วยลดความเครียดและพาคุณเข้าสู่การนอนหลับอย่างนุ่มนวล",
      "intro": "ป่าไม้ ลำธาร เสียงจิ้งหรีด คลื่นทะเล เสียงธรรมชาติเหล่านี้ช่วยลดความเครียดและพาคุณเข้าสู่การนอนหลับ ด้วยการจำลองเสียงอันสงบและคาดเดาได้ ซึ่งสมองของเราเชื่อมโยงกับความปลอดภัย เลือกเสียงธรรมชาติที่ทำให้คุณผ่อนคลายที่สุด แล้วกดฟังตัวอย่างได้เลย"
    },
    "id": {
      "title": "Suara Alam untuk Tidur",
      "desc": "Suara alam gratis — hutan, aliran sungai, jangkrik, ombak laut — yang menurunkan stres dan menuntunmu perlahan menuju tidur.",
      "intro": "Hutan, aliran sungai, jangkrik, ombak laut — suara alam menurunkan stres dan menuntunmu menuju tidur dengan menghadirkan kembali suara-suara tenang dan teratur yang dikaitkan otak kita dengan rasa aman. Pilih suara alam mana pun yang paling membuatmu rileks dan putar pratinjaunya."
    },
    "zh-Hant": {
      "title": "助眠自然聲音",
      "desc": "免費自然音景：森林、溪流、蟲鳴、海浪，舒緩壓力，溫柔地引你入睡。",
      "intro": "森林、溪流、蟲鳴、海浪——自然音景透過重現那些大腦與「安全」相連結、平靜而可預期的聲音，舒緩壓力、引你慢慢入睡。挑一段最讓你放鬆的自然聲，點開即可試聽。"
    }
  },
  "asmr": {
    "ja": {
      "title": "睡眠用ASMR",
      "desc": "無料の声なしASMR。やさしいタッピングやブラッシング、耳元のトリガー音が、ぞくぞくとした心地よいリラックス感を生み、眠りへ誘います。",
      "intro": "睡眠用のASMRトリガー音、たとえばやさしいタッピングやブラッシング、こするような音など、耳元の近い距離の音は、ぞくぞくとした深いリラックス感を生み出し、多くの人が眠りにつくのを助けてくれます。これらの音源はすべて声なしなので、話し声で目が覚めてしまう心配はありません。"
    },
    "ko": {
      "title": "수면용 ASMR",
      "desc": "무료 무말 ASMR — 부드러운 탭핑, 브러싱, 귀 트리거가 짜릿하고 편안한 느낌을 만들어 스르르 잠들도록 도와줍니다.",
      "intro": "ASMR 수면 트리거 — 부드러운 탭핑, 브러싱, 긁는 소리 같은 가까운 거리의 소리 — 는 짜릿하고 깊이 이완되는 느낌을 주어 많은 사람이 스르르 잠들도록 돕습니다. 여기 트랙들은 말소리가 없어, 다시 잠을 깨우는 것이 없습니다."
    },
    "es": {
      "title": "Sonidos ASMR para dormir",
      "desc": "ASMR sin voz gratis: suaves golpecitos, cepillados y disparadores junto al oído que crean una sensación de cosquilleo y relajación para ayudarte a dormir.",
      "intro": "Los disparadores de ASMR para dormir (suaves golpecitos, cepillados, rascados y otros sonidos de cerca) crean una sensación de cosquilleo y profunda relajación que ayuda a muchas personas a quedarse dormidas. Estas pistas son sin voz, así que nada te despierta de nuevo."
    },
    "fr": {
      "title": "Sons ASMR pour dormir",
      "desc": "ASMR sans paroles gratuit — tapotements doux, brossages et déclencheurs auriculaires qui procurent une sensation de picotement et de détente pour vous aider à vous endormir.",
      "intro": "Les déclencheurs ASMR pour dormir — tapotements doux, brossages, grattements et autres sons rapprochés — procurent une sensation de picotement et de détente profonde qui aide beaucoup de gens à s'endormir. Ces pistes sont sans paroles, afin que rien ne vienne vous réveiller."
    },
    "de": {
      "title": "ASMR zum Einschlafen",
      "desc": "Kostenloses ASMR ohne Sprache - sanftes Klopfen, Bürsten und Ohr-Trigger, die ein kribbelndes, entspanntes Gefühl erzeugen und beim Einschlafen helfen.",
      "intro": "ASMR-Einschlaf-Trigger - sanftes Klopfen, Bürsten, Kratzen und andere Nahaufnahme-Geräusche - erzeugen ein kribbelndes, tief entspanntes Gefühl, das vielen Menschen beim Einschlafen hilft. Diese Aufnahmen sind komplett ohne Sprache, sodass dich nichts wieder aufweckt."
    },
    "pt": {
      "title": "Sons de ASMR para Dormir",
      "desc": "ASMR gratuito sem fala — toques suaves, pincéis e estímulos no ouvido que criam uma sensação de formigamento e relaxamento para ajudar você a adormecer.",
      "intro": "Os estímulos de ASMR para dormir — toques suaves, pincéis, arranhões e outros sons bem de perto — criam uma sensação de formigamento e relaxamento profundo que ajuda muita gente a adormecer. Estas faixas são sem fala, então nada puxa você de volta ao estado de alerta."
    },
    "ru": {
      "title": "ASMR для сна",
      "desc": "Бесплатный АСМР без голоса — мягкие постукивания, шуршание и звуки у самого уха, создающие приятное покалывание и расслабление, чтобы вы спокойно уснули.",
      "intro": "Триггеры АСМР для сна — мягкие постукивания, шуршание, поскрёбывание и другие звуки вблизи — вызывают приятное покалывание и глубокое расслабление, помогая многим людям уснуть. В этих записях нет голоса, поэтому ничто не выдернет вас обратно в бодрствование."
    },
    "ar": {
      "title": "أصوات ASMR للنوم",
      "desc": "أصوات ASMR مجانية بلا كلام — نقرات لطيفة وفرشاة ومحفّزات قرب الأذن تمنح إحساسًا بالخدر والاسترخاء يساعدك على الخلود إلى النوم.",
      "intro": "محفّزات ASMR للنوم — من نقرات لطيفة وفرشاة وحكّ وأصوات قريبة أخرى — تمنح إحساسًا بالخدر والاسترخاء العميق يساعد كثيرين على الخلود إلى النوم. هذه المقاطع بلا كلام، فلا شيء يوقظك من جديد."
    },
    "hi": {
      "title": "सोने के लिए ASMR आवाज़ें",
      "desc": "मुफ़्त बिना बोले ASMR — हल्की टैपिंग, ब्रशिंग और कान के पास के ट्रिगर जो एक झुनझुनी भरा, सुकून देने वाला एहसास पैदा करते हैं ताकि आप धीरे-धीरे सो जाएँ।",
      "intro": "ASMR स्लीप ट्रिगर — हल्की टैपिंग, ब्रशिंग, खुरचने और कान के पास की दूसरी नज़दीकी आवाज़ें — एक झुनझुनी भरा, गहरा सुकून देने वाला एहसास पैदा करते हैं जो बहुत से लोगों को धीरे-धीरे सोने में मदद करता है। इन ट्रैक में कोई बोलने की आवाज़ नहीं है, इसलिए कुछ भी आपको दोबारा जगाकर नहीं खींचता।"
    },
    "vi": {
      "title": "Âm Thanh ASMR Giúp Ngủ Ngon",
      "desc": "ASMR không lời miễn phí — tiếng gõ nhẹ, chải và kích thích tai tạo cảm giác tê râm ran, thư thái giúp bạn dễ chìm vào giấc ngủ.",
      "intro": "Các âm thanh ASMR ru ngủ — tiếng gõ nhẹ, chải, gãi và những âm thanh cận cảnh khác — tạo cảm giác tê râm ran, thư thái sâu sắc giúp nhiều người dễ chìm vào giấc ngủ. Các bản âm thanh này hoàn toàn không có lời nói, nên không có gì kéo bạn tỉnh giấc trở lại."
    },
    "th": {
      "title": "เสียง ASMR กล่อมนอน",
      "desc": "ASMR แบบไม่มีเสียงพูดฟรี ทั้งเสียงเคาะเบาๆ เสียงปัดแปรง และเสียงกระตุ้นที่หู สร้างความรู้สึกซ่านและผ่อนคลายเพื่อช่วยให้คุณค่อยๆ เคลิ้มหลับ",
      "intro": "เสียงกระตุ้น ASMR สำหรับการนอน ทั้งเสียงเคาะเบาๆ เสียงปัดแปรง เสียงข่วน และเสียงระยะใกล้อื่นๆ สร้างความรู้สึกซ่านและผ่อนคลายอย่างลึกซึ้ง ที่ช่วยให้หลายคนค่อยๆ เคลิ้มหลับไป เสียงทุกแทร็กที่นี่เป็นแบบไม่มีเสียงพูด จึงไม่มีอะไรมาดึงคุณให้ตื่นขึ้นมาอีก"
    },
    "id": {
      "title": "Suara ASMR untuk Tidur",
      "desc": "ASMR tanpa suara orang berbicara, gratis — ketukan lembut, sapuan sikat, dan pemicu telinga yang menciptakan sensasi geli menenangkan untuk membantumu terlelap.",
      "intro": "Pemicu ASMR untuk tidur — ketukan lembut, sapuan sikat, garukan, dan suara jarak dekat lainnya — menciptakan sensasi geli yang sangat menenangkan dan membantu banyak orang terlelap. Trek-trek ini tanpa suara orang berbicara, jadi tidak ada yang menarikmu kembali terjaga."
    },
    "zh-Hant": {
      "title": "助眠 ASMR 聲音",
      "desc": "免費無人聲 ASMR：輕柔的敲擊、刷擦與掏耳觸發音，帶來酥麻放鬆的感覺，幫助你慢慢入睡。",
      "intro": "ASMR 助眠觸發音——輕柔的敲擊、刷擦、搔抓等近距離聲音——會帶來酥麻、深度放鬆的感受，幫助許多人慢慢入睡。這些音軌全程無人聲，不會有說話聲把你重新拉醒。"
    }
  },
  "meditation": {
    "ja": {
      "title": "瞑想・睡眠用ミュージック",
      "desc": "無料の瞑想ミュージック。シンギングボウル、やわらかなピアノ、幻想的なパッドが呼吸をゆるやかにし、心を静めて瞑想と睡眠へ導きます。",
      "intro": "ゆったりとしたアンビエントの瞑想ミュージック、シンギングボウルやわらかなピアノ、幻想的なパッドの音が、呼吸をゆるやかにし、頭の中のざわめきを静めて、瞑想やリラックス、睡眠へと導きます。その音に、心をそっと落ち着かせてみてください。"
    },
    "ko": {
      "title": "수면용 명상 음악",
      "desc": "무료 명상 음악 — 싱잉볼, 부드러운 피아노, 몽환적인 패드 — 호흡을 늦추고 마음을 가라앉혀 명상과 수면에 좋습니다.",
      "intro": "느리고 잔잔한 명상 음악 — 싱잉볼, 부드러운 피아노, 몽환적인 패드 — 은 호흡을 천천히 가라앉히고 머릿속 잡념을 잠재워 명상과 휴식, 수면에 도움을 줍니다. 소리가 마음을 차분히 가라앉히도록 맡겨 보세요."
    },
    "es": {
      "title": "Música de meditación para dormir",
      "desc": "Música de meditación gratis: cuencos tibetanos, piano suave y pads etéreos para ralentizar tu respiración y calmar la mente para meditar y dormir.",
      "intro": "La música de meditación lenta y ambiental (cuencos tibetanos, piano suave, pads etéreos) ralentiza tu respiración y calma el parloteo mental para meditar, relajarte y dormir. Deja que el sonido sosiegue tu mente."
    },
    "fr": {
      "title": "Musique de méditation pour dormir",
      "desc": "Musique de méditation gratuite — bols chantants, piano doux, nappes éthérées — pour ralentir votre respiration et apaiser l'esprit, idéale pour la méditation et le sommeil.",
      "intro": "Une musique de méditation lente et atmosphérique — bols chantants, piano doux, nappes éthérées — ralentit votre respiration et apaise le bavardage mental pour la méditation, la détente et le sommeil. Laissez le son apaiser votre esprit."
    },
    "de": {
      "title": "Meditationsmusik zum Einschlafen",
      "desc": "Kostenlose Meditationsmusik - Klangschalen, sanftes Klavier, sphärische Klangflächen - die deinen Atem verlangsamt und den Geist beruhigt, für Meditation und Schlaf.",
      "intro": "Langsame, atmosphärische Meditationsmusik - Klangschalen, sanftes Klavier, sphärische Klangflächen - führt deinen Atem nach unten und bringt das Gedankenkarussell zur Ruhe, für Meditation, Entspannung und Schlaf. Lass den Klang deinen Geist zur Ruhe kommen."
    },
    "pt": {
      "title": "Música de Meditação para Dormir",
      "desc": "Música de meditação gratuita — tigelas tibetanas, piano suave, texturas etéreas — para desacelerar a respiração e aquietar a mente para meditar e dormir.",
      "intro": "Uma música de meditação lenta e ambiente — tigelas tibetanas, piano suave, texturas etéreas — desacelera a respiração e aquieta o falatório mental para meditação, relaxamento e sono. Deixe o som acalmar a sua mente."
    },
    "ru": {
      "title": "Музыка для медитации и сна",
      "desc": "Бесплатная музыка для медитации — поющие чаши, мягкое фортепиано, эфирные эмбиент-пэды — чтобы замедлить дыхание и успокоить ум для медитации и сна.",
      "intro": "Спокойная, обволакивающая музыка для медитации — поющие чаши, мягкое фортепиано, эфирные пэды — замедляет дыхание и унимает поток мыслей для медитации, расслабления и сна. Позвольте звуку успокоить ваш ум."
    },
    "ar": {
      "title": "موسيقى التأمل للنوم",
      "desc": "موسيقى تأمل مجانية — أوعية غنائية وبيانو ناعم وطبقات صوتية أثيرية — لإبطاء تنفّسك وتهدئة ذهنك للتأمل والنوم.",
      "intro": "موسيقى تأمل هادئة ومحيطية — أوعية غنائية وبيانو ناعم وطبقات صوتية أثيرية — تبطئ تنفّسك وتهدّئ ضجيج الأفكار للتأمل والاسترخاء والنوم. دع الصوت يهدّئ ذهنك."
    },
    "hi": {
      "title": "सोने के लिए ध्यान संगीत",
      "desc": "मुफ़्त ध्यान संगीत — सिंगिंग बाउल, मुलायम पियानो, अलौकिक पैड — जो आपकी साँसों को धीमा कर मन को शांत करते हैं, ध्यान और नींद के लिए।",
      "intro": "धीमा, माहौल बनाने वाला ध्यान संगीत — सिंगिंग बाउल, मुलायम पियानो, अलौकिक पैड — आपकी साँसों को धीमा कर देता है और मन की बकबक को शांत कर देता है, ध्यान, आराम और नींद के लिए। इस आवाज़ को अपने मन को ठहरने दें।"
    },
    "vi": {
      "title": "Nhạc Thiền Ru Ngủ",
      "desc": "Nhạc thiền miễn phí — chuông xoay, tiếng dương cầm dịu nhẹ, âm nền huyền ảo — giúp làm chậm nhịp thở và tĩnh tâm để thiền và ngủ.",
      "intro": "Nhạc thiền chậm rãi, du dương — chuông xoay, tiếng dương cầm dịu nhẹ, âm nền huyền ảo — giúp làm chậm nhịp thở và làm dịu những suy nghĩ ồn ào trong tâm trí, phù hợp cho thiền, thư giãn và giấc ngủ. Hãy để âm thanh giúp tâm trí bạn lắng dịu lại."
    },
    "th": {
      "title": "ดนตรีสมาธิกล่อมนอน",
      "desc": "ดนตรีสมาธิฟรี ทั้งเสียงขันสวด เสียงเปียโนนุ่มนวล และเสียงแอมเบียนต์ล่องลอย ช่วยให้ลมหายใจช้าลงและจิตใจสงบ เหมาะสำหรับการทำสมาธิและการนอน",
      "intro": "ดนตรีสมาธิแอมเบียนต์ที่ช้าและนุ่มนวล ทั้งเสียงขันสวด เสียงเปียโนเบาๆ และเสียงแพดล่องลอย ช่วยให้ลมหายใจของคุณช้าลงและสงบความคิดที่วุ่นวายในใจ เหมาะสำหรับการทำสมาธิ การผ่อนคลาย และการนอนหลับ ปล่อยให้เสียงดนตรีช่วยให้จิตใจของคุณสงบลง"
    },
    "id": {
      "title": "Musik Meditasi untuk Tidur",
      "desc": "Musik meditasi gratis — singing bowl, piano lembut, dan pad yang halus — untuk memperlambat napas dan menenangkan pikiran saat meditasi maupun tidur.",
      "intro": "Musik meditasi ambient yang lambat — singing bowl, piano lembut, dan pad yang halus — menuntun napasmu menjadi lebih tenang dan meredakan riuh pikiran untuk meditasi, relaksasi, dan tidur. Biarkan suaranya menenangkan pikiranmu."
    },
    "zh-Hant": {
      "title": "冥想助眠音樂",
      "desc": "免費冥想音樂：頌缽、輕柔鋼琴、空靈氛圍音，引導呼吸放緩、平息雜念，適合冥想與睡眠。",
      "intro": "舒緩的氛圍冥想音樂——頌缽、輕柔鋼琴、空靈音垫——引導你的呼吸放緩，平息腦中的雜念，適合冥想、放鬆與睡眠。讓聲音帶你慢慢沉靜下來。"
    }
  },
  "music": {
    "ja": {
      "title": "睡眠用ミュージック",
      "desc": "無料の睡眠用ミュージック。lo-fi、ピアノ、子守唄、アンビエントなど、耳ざわりなビートやボーカルのない、リラックスして眠りにつくための音楽です。",
      "intro": "おだやかなインストゥルメンタルの睡眠用ミュージック、lo-fiやピアノ、子守唄、アンビエントなど、耳ざわりなビートやボーカルがなく、心と体をほぐして眠りにつけるよう作られています。おやすみ前に一曲選んで、そのまま眠りに身をまかせてみてください。"
    },
    "ko": {
      "title": "수면 음악",
      "desc": "무료 수면 음악 — 로파이, 피아노, 자장가, 앰비언트 — 거슬리는 비트나 보컬 없이 긴장을 풀고 잠들도록 도와줍니다.",
      "intro": "잔잔한 연주곡 수면 음악 — 로파이, 피아노, 자장가, 앰비언트 — 은 거슬리는 비트나 보컬 없이 긴장을 풀고 잠들 수 있도록 만들어졌습니다. 잠자리에 들기 전 한 곡을 골라 자연스럽게 잠으로 빠져들어 보세요."
    },
    "es": {
      "title": "Música para dormir",
      "desc": "Música para dormir gratis: lo-fi, piano, canciones de cuna y piezas ambientales, sin ritmos bruscos ni voces, para ayudarte a relajarte y conciliar el sueño.",
      "intro": "Música instrumental tranquila para dormir (lo-fi, piano, canciones de cuna y piezas ambientales), sin ritmos bruscos ni voces, compuesta para ayudarte a relajarte y conciliar el sueño. Elige una para la hora de dormir y deja que te lleve."
    },
    "fr": {
      "title": "Musique pour dormir",
      "desc": "Musique pour dormir gratuite — lo-fi, piano, berceuses et morceaux d'ambiance, sans rythmes brusques ni voix, pour vous détendre et vous endormir.",
      "intro": "Une musique instrumentale calme pour dormir — lo-fi, piano, berceuses et morceaux d'ambiance — sans rythmes brusques ni voix, composée pour vous aider à vous détendre et à vous endormir. Choisissez-en une pour le coucher et laissez-la vous emporter."
    },
    "de": {
      "title": "Einschlafmusik",
      "desc": "Kostenlose Einschlafmusik - Lo-Fi, Klavier, Schlaflieder und Ambient-Stücke, ohne harte Beats oder Gesang, damit du entspannst und einschläfst.",
      "intro": "Ruhige, instrumentale Einschlafmusik - Lo-Fi, Klavier, Schlaflieder und Ambient-Stücke - ohne harte Beats oder Gesang, komponiert, um dich entspannen und einschlafen zu lassen. Wähle ein Stück für die Schlafenszeit und lass dich davontragen."
    },
    "pt": {
      "title": "Músicas para Dormir",
      "desc": "Música para dormir gratuita — lo-fi, piano, canções de ninar e faixas ambientes, sem batidas marcantes nem vocais, para você relaxar e pegar no sono.",
      "intro": "Música instrumental tranquila para dormir — lo-fi, piano, canções de ninar e faixas ambientes — sem batidas marcantes nem vocais, composta para ajudar você a relaxar e pegar no sono. Escolha uma para a hora de dormir e deixe que ela embale você."
    },
    "ru": {
      "title": "Музыка для сна",
      "desc": "Бесплатная музыка для сна — lo-fi, фортепиано, колыбельные и эмбиент, без резких ритмов и вокала, чтобы расслабиться и уснуть.",
      "intro": "Спокойная инструментальная музыка для сна — lo-fi, фортепиано, колыбельные и эмбиент — без резких ритмов и вокала, созданная, чтобы помочь вам расслабиться и уснуть. Выберите трек на ночь и позвольте ему мягко унести вас в сон."
    },
    "ar": {
      "title": "موسيقى للنوم",
      "desc": "موسيقى نوم مجانية — لو-فاي وبيانو وتهويدات ومقطوعات محيطية، بلا إيقاعات حادة أو غناء، لتساعدك على الاسترخاء والنوم.",
      "intro": "موسيقى نوم آلية هادئة — لو-فاي وبيانو وتهويدات ومقطوعات محيطية — من دون إيقاعات حادة أو غناء، مؤلَّفة لتساعدك على الاسترخاء والنوم. اختر مقطوعة لوقت النوم ودعها تأخذك بعيدًا."
    },
    "hi": {
      "title": "सोने के लिए संगीत",
      "desc": "मुफ़्त स्लीप म्यूज़िक — लो-फ़ाई, पियानो, लोरियाँ और एम्बिएंट धुनें, बिना किसी चुभने वाली बीट या आवाज़ के, जो आपको सुकून देकर सुला दें।",
      "intro": "शांत वाद्य संगीत — लो-फ़ाई, पियानो, लोरियाँ और एम्बिएंट धुनें — बिना किसी चुभने वाली बीट या गायन के, इस तरह रचा गया कि यह आपको सुकून देकर सोने में मदद करे। सोने से पहले एक धुन चुनें और उसे आपको नींद की ओर ले जाने दें।"
    },
    "vi": {
      "title": "Nhạc Ngủ Ngon",
      "desc": "Nhạc ngủ miễn phí — lo-fi, dương cầm, lời ru và nhạc nền, không có nhịp điệu chói tai hay giọng hát, giúp bạn thư giãn và đi vào giấc ngủ.",
      "intro": "Nhạc hòa tấu nhẹ nhàng giúp ngủ ngon — lo-fi, dương cầm, lời ru và những bản nhạc nền — không có nhịp điệu chói tai hay giọng hát, được sáng tác để giúp bạn thư giãn và đi vào giấc ngủ. Hãy chọn một bản cho giờ đi ngủ và để nó nhẹ nhàng đưa bạn vào giấc."
    },
    "th": {
      "title": "เพลงกล่อมนอน",
      "desc": "เพลงกล่อมนอนฟรี ทั้งโลไฟ เปียโน เพลงกล่อมเด็ก และดนตรีแอมเบียนต์ ไม่มีจังหวะสะดุดหรือเสียงร้อง ช่วยให้คุณผ่อนคลายและหลับสบาย",
      "intro": "เพลงบรรเลงกล่อมนอนที่นุ่มนวล ทั้งโลไฟ เปียโน เพลงกล่อมเด็ก และดนตรีแอมเบียนต์ ปราศจากจังหวะสะดุดหรือเสียงร้อง ประพันธ์ขึ้นเพื่อช่วยให้คุณผ่อนคลายและหลับลง เลือกสักเพลงสำหรับเวลาเข้านอน แล้วปล่อยให้มันพาคุณเคลิ้มหลับไป"
    },
    "id": {
      "title": "Musik Pengantar Tidur",
      "desc": "Musik pengantar tidur gratis — lo-fi, piano, lagu nina bobo, dan musik ambient, tanpa ketukan keras atau vokal, untuk membantumu rileks dan tertidur.",
      "intro": "Musik pengantar tidur instrumental yang menenangkan — lo-fi, piano, lagu nina bobo, dan musik ambient — tanpa ketukan keras atau vokal, dirancang untuk membantumu rileks dan tertidur. Pilih satu untuk waktu tidur dan biarkan ia membawamu terlelap."
    },
    "zh-Hant": {
      "title": "助眠音樂",
      "desc": "免費助眠音樂：lo-fi、鋼琴、搖籃曲與氛圍樂，沒有突兀的節拍與人聲，幫助你放鬆入睡。",
      "intro": "舒緩的器樂助眠音樂——lo-fi、鋼琴、搖籃曲與氛圍樂——沒有突兀的節拍與人聲，譜寫來幫你放鬆身心、安然入睡。睡前挑一首，讓它陪你慢慢入眠。"
    }
  },
  "fireplace": {
    "ja": {
      "title": "暖炉の音で快眠",
      "desc": "無料の暖炉の音。温かくここちよいパチパチという音が、睡眠や読書、リラックスのひとときを包みます。",
      "intro": "暖炉のやわらかなパチパチという音は、温かく低めの周波数の音で、ここちよく安心できる雰囲気をつくります。睡眠や読書、リラックスのひとときに寄り添う心地よい背景音です。雨や冬の嵐の音と組み合わせると、いっそう趣が深まります。"
    },
    "ko": {
      "title": "벽난로 소리",
      "desc": "무료 벽난로 소리 — 따뜻하고 아늑한 장작 타는 소리로 수면, 독서, 휴식에 좋습니다.",
      "intro": "벽난로의 부드러운 장작 타는 소리는 아늑하고 안심되는 느낌을 주는 따뜻한 저주파 소리로, 수면이나 독서, 휴식에 좋은 포근한 배경음입니다. 빗소리나 겨울 폭풍 소리와 함께 들으면 분위기가 한층 더 살아납니다."
    },
    "es": {
      "title": "Sonidos de chimenea",
      "desc": "Sonidos de chimenea gratis: un crepitar cálido y acogedor para dormir, leer y relajarte.",
      "intro": "El suave crepitar y chisporroteo de una chimenea es un sonido cálido y de baja frecuencia que se siente acogedor y seguro: un fondo reconfortante para dormir, leer o relajarse. Combina de maravilla con la lluvia o una tormenta de invierno."
    },
    "fr": {
      "title": "Bruit de feu de cheminée",
      "desc": "Sons de feu de cheminée gratuits — un crépitement chaleureux et réconfortant pour dormir, lire et se détendre.",
      "intro": "Le doux crépitement d'un feu de cheminée est un son chaleureux et grave qui procure un sentiment de confort et de sécurité — un fond sonore réconfortant pour dormir, lire ou se détendre. Il se marie à merveille avec le bruit de la pluie ou d'une tempête hivernale."
    },
    "de": {
      "title": "Kaminfeuer-Geräusche",
      "desc": "Kostenlose Kaminfeuer-Geräusche - ein warmes, gemütliches Knistern für Schlaf, Lesen und Entspannung.",
      "intro": "Das sanfte Knistern und Knacken eines Kaminfeuers ist ein warmer, tieffrequenter Klang, der sich gemütlich und geborgen anfühlt - eine wohltuende Klangkulisse für Schlaf, Lesen oder Entspannung. Er lässt sich wunderbar mit Regen oder einem Wintersturm kombinieren."
    },
    "pt": {
      "title": "Sons de Lareira",
      "desc": "Sons de lareira gratuitos — um crepitar quente e aconchegante para dormir, ler e relaxar.",
      "intro": "O crepitar suave de uma lareira é um som quente e de baixa frequência que transmite aconchego e segurança — um pano de fundo reconfortante para dormir, ler ou relaxar. Combina lindamente com chuva ou uma tempestade de inverno."
    },
    "ru": {
      "title": "Звук камина для сна",
      "desc": "Бесплатные звуки камина — тёплое, уютное потрескивание для сна, чтения и отдыха.",
      "intro": "Мягкое потрескивание и пощёлкивание камина — это тёплый низкочастотный звук, дарящий ощущение уюта и спокойствия — приятный фон для сна, чтения или отдыха. Он прекрасно сочетается с шумом дождя или зимней метели."
    },
    "ar": {
      "title": "أصوات المدفأة للنوم",
      "desc": "أصوات مدفأة مجانية — طقطقة دافئة ومريحة للنوم والقراءة والاسترخاء.",
      "intro": "طقطقة المدفأة الناعمة صوت دافئ منخفض التردد يبعث على الراحة والأمان — خلفية مريحة للنوم أو القراءة أو الاسترخاء. وتنسجم انسجامًا رائعًا مع صوت المطر أو عاصفة شتوية."
    },
    "hi": {
      "title": "अँगीठी की आवाज़",
      "desc": "मुफ़्त अँगीठी की आवाज़ें — नींद, पढ़ाई और आराम के लिए एक गर्म, आरामदायक चटचटाहट।",
      "intro": "अँगीठी की हल्की चटचटाहट और चिटकने की आवाज़ एक गर्म, कम फ़्रीक्वेंसी वाली ध्वनि है जो आरामदायक और सुरक्षित महसूस कराती है — नींद, पढ़ाई या आराम के लिए एक सुकून देने वाला बैकग्राउंड। यह बारिश या सर्दियों के तूफ़ान के साथ बहुत ख़ूबसूरती से मेल खाती है।"
    },
    "vi": {
      "title": "Tiếng Lò Sưởi Ru Ngủ",
      "desc": "Tiếng lò sưởi miễn phí — tiếng lách tách ấm áp, ấm cúng cho giấc ngủ, đọc sách và thư giãn.",
      "intro": "Tiếng lách tách nhẹ nhàng của lò sưởi là một âm thanh ấm áp, tần số thấp mang lại cảm giác ấm cúng và an toàn — một âm nền dễ chịu cho giấc ngủ, đọc sách hay thư giãn. Nó kết hợp tuyệt vời với tiếng mưa hoặc tiếng bão tuyết mùa đông."
    },
    "th": {
      "title": "เสียงเตาผิงกล่อมนอน",
      "desc": "เสียงเตาผิงฟรี เสียงไฟแตกเปาะแปะที่อบอุ่นและผ่อนคลาย เหมาะสำหรับการนอน การอ่านหนังสือ และการพักผ่อน",
      "intro": "เสียงไฟแตกเปาะแปะเบาๆ จากเตาผิงเป็นเสียงความถี่ต่ำที่อบอุ่น ให้ความรู้สึกสบายและปลอดภัย เป็นเสียงพื้นหลังที่ผ่อนคลายสำหรับการนอน การอ่านหนังสือ หรือการพักผ่อน และเข้ากันได้อย่างลงตัวกับเสียงฝนหรือเสียงพายุหิมะในฤดูหนาว"
    },
    "id": {
      "title": "Suara Perapian untuk Tidur",
      "desc": "Suara perapian gratis — gemeretak hangat dan nyaman untuk tidur, membaca, dan relaksasi.",
      "intro": "Gemeretak lembut dari perapian adalah suara hangat berfrekuensi rendah yang terasa nyaman dan menenangkan — latar yang menenteramkan untuk tidur, membaca, atau bersantai. Suara ini berpadu indah dengan suara hujan atau badai musim dingin."
    },
    "zh-Hant": {
      "title": "助眠爐火聲",
      "desc": "免費爐火聲：溫暖舒適的劈啪聲，適合睡眠、閱讀與放鬆。",
      "intro": "壁爐柔和的劈啪聲是一種溫暖的低頻聲音，讓人感到舒適又安心——是睡眠、閱讀或放鬆時溫馨的背景音。它與雨聲或冬日風雪聲搭配起來格外動人。"
    }
  },
  "tinnitus": {
    "ja": {
      "title": "耳鳴り対策の音",
      "desc": "無料の耳鳴りマスキング音。耳鳴りの音程に近い虫の声やピンクノイズで、夜間の耳鳴りをやわらげるためによく使われます。",
      "intro": "サウンドマスキングは、耳鳴りの音程に近いやさしく自然な音で静けさを満たすことで、耳鳴りを目立ちにくくします。こちらの虫の声やピンクノイズの音源は、夜間の耳鳴り対策としてよく使われています。詳しくは、耳鳴り対策のページをご覧ください。"
    },
    "ko": {
      "title": "이명 완화 소리",
      "desc": "무료 이명 마스킹 소리 — 이명 음높이에 가까운 풀벌레 소리와 핑크 노이즈로 밤에 이명을 덜어주는 데 흔히 사용됩니다.",
      "intro": "사운드 마스킹은 이명 자체의 음높이에 가까운 부드러운 자연의 소리로 정적을 채워, 이명을 덜 거슬리게 만들어 줍니다. 아래의 풀벌레 소리와 핑크 노이즈 트랙은 밤에 이명 완화를 위해 흔히 사용됩니다. 더 알아보려면 이명 완화 페이지를 확인해 보세요."
    },
    "es": {
      "title": "Sonidos para aliviar el tinnitus",
      "desc": "Sonidos enmascarantes para el tinnitus gratis: grillos y ruido rosa cercanos al tono del zumbido, usados habitualmente para aliviar el tinnitus de noche.",
      "intro": "El enmascaramiento sonoro puede hacer que el tinnitus se note menos al llenar el silencio con un ruido suave y natural cercano al propio tono del zumbido. Estas pistas de grillos y ruido rosa se usan habitualmente para aliviar el tinnitus de noche; consulta nuestra página de alivio del tinnitus para saber más."
    },
    "fr": {
      "title": "Sons pour soulager les acouphènes",
      "desc": "Sons de masquage des acouphènes gratuits — grillons et bruit rose proches de la hauteur du sifflement, couramment utilisés pour atténuer les acouphènes la nuit.",
      "intro": "Le masquage sonore peut rendre les acouphènes moins perceptibles en comblant le silence par un son doux et naturel, proche de la hauteur même du sifflement. Ces pistes de grillons et de bruit rose sont couramment utilisées pour soulager les acouphènes la nuit — consultez notre page dédiée aux acouphènes pour en savoir plus."
    },
    "de": {
      "title": "Geräusche zur Tinnitus-Linderung",
      "desc": "Kostenlose Geräusche zur Tinnitus-Maskierung - Grillen und rosa Rauschen nahe der Tonhöhe des Klingelns, häufig genutzt, um Tinnitus nachts zu lindern.",
      "intro": "Klangmaskierung kann Tinnitus weniger auffällig machen, indem sie die Stille mit sanften, natürlichen Geräuschen nahe der Tonhöhe des Klingelns füllt. Diese Aufnahmen mit Grillen und rosa Rauschen werden häufig zur Tinnitus-Linderung in der Nacht genutzt - auf unserer Seite zur Tinnitus-Linderung erfährst du mehr."
    },
    "pt": {
      "title": "Sons para Aliviar o Zumbido no Ouvido",
      "desc": "Sons gratuitos para mascarar o zumbido — grilos e ruído rosa próximos da frequência do zumbido, muito usados para aliviá-lo à noite.",
      "intro": "O mascaramento sonoro pode tornar o zumbido menos perceptível ao preencher o silêncio com sons naturais e suaves próximos da própria frequência do zumbido. Estas faixas de grilos e ruído rosa são muito usadas para aliviar o zumbido à noite — veja nossa página sobre alívio do zumbido para saber mais."
    },
    "ru": {
      "title": "Звуки для облегчения тиннитуса",
      "desc": "Бесплатные маскирующие звуки при тиннитусе — сверчки и розовый шум, близкие по высоте к звону, которые часто используют, чтобы облегчить тиннитус ночью.",
      "intro": "Звуковая маскировка может сделать тиннитус менее заметным, заполняя тишину мягким природным шумом, близким по высоте к самому звону. Эти записи со сверчками и розовым шумом часто используют для облегчения тиннитуса ночью — подробнее читайте на нашей странице об облегчении тиннитуса."
    },
    "ar": {
      "title": "أصوات لتخفيف طنين الأذن",
      "desc": "أصوات مجانية لإخفاء طنين الأذن — صراصير وضوضاء وردية قريبة من نبرة الطنين، تُستخدم عادةً لتخفيفه ليلًا.",
      "intro": "يمكن لإخفاء الصوت أن يجعل طنين الأذن أقل وضوحًا عبر ملء الصمت بضوضاء طبيعية لطيفة قريبة من نبرة الطنين نفسها. تُستخدم مقاطع الصراصير والضوضاء الوردية هذه عادةً لتخفيف طنين الأذن ليلًا — اطّلع على صفحتنا الخاصة بتخفيف طنين الأذن لمعرفة المزيد."
    },
    "hi": {
      "title": "टिनिटस से राहत के लिए आवाज़ें",
      "desc": "मुफ़्त टिनिटस-मास्किंग आवाज़ें — झींगुर और पिंक नॉइज़ जो उस घंटी जैसी आवाज़ की पिच के क़रीब हों, जिन्हें रात में टिनिटस से राहत के लिए आमतौर पर इस्तेमाल किया जाता है।",
      "intro": "साउंड मास्किंग टिनिटस को कम महसूस करा सकती है, क्योंकि यह उस घंटी जैसी आवाज़ की अपनी पिच के क़रीब की हल्की, प्राकृतिक ध्वनि से ख़ामोशी को भर देती है। ये झींगुर और पिंक-नॉइज़ ट्रैक रात में टिनिटस से राहत के लिए आमतौर पर इस्तेमाल किए जाते हैं — और जानने के लिए हमारा टिनिटस राहत पेज देखें।"
    },
    "vi": {
      "title": "Âm Thanh Làm Dịu Ù Tai",
      "desc": "Âm thanh che lấp ù tai miễn phí — tiếng dế và tiếng ồn hồng gần với cao độ của tiếng ù, thường được dùng để làm dịu ù tai vào ban đêm.",
      "intro": "Liệu pháp che âm có thể khiến tiếng ù tai bớt rõ ràng hơn bằng cách lấp đầy sự yên tĩnh với âm thanh thiên nhiên nhẹ nhàng có cao độ gần với chính tiếng ù. Các bản tiếng dế và tiếng ồn hồng này thường được dùng để làm dịu ù tai vào ban đêm — hãy xem trang làm dịu ù tai của chúng tôi để tìm hiểu thêm."
    },
    "th": {
      "title": "เสียงบรรเทาอาการหูอื้อ",
      "desc": "เสียงกลบหูอื้อฟรี ทั้งเสียงจิ้งหรีดและพิงก์นอยส์ที่มีระดับเสียงใกล้เคียงกับเสียงในหู มักใช้เพื่อบรรเทาอาการหูอื้อในยามค่ำคืน",
      "intro": "การกลบด้วยเสียงช่วยให้อาการหูอื้อรู้สึกชัดน้อยลง ด้วยการเติมความเงียบด้วยเสียงธรรมชาติที่นุ่มนวลซึ่งมีระดับเสียงใกล้เคียงกับเสียงในหูของคุณ เสียงจิ้งหรีดและพิงก์นอยส์เหล่านี้มักถูกใช้เพื่อบรรเทาอาการหูอื้อในยามค่ำคืน ดูเพิ่มเติมได้ที่หน้าบรรเทาอาการหูอื้อของเรา"
    },
    "id": {
      "title": "Suara untuk Meredakan Tinnitus",
      "desc": "Suara penutup tinnitus gratis — jangkrik dan pink noise dengan nada mendekati dengingan, sering dipakai untuk meredakan tinnitus di malam hari.",
      "intro": "Penutupan suara dapat membuat tinnitus terasa tidak terlalu mengganggu dengan mengisi keheningan menggunakan suara alam yang lembut dan bernada mendekati dengingan itu sendiri. Trek jangkrik dan pink noise ini sering digunakan untuk meredakan tinnitus di malam hari — kunjungi halaman peredaan tinnitus kami untuk mengetahui lebih lanjut."
    },
    "zh-Hant": {
      "title": "耳鳴緩解聲音",
      "desc": "免費耳鳴遮蔽聲音：蟋蟀聲與接近耳鳴音高的粉紅噪音，常用於夜間緩解耳鳴。",
      "intro": "聲音遮蔽法以接近耳鳴本身音高的柔和自然聲填補寂靜，讓耳鳴變得不那麼明顯。下方的蟋蟀聲與粉紅噪音常用於夜間緩解耳鳴——想了解更多，請參閱我們的耳鳴緩解專頁。"
    }
  }
};

// Resolve hub copy for any of the 15 locales, with sensible fallback:
// zh-Hant -> zh-Hans, any missing translation -> en.
export function getCategoryText(slug: string, lang: Lang): CategoryText {
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: slug, desc: '', intro: '' };
  if (lang === 'zh-Hans') return { title: cat.title.zh, desc: cat.desc.zh, intro: cat.intro.zh };
  if (lang === 'en') return { title: cat.title.en, desc: cat.desc.en, intro: cat.intro.en };
  const t = CATEGORY_I18N[slug]?.[lang];
  if (t) return t;
  if (lang === 'zh-Hant') return { title: cat.title.zh, desc: cat.desc.zh, intro: cat.intro.zh };
  return { title: cat.title.en, desc: cat.desc.en, intro: cat.intro.en };
}

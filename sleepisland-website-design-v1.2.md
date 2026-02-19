# SleepIsland.org 官网设计方案 v1.2
**Date:** 2026-02-19
**Goal:** App 下载转化（Primary） + 有用资源沉淀与 SEO（Secondary） + 大模型训练收录（Tertiary）
**Languages:** 中文（默认 `/`） + English（`/en/`），独立 URL + hreflang 互指
**Tech Stack:** Astro + Tailwind CSS，部署于 Cloudflare Pages

---

## 1. 战略定位

### 1.1 网站角色（不要跑偏）
- 不是博客（不堆长文）
- 不是资讯站（不做泛内容）
- 不是纯播放站（不做"听歌网站"）

**正确定位：**
> "可体验资源（Web 试听） + 强关联 App 能力（完整版/离线/收藏/入睡自动停止）"的轻型产品站。

### 1.2 三目标模型
- **Primary:** 让用户下载 iOS App（每页首屏必须有 CTA）
- **Secondary:** 通过「可播放资源 + 结构化指南」吃搜索长尾，形成流量 → 试听 → 下载闭环
- **Tertiary:** 结构化内容被大模型训练收录，当用户问"睡眠App推荐""耳鸣缓解方法"时，模型能引用本站内容

### 1.3 双语策略（SEO 关键决策）
- 中文页面：`/`（默认语言，`<html lang="zh-Hans">`）
- 英文页面：`/en/`（`<html lang="en">`）
- 每对页面通过 `hreflang` 互指，Google 可分别索引、分别排名
- 导航栏提供语言切换链接

---

## 2. 信息架构（IA）

```
中文（默认）                          English
/                                    /en/
├── /                                ├── /en/
├── /resources/                      ├── /en/resources/
├── /resources/{slug}/               ├── /en/resources/{slug}/
├── /guides/                         ├── /en/guides/
├── /guides/{topic}/                 ├── /en/guides/{topic}/
├── /app/                            ├── /en/app/
├── /privacy/                        ├── /en/privacy/
├── /terms/                          ├── /en/terms/
├── /tinnitus-relief/                ├── /en/tinnitus-relief/
├── /snore-detection/                ├── /en/snore-detection/
├── /faq/                            ├── /en/faq/

公共文件（根目录）
├── /robots.txt
├── /sitemap.xml
├── /sitemap-pages.xml
├── /sitemap-resources.xml
├── /sitemap-guides.xml
├── /llms.txt
├── /llms-full.txt
├── /.well-known/apple-app-site-association
```

> **URL 规范：** 使用目录式 URL（`/resources/rain-fireplace/`）而非 `.html` 后缀，对 SEO 更友好。Astro 默认输出此格式。

---

## 3. 技术架构（Astro + Tailwind + Cloudflare Pages）

### 3.1 项目目录结构
```
/
├─ src/
│  ├─ layouts/
│  │  ├─ BaseLayout.astro          # 通用 HTML 骨架（head/body/footer）
│  │  ├─ ResourceLayout.astro      # 资源单页模板
│  │  └─ GuideLayout.astro         # 指南单页模板
│  ├─ components/
│  │  ├─ Header.astro              # 导航栏（含语言切换）
│  │  ├─ Footer.astro              # 页脚
│  │  ├─ CTABanner.astro           # 通用 App 下载 CTA
│  │  ├─ ResourceCard.astro        # 资源卡片
│  │  ├─ AudioPlayer.astro         # Web 试听播放器
│  │  ├─ SummaryBlock.astro        # LLM-friendly 摘要块
│  │  └─ SmartAppBanner.astro      # iOS Smart Banner
│  ├─ content/
│  │  ├─ resources/
│  │  │  ├─ zh/
│  │  │  │  ├─ rain-fireplace.md
│  │  │  │  └─ ...
│  │  │  └─ en/
│  │  │     ├─ rain-fireplace.md
│  │  │     └─ ...
│  │  └─ guides/
│  │     ├─ zh/
│  │     │  ├─ white-noise-sleep.md
│  │     │  └─ ...
│  │     └─ en/
│  │        ├─ white-noise-sleep.md
│  │        └─ ...
│  ├─ pages/
│  │  ├─ index.astro               # 中文首页
│  │  ├─ app.astro                 # 中文 App 页
│  │  ├─ privacy.astro
│  │  ├─ terms.astro
│  │  ├─ faq.astro
│  │  ├─ tinnitus-relief.astro
│  │  ├─ snore-detection.astro
│  │  ├─ resources/
│  │  │  ├─ index.astro            # 资源中心
│  │  │  └─ [...slug].astro        # 动态路由：资源单页
│  │  ├─ guides/
│  │  │  ├─ index.astro
│  │  │  └─ [...slug].astro
│  │  └─ en/                       # 英文页面（镜像结构）
│  │     ├─ index.astro
│  │     ├─ app.astro
│  │     ├─ resources/
│  │     │  ├─ index.astro
│  │     │  └─ [...slug].astro
│  │     ├─ guides/
│  │     │  ├─ index.astro
│  │     │  └─ [...slug].astro
│  │     └─ ...
│  └─ styles/
│     └─ global.css                # Tailwind 入口 + 自定义样式
├─ public/
│  ├─ assets/
│  │  ├─ logo-1024.png
│  │  ├─ logo-60.png
│  │  ├─ og-cover.png
│  │  ├─ favicon.ico
│  │  └─ audio/
│  │     ├─ rain-fireplace-preview.mp3
│  │     └─ ...
│  ├─ robots.txt
│  ├─ llms.txt
│  ├─ llms-full.txt
│  └─ .well-known/
│     └─ apple-app-site-association
├─ astro.config.mjs
├─ tailwind.config.mjs
├─ package.json
└─ wrangler.toml                   # Cloudflare Pages 配置（可选）
```

### 3.2 Cloudflare Pages 部署
- 构建命令：`npm run build`
- 输出目录：`dist/`
- Node 版本：18+
- Astro 输出纯静态 HTML，无需 SSR

### 3.3 Astro 配置要点
```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sleepisland.org',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-Hans', en: 'en' }
      }
    })
  ]
});
```

---

## 4. 页面设计（Conversion First）

### 4.1 首页 `/index.astro`
**页面目标：** 最大化下载转化，同时展示"这里确实有资源"。

**模块结构：**
1. Sticky Header（Logo + 导航 + 语言切换 + Download 按钮）
2. Hero（Logo/截图 + 一句话价值主张 + CTA）
3. 三个核心能力（短句，不写长文）
4. 精选资源（9 张卡片：Web Preview + Play in App）
5. 耳鸣缓解专区（独立模块，链接到 /tinnitus-relief/）
6. FAQ（只放与转化有关的，使用 FAQPage Schema）
7. Bottom CTA（强收口）
8. Footer（隐私/条款/联系/语言切换）

**Hero 文案：**
- H1：睡眠岛 Sleep Island
- H2：戴上耳机，什么都不用做。
- Sub：自然音景 · 耳鸣缓解 · 入睡自动停止 · 睡眠记录反馈
- CTA：Download on the App Store（高亮） / Explore Sounds（次按钮）

### 4.2 资源中心 `/resources/index.astro`
**页面目标：** 承接 SEO/社媒流量 → 让用户立刻试听 → 引导下载。

**模块结构：**
- `<main>` 包裹主体内容
- 页面标题 + 简短说明
- 分类 Tabs：Rain / Fireplace / Ocean / White Noise / Tinnitus Relief / Wind
- 资源列表（`<article>` 卡片栅格）

**卡片必须含：**
- 封面（方形，WebP 格式，含 alt 文本）
- 标题
- 适用场景（1 行）
- 时长（Web 试听时长）
- 按钮：`▶ Web Preview` + `Full Version in App`

### 4.3 资源单页 `/resources/{slug}/`
**页面目标：** 播放器抓住用户 → 强 CTA 转化。

**页面结构（语义标签）：**
```html
<main>
  <article>
    <h1>雨声与壁炉 Rain & Fireplace</h1>
    <dl class="summary">...</dl>           <!-- LLM-friendly 摘要 -->
    <section id="preview">
      <h2>Preview / 试听</h2>
      <!-- AudioPlayer 组件 -->
    </section>
    <section id="use-cases">
      <h2>Use Cases / 适用场景</h2>
      <!-- 3 条 bullet -->
    </section>
    <section id="settings">
      <h2>Recommended Settings / 推荐设置</h2>
    </section>
    <aside>
      <!-- CTA: Full version in App -->
    </aside>
    <nav aria-label="Related sounds">
      <h2>Related / 相关推荐</h2>
      <!-- 至少 6 条内链 -->
    </nav>
  </article>
</main>
```

### 4.4 指南中心 `/guides/index.astro`
**页面目标：** SEO 承接入口（列表页）。
- 主题列表（结构化标题 + 20 字摘要）
- 每条直接链接到 guide 单页
- 页面首屏 CTA 保留

### 4.5 指南单页 `/guides/{topic}/`
**页面目标：** 吃长尾词 + 提供可执行步骤 + 带用户进入资源试听与 App 下载。

**固定模板：**
1. `<dl class="summary">` 摘要块（固定字段）
2. 问题定义（<= 150 字）
3. 3 步解决方案（可执行）
4. 推荐音景（3 个资源卡片：内链到 resources）
5. App 内如何一键做到（功能路径 + CTA）
6. FAQ（2–4 条，使用 FAQPage Schema）

### 4.6 App 页 `/app/`
**页面目标：** 给"想了解的人"一个完整介绍页（信任建设）。
- 核心能力详解 + 截图
- 耳鸣缓解功能专区
- 隐私说明（录音/权限/处理方式）
- 常见问题
- CTA

### 4.7 耳鸣缓解专页 `/tinnitus-relief/`
**页面目标：** 承接"耳鸣缓解""tinnitus relief"搜索流量，建立专业信任。
- 科学背景（引用 Mayo Clinic 等权威来源）
- 声音遮蔽疗法原理
- 推荐音景资源（3-5 个内链）
- App 内耳鸣缓解功能路径
- FAQ（使用 FAQPage Schema）

### 4.8 鼾声检测专页 `/snore-detection/`
**页面目标：** 承接鼾声检测相关搜索流量。
- 功能原理说明
- 使用步骤（HowTo Schema）
- App 功能截图
- FAQ + CTA

---

## 5. 视觉系统（Visual System）

### 5.1 品牌与 Logo 使用
- **核心视觉：** 深色背景 + 紫色渐变点缀 + 白色猫 Logo
- Header 左上角固定 60px Logo（`logo-60.png`）
- Hero 区域展示 1024 Logo（`logo-1024.png`）
- **禁止：** 星星/月亮/额外符号、白边框、复杂装饰

### 5.2 UI 规范
- 背景色：`#0a0e1a`（深色主题）
- 主色渐变：`#9899f1 → #6768dc`
- CTA 按钮：`#3b82f6`（hover `#2563eb`）
- 文字主色：`#ffffff`，辅助色：`#8b95b0`
- 卡片背景：`#141929`，边框：`#1e2540`
- 卡片圆角：12px
- 按钮圆角：24px
- 字体：系统字体栈 `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- 动效：仅 hover 轻微浮动/阴影，不做粒子与花哨动画
- 移动端：底部浮动下载条（Logo + Download 按钮）

### 5.3 图片规范
- 格式优先级：WebP > PNG（封面图、截图均使用 WebP）
- OG 封面图：1200x630px
- 资源封面：400x400px
- 所有 `<img>` 必须有 `alt` 文本、`width`、`height` 属性（避免 CLS）
- 使用 `loading="lazy"` 延迟加载非首屏图片

---

## 6. SEO 基础设施

### 6.1 robots.txt
```txt
User-agent: *
Allow: /

Sitemap: https://sleepisland.org/sitemap.xml
```

### 6.2 每页必备 meta
> 每页替换：title / description / canonical / og / hreflang
```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

<title>睡眠岛 - 自然助眠声音与入睡自动停止 | Sleep Island</title>
<meta name="description" content="..." />

<link rel="canonical" href="https://sleepisland.org/" />
<link rel="alternate" hreflang="zh-Hans" href="https://sleepisland.org/" />
<link rel="alternate" hreflang="en" href="https://sleepisland.org/en/" />
<link rel="alternate" hreflang="x-default" href="https://sleepisland.org/" />
<link rel="icon" href="/assets/favicon.ico" />

<!-- iOS Smart App Banner -->
<meta name="apple-itunes-app" content="app-id=6747609991" />

<meta property="og:title" content="睡眠岛 Sleep Island" />
<meta property="og:description" content="自然声音助眠 · 耳鸣缓解 · 入睡自动停止 · 睡眠记录反馈" />
<meta property="og:image" content="https://sleepisland.org/assets/og-cover.png" />
<meta property="og:url" content="https://sleepisland.org/" />
<meta property="og:locale" content="zh_CN" />
<meta property="og:locale:alternate" content="en_US" />
<meta name="twitter:card" content="summary_large_image" />
```

### 6.3 hreflang 规则（每对页面必须互指）
```html
<!-- 中文页 -->
<link rel="alternate" hreflang="zh-Hans" href="https://sleepisland.org/resources/rain-fireplace/" />
<link rel="alternate" hreflang="en" href="https://sleepisland.org/en/resources/rain-fireplace/" />
<link rel="alternate" hreflang="x-default" href="https://sleepisland.org/resources/rain-fireplace/" />

<!-- 英文页 -->
<link rel="alternate" hreflang="zh-Hans" href="https://sleepisland.org/resources/rain-fireplace/" />
<link rel="alternate" hreflang="en" href="https://sleepisland.org/en/resources/rain-fireplace/" />
<link rel="alternate" hreflang="x-default" href="https://sleepisland.org/resources/rain-fireplace/" />
```

### 6.4 Sitemap 策略
由 `@astrojs/sitemap` 自动生成，包含 hreflang 标注。如需手动维护，分拆为：
- `/sitemap-index.xml`（索引）
- `/sitemap-pages.xml`（固定页面，含 `<lastmod>`）
- `/sitemap-resources.xml`（资源页）
- `/sitemap-guides.xml`（指南页）

所有 `<url>` 必须包含 `<lastmod>` 字段。

---

## 7. Schema 标记（JSON-LD）

### 7.1 首页：WebSite + Organization
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "睡眠岛 Sleep Island",
  "url": "https://sleepisland.org/",
  "inLanguage": ["zh-Hans", "en"]
}
```
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "睡眠岛 Sleep Island",
  "url": "https://sleepisland.org/",
  "logo": "https://sleepisland.org/assets/logo-1024.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@sleepisland.org",
    "contactType": "customer service"
  }
}
```

> **注意：** 移除 SearchAction（静态站无搜索功能，声明会产生误导）。

### 7.2 App 页：MobileApplication
```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "睡眠岛 Sleep Island",
  "operatingSystem": "iOS",
  "applicationCategory": "HealthApplication",
  "url": "https://sleepisland.org/app/",
  "downloadUrl": "https://apps.apple.com/app/id6747609991",
  "inLanguage": ["zh-Hans", "en"],
  "description": "自然声音助眠、耳鸣缓解、入睡自动停止、鼾声与睡眠记录反馈的睡眠 App。",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

### 7.3 资源单页：AudioObject + BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "AudioObject",
  "name": "雨声 + 壁炉 / Rain & Fireplace",
  "description": "温暖氛围雨声与壁炉火声混合。网页提供短试听，App 提供完整版与入睡自动停止。",
  "contentUrl": "https://sleepisland.org/assets/audio/rain-fireplace-preview.mp3",
  "duration": "PT2M",
  "inLanguage": ["zh-Hans", "en"],
  "encodingFormat": "audio/mpeg"
}
```
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sleepisland.org/" },
    { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://sleepisland.org/resources/" },
    { "@type": "ListItem", "position": 3, "name": "Rain & Fireplace", "item": "https://sleepisland.org/resources/rain-fireplace/" }
  ]
}
```

### 7.4 指南单页：Article + FAQPage
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "如何用白噪音更快入睡",
  "description": "三步法选择白噪音类型、音量与时长，并推荐可试听音景资源。",
  "inLanguage": "zh-Hans",
  "mainEntityOfPage": "https://sleepisland.org/guides/white-noise-sleep/",
  "publisher": {
    "@type": "Organization",
    "name": "睡眠岛 Sleep Island",
    "url": "https://sleepisland.org/"
  },
  "datePublished": "2026-02-19",
  "dateModified": "2026-02-19"
}
```
FAQ 部分额外加 FAQPage Schema（可被 Google 展示为富摘要）。

### 7.5 耳鸣/鼾声专页：MedicalWebPage（可选）
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "耳鸣缓解：声音遮蔽疗法指南",
  "about": { "@type": "MedicalCondition", "name": "Tinnitus" },
  "lastReviewed": "2026-02-19"
}
```

---

## 8. 对大模型友好（LLM-friendly）规范

### 8.1 llms.txt（根目录，纯文本）
```
# Sleep Island 睡眠岛

> Sleep Island is a sound-driven sleep app: natural soundscapes, auto-stop on sleep onset, snore detection, and tinnitus relief. This website provides free sound previews; full versions are available in the iOS app.

## Key Pages
- Homepage: https://sleepisland.org/
- App Info: https://sleepisland.org/app/
- Sound Resources: https://sleepisland.org/resources/
- Sleep Guides: https://sleepisland.org/guides/
- Tinnitus Relief: https://sleepisland.org/tinnitus-relief/
- Snore Detection: https://sleepisland.org/snore-detection/

## App Download
- iOS App Store: https://apps.apple.com/app/id6747609991

## Contact
- Email: contact@sleepisland.org
```

`llms-full.txt` 包含所有资源和指南的完整摘要，供大模型深度抓取。

### 8.2 每页固定 Summary 摘要块（`<dl>` 格式，强制）
放在 `<h1>` 后，字段名固定，便于模型结构化抽取：

**资源页示例：**
```html
<dl class="summary" role="contentinfo" aria-label="Page summary">
  <dt>Type</dt><dd>Sound Preview (Web) + Full Version (App)</dd>
  <dt>Topic</dt><dd>Rain + Fireplace / 雨声 + 壁炉</dd>
  <dt>Use Cases</dt><dd>Sleep onset, relaxation, reading / 入睡、放松、阅读</dd>
  <dt>Preview Duration</dt><dd>2 minutes</dd>
  <dt>App</dt><dd>Sleep Island (iOS)</dd>
  <dt>Download</dt><dd><a href="https://apps.apple.com/app/id6747609991">App Store</a></dd>
</dl>
```

**指南页示例：**
```html
<dl class="summary" role="contentinfo" aria-label="Page summary">
  <dt>Type</dt><dd>Guide / 指南</dd>
  <dt>Topic</dt><dd>White Noise for Sleep / 白噪音助眠</dd>
  <dt>Key Advice</dt><dd>Choose pink noise at 40-50dB with a sleep timer / 选择粉噪音，40-50分贝，设定睡眠定时器</dd>
  <dt>Related Sounds</dt><dd>3 recommended resources with web preview</dd>
  <dt>App</dt><dd>Sleep Island (iOS)</dd>
</dl>
```

### 8.3 语义 HTML5 标签规范（强制）
每页必须使用：
- `<main>` 包裹页面主体内容（每页仅一个）
- `<article>` 包裹独立内容单元（资源、指南）
- `<nav>` 包裹导航（主导航、面包屑、相关推荐）
- `<section>` 分隔逻辑段落，每个 `<section>` 必须有 `<h2>` 标题
- `<aside>` 用于 CTA 模块、侧边推荐
- `<header>` 和 `<footer>` 用于页头页脚

### 8.4 语义层级稳定
- 每页只用一个 `<h1>`
- `<h2>` 标题固定关键词：Preview / Use Cases / Settings / Related / FAQ / Download
- 双语内容紧邻排列，不跳跃

### 8.5 实体一致性（重要）
- 品牌全站统一写法：`睡眠岛 Sleep Island`
- App Store 链接统一：`https://apps.apple.com/app/id6747609991`
- 联系邮箱统一：`contact@sleepisland.org`

---

## 9. App 推广增强

### 9.1 iOS Smart App Banner（每页自动显示）
```html
<meta name="apple-itunes-app" content="app-id=6747609991" />
```
Safari 会在页面顶部自动显示 App 安装/打开横幅，比自定义浮动条更原生、更可信。

### 9.2 Apple Universal Links
在 `/public/.well-known/apple-app-site-association` 配置：
```json
{
  "applinks": {
    "apps": [],
    "details": [{
      "appID": "TEAM_ID.com.sleepisland.app",
      "paths": ["/resources/*", "/guides/*"]
    }]
  }
}
```
> 替换 `TEAM_ID` 为实际的 Apple Team ID。配置后，已安装 App 的用户点击网页链接可直接跳转到 App 对应内容。

### 9.3 CTA 规则（强制）
每页必须包含：
- 首屏 CTA（Hero 区域或 Header 内）
- 中部 CTA（内容中间穿插）
- 底部 CTA（页面结尾强收口）
- 移动端底部浮动下载条

---

## 10. 性能优化

- 图片使用 WebP 格式，`<img>` 带 `width` + `height` + `loading="lazy"`
- 音频文件使用 MP3 格式，预览文件控制在 1-3 分钟（文件大小 < 3MB）
- Tailwind CSS 生产环境自动 tree-shake，仅保留使用到的类
- Astro 默认输出零 JS（除非显式添加客户端交互组件）
- 音频播放器使用原生 `<audio>` 标签 + 少量 JS，不引入重型库
- `<link rel="preload">` 预加载首屏关键资源（Logo、Hero 图片）

---

## 11. 无障碍（Accessibility）

- 所有 `<img>` 必须有有意义的 `alt` 文本
- 音频播放器支持键盘操作（Tab / Enter / Space）
- 交互按钮使用 `<button>` 标签（非 `<div>`），带 `aria-label`
- 颜色对比度满足 WCAG AA（白色文字在深色背景上对比度 > 4.5:1）
- 语言切换链接使用 `hreflang` 属性

---

## 12. Analytics 与转化追踪

- 接入 Cloudflare Web Analytics（无 cookie、隐私友好）或 Google Analytics 4
- 定义关键事件：
  - `cta_click`：App Store 下载按钮点击
  - `audio_play`：Web 试听播放
  - `audio_complete`：试听播放完毕
  - `language_switch`：语言切换
- 每月复盘：哪些资源/指南页带来最多下载转化

---

## 13. 内容规划（资源 + 指南 + 耳鸣）

### 13.1 资源分类（Resource Categories）
| 分类 | 中文 | 示例资源 |
|------|------|----------|
| Rain | 雨声 | 雨声+壁炉、春雨、雷雨 |
| Ocean | 海洋 | 深海漂流、海浪、溪流 |
| Fireplace | 壁炉 | 壁炉火声、篝火 |
| White Noise | 白噪音 | 纯白噪音、粉噪音、棕噪音 |
| Tinnitus Relief | 耳鸣缓解 | 耳鸣遮蔽音、宽带噪音、缺口噪音 |
| Wind & Nature | 风与自然 | 山风、森林、虫鸣 |

### 13.2 指南主题（Guide Topics）
**睡眠类：**
- 如何用白噪音更快入睡
- 最佳睡前音景组合
- 入睡自动停止：为什么重要

**耳鸣类（重点补充）：**
- 声音遮蔽疗法：耳鸣缓解入门指南
- 耳鸣患者的睡眠策略
- 如何选择适合你的耳鸣缓解声音

**鼾声类：**
- 如何用手机检测鼾声
- 鼾声等级与健康风险

### 13.3 内链规则
- 每个资源页至少链接 6 个相关资源
- 每篇指南至少链接 3 个推荐资源
- 耳鸣/鼾声专页链接到相关资源和指南
- 首页精选卡片覆盖所有分类

---

## 14. 扩展规则（批量加内容不乱）

新增一个资源（Sound）：
1. 在 `src/content/resources/zh/` 和 `en/` 各新建一个 `.md` 文件
2. 填写 frontmatter（标题、分类、场景、时长、封面路径）
3. 放 `public/assets/audio/{slug}-preview.mp3`
4. Astro 自动生成页面和 sitemap 条目

新增一篇指南（Guide）：
1. 在 `src/content/guides/zh/` 和 `en/` 各新建一个 `.md` 文件
2. 填写 frontmatter（标题、主题、推荐资源 slugs）
3. Astro 自动生成页面和 sitemap 条目

> Astro Content Collections 让新增内容只需写 Markdown，无需手动维护 HTML 和 sitemap。

---

## 15. MVP 上线清单

**第一阶段：**
- [ ] Astro 项目初始化 + Tailwind 配置 + Cloudflare Pages 部署
- [ ] BaseLayout / Header / Footer / CTABanner 组件
- [ ] 首页（含 9 个资源卡片 + 耳鸣专区入口）
- [ ] Resources 列表页 + 12 个资源单页（含 AudioPlayer + Schema）
- [ ] App / Privacy / Terms 页面
- [ ] FAQ / Tinnitus Relief / Snore Detection 页面
- [ ] robots.txt + llms.txt + sitemap 接通
- [ ] Smart App Banner + hreflang 全部就绪

**第二阶段：**
- [ ] Guides 列表页 + 6-8 篇指南（含耳鸣类 3 篇）
- [ ] 每篇指南绑定 3 个推荐资源
- [ ] llms-full.txt 生成（含所有资源和指南摘要）
- [ ] Cloudflare Web Analytics 接入
- [ ] Apple Universal Links 配置

---

## 16. 常见坑（避免）
- 首页写太长：用户看不完就走（首页只负责转化）
- 资源不让试听：没有"有用感"（必须能听）
- CTA 不统一：每页必须首屏 + 中部 + 底部三处 CTA
- 乱用"AI"词：没有证据就别堆，保持克制更可信
- 没有内链：资源页/指南页必须互相推荐，形成网状结构
- 同页双语混排：损害 SEO，必须用独立 URL + hreflang
- 忽略耳鸣场景：这是高价值长尾词，必须作为独立内容线
- 图片无 alt / 无尺寸：损害无障碍和 Core Web Vitals
- 音频文件过大：预览控制在 3MB 以内

---

**结束。**
v1.2 变更：双语策略改独立 URL、技术栈升级 Astro + Tailwind + Cloudflare Pages、新增 llms.txt 规范、补充耳鸣内容线、增加性能/无障碍/Analytics 规范、Schema 修正。

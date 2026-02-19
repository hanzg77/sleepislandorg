# SleepIsland.org 静态官网设计方案 v1.1（可落地）
**Date:** 2026-02-19  
**Goal:** App 下载转化（Primary） + 有用资源沉淀与 SEO（Secondary）  
**Languages:** 中文 + English（同页双语）

---

## 1. 战略定位

### 1.1 网站角色（不要跑偏）
- 不是博客（不堆长文）
- 不是资讯站（不做泛内容）
- 不是纯播放站（不做“听歌网站”）

**正确定位：**  
> “可体验资源（Web 试听） + 强关联 App 能力（完整版/离线/收藏/入睡自动停止）”的轻型产品站。

### 1.2 双目标模型
- **Primary:** 📱 让用户下载 iOS App（每页首屏必须有 CTA）
- **Secondary:** 📚 通过「可播放资源 + 结构化指南」吃搜索长尾，形成流量 → 试听 → 下载闭环

---

## 2. 信息架构（IA）

```
/
├── /                        首页（转化页）
├── /resources/              资源中心（列表 + 分类）
├── /resources/{slug}.html   资源单页（试听 + 强 CTA）
├── /guides/                 指南中心（列表）
├── /guides/{topic}.html     指南单页（结构化 + 推荐资源 + CTA）
├── /app.html                App 介绍页（信任与转化）
├── /privacy.html            隐私政策
├── /terms.html              使用条款
├── /robots.txt              爬虫规则
├── /sitemap.xml             站点地图索引
├── /sitemap-pages.xml       固定页 sitemap
├── /sitemap-resources.xml   资源页 sitemap
└── /sitemap-guides.xml      指南页 sitemap
```

---

## 3. 目录结构（静态站可直接部署）

```
/
├─ index.html
├─ app.html
├─ resources/
│  ├─ index.html
│  ├─ rain-fireplace.html
│  ├─ deep-ocean-drift.html
│  └─ ...
├─ guides/
│  ├─ index.html
│  ├─ white-noise-sleep.html
│  └─ ...
├─ privacy.html
├─ terms.html
├─ robots.txt
├─ sitemap.xml
├─ sitemap-pages.xml
├─ sitemap-resources.xml
├─ sitemap-guides.xml
├─ assets/
│  ├─ logo-1024.png
│  ├─ logo-60.png
│  ├─ screenshot-1.png
│  ├─ og-cover.png
│  ├─ audio/
│  │  ├─ rain-fireplace-preview.mp3
│  │  └─ ...
│  └─ favicon.ico
├─ css/
│  └─ style.css
└─ js/
   └─ main.js
```

---

## 4. 页面设计（Conversion First）

### 4.1 首页 `/index.html`
**页面目标：** 最大化下载转化，同时展示“这里确实有资源”。

**模块结构：**
1. Sticky Header（Logo + 导航 + Download 按钮）
2. Hero（Logo/截图 + 一句话价值主张 + CTA）
3. 三个核心能力（短句，不写长文）
4. 精选资源（9 张卡片：Web Preview + Play in App）
5. FAQ（只放与转化有关的）
6. Bottom CTA（强收口）
7. Footer（隐私/条款/联系）

**Hero 双语文案建议：**
- H1：睡眠岛 Sleep Island  
- H2：戴上耳机，什么都不用做。  
- EN：Put on your headphones. Do nothing else.  
- Sub：自然音景 · 入睡自动停止 · 睡眠记录反馈  
- CTA：Download on the App Store（高亮） / Explore Sounds（次按钮）

### 4.2 资源中心 `/resources/index.html`
**页面目标：** 承接 SEO/社媒流量 → 让用户立刻试听 → 引导下载。

**模块结构：**
- 页面标题 + 简短说明（双语）
- 分类 Tabs：Rain / Fireplace / Ocean / White Noise / Masking / Wind
- 资源列表（卡片栅格）

**卡片必须含：**
- 封面（方形）
- 标题（中/英）
- 适用场景（1 行）
- 时长（Web 试听时长）
- 按钮：`▶ Web Preview` + `📱 Full Version in App`

### 4.3 资源单页 `/resources/{slug}.html`
**页面目标：** 播放器抓住用户 → 强 CTA 转化。

**页面必须含：**
- H1（关键词标题，双语）
- Summary / 摘要块（LLM-friendly，固定字段）
- Web 试听播放器（1–3 分钟）
- 适用场景（3 条 bullet）
- 推荐设置（音量/耳机/入睡自动停止）
- “Full version in App” CTA 模块（强收口）
- 相关推荐（至少 6 条内链）

### 4.4 指南中心 `/guides/index.html`
**页面目标：** SEO 承接入口（列表页）。
- 主题列表（结构化标题 + 20 字摘要）
- 每条直接链接到 guide 单页
- 页面首屏 CTA 保留

### 4.5 指南单页 `/guides/{topic}.html`
**页面目标：** 吃长尾词 + 提供可执行步骤 + 带用户进入资源试听与 App 下载。

**固定模板：**
1. Summary / 摘要块（固定字段）
2. 问题定义（<= 150 字）
3. 3 步解决方案（可执行）
4. 推荐音景（3 个资源卡片：内链到 resources）
5. App 内如何一键做到（功能路径 + CTA）
6. FAQ（2–4 条）

### 4.6 App 页 `/app.html`
**页面目标：** 给“想了解的人”一个完整介绍页（信任建设）。
- 核心能力详解 + 截图
- 隐私说明（录音/权限/处理方式）
- 常见问题
- CTA

---

## 5. 视觉系统（Visual System）

### 5.1 品牌与 Logo 使用
- **核心视觉：** 紫色渐变背景 + 白色猫 Logo
- 网站左上角固定 60px Logo（`logo-60.png`）
- Hero 区域展示 1024 Logo（`logo-1024.png`）
- **禁止：** 星星/月亮/额外符号、白边框、复杂装饰

### 5.2 UI 规范
- 主色渐变：`#9899f1 → #6768dc`
- 卡片圆角：12px
- 按钮圆角：24px
- 动效：仅 hover 轻微浮动/阴影，不做粒子与花哨动画
- 移动端：底部浮动下载条（Logo + Download 按钮）

---

## 6. SEO 基础设施（Sitemap + Robots）

### 6.1 robots.txt（根目录）
```txt
User-agent: *
Allow: /

Sitemap: https://sleepisland.org/sitemap.xml
```

### 6.2 sitemap 分拆策略
- `/sitemap.xml`（索引）
- `/sitemap-pages.xml`（固定页面）
- `/sitemap-resources.xml`（资源）
- `/sitemap-guides.xml`（指南）

### 6.3 /sitemap.xml（索引）
```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://sleepisland.org/sitemap-pages.xml</loc></sitemap>
  <sitemap><loc>https://sleepisland.org/sitemap-resources.xml</loc></sitemap>
  <sitemap><loc>https://sleepisland.org/sitemap-guides.xml</loc></sitemap>
</sitemapindex>
```

### 6.4 /sitemap-pages.xml（固定页）
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://sleepisland.org/</loc></url>
  <url><loc>https://sleepisland.org/app.html</loc></url>
  <url><loc>https://sleepisland.org/resources/</loc></url>
  <url><loc>https://sleepisland.org/guides/</loc></url>
  <url><loc>https://sleepisland.org/privacy.html</loc></url>
  <url><loc>https://sleepisland.org/terms.html</loc></url>
</urlset>
```

### 6.5 /sitemap-resources.xml（资源页示例）
> 每新增一个资源：加一条 `<url>`，并更新 `lastmod`。
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sleepisland.org/resources/rain-fireplace.html</loc>
    <lastmod>2026-02-19</lastmod>
  </url>
  <url>
    <loc>https://sleepisland.org/resources/deep-ocean-drift.html</loc>
    <lastmod>2026-02-19</lastmod>
  </url>
</urlset>
```

### 6.6 /sitemap-guides.xml（指南页示例）
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sleepisland.org/guides/white-noise-sleep.html</loc>
    <lastmod>2026-02-19</lastmod>
  </url>
</urlset>
```

---

## 7. Schema 标记（JSON-LD，静态内嵌）

### 7.1 通用 Head（每页必备 meta）
> 每页改：title / description / canonical
```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />

<title>睡眠岛 Sleep Island - 自然助眠声音与入睡自动停止</title>
<meta name="description" content="睡眠岛是一款声音驱动的睡眠 App：自然音景、入睡自动停止、鼾声与睡眠记录反馈。网页提供免费试听资源，完整版在 App 内。" />

<link rel="canonical" href="https://sleepisland.org/" />
<link rel="icon" href="/assets/favicon.ico" />

<meta property="og:title" content="睡眠岛 Sleep Island" />
<meta property="og:description" content="自然声音助眠 · 入睡自动停止 · 睡眠记录反馈" />
<meta property="og:image" content="https://sleepisland.org/assets/og-cover.png" />
<meta property="og:url" content="https://sleepisland.org/" />
<meta name="twitter:card" content="summary_large_image" />

<link rel="stylesheet" href="/css/style.css" />
```

### 7.2 首页：WebSite + Organization
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebSite",
  "name":"睡眠岛 Sleep Island",
  "url":"https://sleepisland.org/",
  "inLanguage":["zh-Hans","en"],
  "potentialAction":{
    "@type":"SearchAction",
    "target":"https://sleepisland.org/resources/?q={search_term_string}",
    "query-input":"required name=search_term_string"
  }
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"睡眠岛 Sleep Island",
  "url":"https://sleepisland.org/",
  "logo":"https://sleepisland.org/assets/logo-1024.png"
}
</script>
```

### 7.3 App 页：MobileApplication
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"MobileApplication",
  "name":"睡眠岛 Sleep Island",
  "operatingSystem":"iOS",
  "applicationCategory":"HealthApplication",
  "url":"https://sleepisland.org/app.html",
  "downloadUrl":"https://apps.apple.com/sg/app/id6747609991",
  "inLanguage":["zh-Hans","en"],
  "description":"自然声音助眠、入睡自动停止、鼾声与睡眠记录反馈的睡眠 App。"
}
</script>
```

### 7.4 资源单页：AudioObject + BreadcrumbList
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"AudioObject",
  "name":"雨声 + 壁炉 / Rain & Fireplace",
  "description":"温暖氛围雨声与壁炉火声混合。网页提供短试听，App 提供完整版与入睡自动停止。",
  "contentUrl":"https://sleepisland.org/assets/audio/rain-fireplace-preview.mp3",
  "duration":"PT2M",
  "inLanguage":["zh-Hans","en"],
  "isPartOf":{
    "@type":"Brand",
    "name":"睡眠岛 Sleep Island",
    "url":"https://sleepisland.org/"
  }
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Resources","item":"https://sleepisland.org/resources/"},
    {"@type":"ListItem","position":2,"name":"Rain & Fireplace","item":"https://sleepisland.org/resources/rain-fireplace.html"}
  ]
}
</script>
```

### 7.5 指南单页：Article（可选 FAQPage）
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Article",
  "headline":"如何用白噪音更快入睡 / How to fall asleep faster with white noise",
  "description":"三步法选择白噪音类型、音量与时长，并推荐可试听音景资源。",
  "inLanguage":["zh-Hans","en"],
  "mainEntityOfPage":"https://sleepisland.org/guides/white-noise-sleep.html",
  "publisher":{
    "@type":"Organization",
    "name":"睡眠岛 Sleep Island",
    "url":"https://sleepisland.org/"
  }
}
</script>
```

---

## 8. 对大模型友好（LLM-friendly）规范

### 8.1 每页固定 Summary / 摘要块（强制）
放在 H1 后，字段名稳定，便于模型抽取：

**资源页示例：**
```html
<section class="summary">
  <h2>Summary / 摘要</h2>
  <ul>
    <li><strong>Type</strong>: Sound Preview (Web) + Full Version (App)</li>
    <li><strong>Topic</strong>: Rain + Fireplace / 雨声 + 壁炉</li>
    <li><strong>Use cases</strong>: Sleep onset, relaxation, reading</li>
    <li><strong>Preview duration</strong>: 2 minutes</li>
    <li><strong>App</strong>: Sleep Island (iOS)</li>
    <li><strong>Download</strong>: <a href="https://apps.apple.com/sg/app/id6747609991">App Store</a></li>
  </ul>
</section>
```

### 8.2 语义层级稳定
- 每页只用一个 H1
- H2 标题固定：Preview/How/Recommended/FAQ/Download
- 双语尽量同行或紧邻段落，不要混乱跳跃

### 8.3 实体一致性（重要）
全站统一写法：`睡眠岛 Sleep Island`（品牌/产品）  
App Store 链接固定、不要出现多个不同链接版本。

---

## 9. 扩展规则（以后批量加内容不乱）

新增一个资源（Sound）只做 4 件事：
1. 放 `assets/audio/{slug}-preview.mp3`（1–3 分钟试听）
2. 新建 `/resources/{slug}.html`（复制资源模板替换字段）
3. 在 `/resources/index.html` 加一张卡片
4. 在 `sitemap-resources.xml` 增一条 `<url>` 并更新 `lastmod`

新增一个指南（Guide）只做 4 件事：
1. 新建 `/guides/{topic}.html`
2. 复制 Guide 模板（Article schema + Summary 块）
3. 插入 3 个推荐资源（内链到 resources）
4. 更新 `sitemap-guides.xml`

---

## 10. MVP 上线清单（最小可用）
**第一阶段（1 周内）：**
- 首页（含 9 个资源卡片）
- resources 列表页
- 12 个资源单页（含 AudioObject schema）
- app/privacy/terms
- robots + sitemap 全部接上

**第二阶段（2 周内）：**
- guides 列表页
- 6–8 篇 guide（Article schema + FAQPage 可选）
- 每篇绑定 3 个资源

---

## 11. 常见坑（避免“蠢”）
- 首页写太长：用户看不完就走（首页只负责转化）
- 资源不让试听：没有“有用感”（必须能听）
- CTA 不统一：每页必须首屏 CTA + 中部 CTA + 底部 CTA
- 乱用“AI”词：没有证据就别堆，保持克制更可信
- 没有内链：资源页/指南页必须互相推荐，形成结构

---

**结束。**  
这份文档是“静态站可直接执行”的设计规范与落地模板（含 sitemap/schema/LLM-friendly 规则）。

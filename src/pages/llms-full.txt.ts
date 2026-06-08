import type { APIRoute } from 'astro';
import { resources } from '../data/resources';
import { guides } from '../data/guides';

export const GET: APIRoute = async () => {
  let output = '';

  // 1. Header
  output += `# Sleep Island 睡眠岛 - Full Catalog & Content\n\n`;
  output += `> Sleep Island is a sound-driven sleep app with natural soundscapes, auto-stop on sleep onset, snore detection, and tinnitus relief. This file contains a complete crawlable text index of all sound resources and guides on Sleep Island.\n\n`;

  // 2. Key Pages
  output += `## Key Pages\n`;
  output += `- Homepage: https://www.sleepisland.org/\n`;
  output += `- App Info: https://www.sleepisland.org/app/\n`;
  output += `- Sound Resources: https://www.sleepisland.org/resources/\n`;
  output += `- Sleep Guides: https://www.sleepisland.org/guides/\n`;
  output += `- Tinnitus Relief: https://www.sleepisland.org/tinnitus-relief/\n`;
  output += `- Snore Detection: https://www.sleepisland.org/snore-detection/\n`;
  output += `- FAQ: https://www.sleepisland.org/faq/\n\n`;

  // 3. App Download
  output += `## App Download\n`;
  output += `- iOS App Store: https://apps.apple.com/app/id6747609991\n\n`;

  // 4. Sound Resources
  output += `## All Sound Resources\n`;
  output += `For each sound resource, web previews are available at their respective URLs. Full versions are in the iOS app.\n\n`;

  for (const [slug, r] of Object.entries(resources)) {
    const title = r.titleEn ? `${r.title} / ${r.titleEn}` : r.title;
    output += `### ${title}\n`;
    output += `- **URL**: https://www.sleepisland.org/resources/${slug}/\n`;
    output += `- **Category**: ${r.category}\n`;
    output += `- **Duration**: ${r.durationLabel || 'N/A'}\n`;
    if (r.desc) {
      output += `- **Description (ZH)**: ${r.desc}\n`;
    }
    if (r.descEn) {
      output += `- **Description (EN)**: ${r.descEn}\n`;
    }
    if (r.scenes && r.scenes.length > 0) {
      output += `- **Scenes**: ${r.scenes.join(', ')}\n`;
    }
    output += `\n`;
  }

  // 5. Guides
  output += `## All Guides\n`;
  output += `These practical guides provide steps, recommended sounds, and FAQs.\n\n`;

  for (const [slug, g] of Object.entries(guides)) {
    const title = g.titleEn ? `${g.title} / ${g.titleEn}` : g.title;
    output += `### ${g.topic ? `[${g.topic}] ` : ''}${title}\n`;
    output += `- **URL**: https://www.sleepisland.org/guides/${slug}/\n`;
    output += `- **Summary**: ${g.summary || 'N/A'}\n`;
    if (g.problem) {
      output += `- **Problem**: ${g.problem}\n`;
    }

    if (g.steps && g.steps.length > 0) {
      output += `- **Steps**:\n`;
      g.steps.forEach((step: any, idx: number) => {
        output += `  ${idx + 1}. **${step.title}**: ${step.desc}\n`;
      });
    }

    if (g.resources && g.resources.length > 0) {
      output += `- **Recommended Sounds**:\n`;
      g.resources.forEach((res: any) => {
        const resTitle = res.titleEn ? `${res.title} / ${res.titleEn}` : res.title;
        output += `  - [${resTitle}](https://www.sleepisland.org/resources/${res.slug}/) (Category: ${res.category || 'N/A'}, Scenario: ${res.scene || 'N/A'})\n`;
      });
    }

    if (g.faqs && g.faqs.length > 0) {
      output += `- **FAQs**:\n`;
      g.faqs.forEach((faq: any) => {
        output += `  - **Q**: ${faq.q}\n`;
        output += `    **A**: ${faq.a}\n`;
      });
    }
    output += `\n`;
  }

  return new Response(output, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

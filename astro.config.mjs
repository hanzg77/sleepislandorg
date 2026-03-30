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
        locales: { zh: 'zh-Hans', en: 'en', 'zh-Hant': 'zh-Hant', ja: 'ja', ko: 'ko', es: 'es', fr: 'fr', de: 'de', pt: 'pt', ru: 'ru', ar: 'ar', hi: 'hi', vi: 'vi', th: 'th', id: 'id' }
      }
    })
  ]
});

// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import compressor from 'astro-compressor';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://stolarek.dev',
  integrations: [
    // robotsTxt(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          pl: 'pl',
          uk: 'uk',
        },
      },
    }),
    compressor(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en', 'pl', 'uk'],
    defaultLocale: 'en',
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Geist',
        weights: ['100 900'],
        styles: ['normal'],
        subsets: ['latin-ext'],
        fallbacks: ['sans-serif'],
        cssVariable: '--font-geist',
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Geist Mono',
        weights: [400],
        styles: ['normal'],
        subsets: ['latin-ext'],
        fallbacks: ['monospace'],
        cssVariable: '--font-geist-mono',
      },
    ],
  },
});

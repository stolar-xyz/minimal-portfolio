// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
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

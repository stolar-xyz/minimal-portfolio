// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  prefetch: true,
  compressHTML: false,
  site: 'https://stolarek.dev',
  i18n: {
    locales: ['en', 'pl', 'uk'],
    defaultLocale: 'en',
  },
  integrations: [
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
    compress({
      CSS: false,
      JavaScript: false,
      HTML: {
        'html-minifier-terser': {
          minifyJS: {
            mangle: {
              toplevel: true,
            },
          },
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
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

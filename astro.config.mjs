// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: 'local',
        name: 'Geist Mono',
        fallbacks: ['monospace'],
        optimizedFallbacks: false,
        cssVariable: '--font-geist-mono',
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/GeistMono-Regular.woff2'],
          },
        ],
      },
    ],
  },
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        drafts: {
          customMedia: true,
        },
      },
    },
    build: {
      cssMinify: 'lightningcss',
    },
  },
});

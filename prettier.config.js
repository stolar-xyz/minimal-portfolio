// @ts-check
/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

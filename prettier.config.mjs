/** @type {import('prettier').Config} */
export default {
  singleQuote: true,
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-astro'],
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

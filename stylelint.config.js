// @ts-check
/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-html/astro',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'color-named': 'never',
    'import-notation': 'string',
    'alpha-value-notation': 'number',
    'declaration-no-important': true,
    'order/order': ['custom-properties', 'declarations', 'rules', 'at-rules'],
  },
};

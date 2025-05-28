// @ts-check
/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  rules: {
    'import-notation': 'string',
    'at-rule-no-deprecated': [true, { ignoreAtRules: ['apply'] }],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'theme',
          'layer',
          'utility',
          'variant',
          'custom-variant',
          'reference',
          'source',
          'plugin',
          'config',
        ],
      },
    ],
  },
};

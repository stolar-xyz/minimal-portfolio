// @ts-check
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import importX from 'eslint-plugin-import-x';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import importSort from 'eslint-plugin-simple-import-sort';
import typescript from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  // @ts-expect-error types are not compatible
  typescript.configs.recommended,
  // @ts-expect-error types are not compatible
  importX.flatConfigs.recommended,
  // @ts-expect-error types are not compatible
  importX.flatConfigs.typescript,
  prettierRecommended,
  astro.configs.recommended,
  astro.configs['jsx-a11y-strict'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: typescript.parser,
      },
    },
  },
  {
    plugins: {
      'import-sort': importSort,
    },
    settings: {
      'import-x/core-modules': ['astro:assets'],
    },
    rules: {
      'import-x/no-named-as-default-member': 'off',
      'import-x/newline-after-import': ['error', { count: 1 }],
      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import-sort/exports': 'error',
      'import-sort/imports': [
        'error',
        {
          groups: [['^node', '^astro', '^@?\\w', '^@/', '^\\.', '\\u0000']],
        },
      ],
    },
  },
  includeIgnoreFile(gitignorePath),
]);

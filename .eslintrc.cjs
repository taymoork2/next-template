/** @type {import('eslint').Linter.Config} */
const config = {
  $schema: 'https://json.schemastore.org/eslintrc',
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  reportUnusedDisableDirectives: true,
  settings: {
    next: {
      rootDir: ['./'],
    },
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.js',
    },
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: false,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'eol-last': ['error', 'always'],
    '@next/next/no-html-link-for-pages': 'warn',
    '@next/next/no-img-element': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        checkFilenames: false,
        replacements: {
          // Disable because of @t3-oss/env
          env: {
            environment: false,
          },
        },
      },
    ],
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
};

module.exports = config;

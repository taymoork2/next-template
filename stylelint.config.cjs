/* eslint-disable unicorn/no-null */

module.exports = {
  extends: [
    'stylelint-config-css-modules',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
  ],
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
};

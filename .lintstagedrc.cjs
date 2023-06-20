const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,ts,tsx,json}': [buildEslintCommand, 'prettier --ignore-unknown --write'],
  '*.{css,scss}': 'stylelint --allow-empty-input src/**/*.{css,scss}',
  '**/*': 'prettier --ignore-unknown --write',
};

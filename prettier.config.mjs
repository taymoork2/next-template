/** @typedef  {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig*/
/** @typedef  {import('prettier').Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
	endOfLine: 'lf',
	useTabs: true,
	tabWidth: 2,
	printWidth: 100,
	singleQuote: true,
	plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
	importOrder: [
		'^types$',
		'',
		'^(react/(.*)$)|^(react$)',
		'^(next/(.*)$)|^(next$)',
		'<THIRD_PARTY_MODULES>',
		'',
		'^@/types/(.*)$',
		'^@/config/(.*)$',
		'^@/lib/(.*)$',
		'^@/hooks/(.*)$',
		'',
		'^@/components/ui/(.*)$',
		'^@/components/(.*)$',
		'^@/app/(.*)$',
		'',
		'^@/styles/(.*)$',
		'',
		'^[./]',
	],
	importOrderParserPlugins: ['typescript', 'jsx'],
};

export default config;

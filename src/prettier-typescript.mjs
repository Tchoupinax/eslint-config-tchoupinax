const prettierTypescript = {
	plugins: ["@trivago/prettier-plugin-sort-imports", "@ianvs/prettier-plugin-sort-imports"],

	arrowParens: "avoid",
	bracketSpacing: true,

	//importOrder: ["^[./]"],
	//importOrderCaseInsensitive: true,
	//importOrderParserPlugins: ["typescript"],
	//importOrderSeparation: true,
	//importOrderSortSpecifiers: true,

	parser: "typescript",
	printWidth: 100,
	quoteProps: "consistent",

	bracketSameLine: false,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
};

export { prettierTypescript };

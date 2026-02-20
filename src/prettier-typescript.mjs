// Formatting only; import sorting is handled by ESLint (simple-import-sort).
const prettierTypescript = {
	arrowParens: "avoid",
	bracketSpacing: true,
	bracketSameLine: false,

	parser: "typescript",
	printWidth: 100,
	quoteProps: "consistent",
	
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
};

export { prettierTypescript };

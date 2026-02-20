import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import eslintPluginPrettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const eslintTypescript = defineConfig(
	{
		ignores: [
			"**/node_modules/**",
			"**/build/**",
			"**/examples/**",
			"**/tests/**",
			"**/scripts/**",
			"**/eslint.config.mjs",
		],
	},
	...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
	{
		files: ["**/*.ts", "**/*.mts"],
		extends: [tseslint.configs.recommendedTypeChecked],
		languageOptions: {
			parserOptions: {
				// This is a modern feature that start a typescript server to analyze the code and eslint discusses with this server
				// It improves a lot the efficiency of the lint analysis but it can be very long if the file is complex
				// to parse by typescript.
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			"prettier": eslintPluginPrettier,
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			// Prettier handles formatting
			"prettier/prettier": "error",
			// ESLint handles import sorting
			// https://github.com/lydell/eslint-plugin-simple-import-sort
			"simple-import-sort/imports": [
				"error",
				{
					"groups": [["^node", "^@?\\w"], ["^#.*"], ["^[^@]?\\w"]],
				},
			],
			"simple-import-sort/exports": "error",
		},
	},
	// Disable ESLint formatting rules so Prettier wins (must be last)
	eslintConfigPrettier,
	{
		files: ["**/*.json"],
		ignores: ["package.json"],
		rules: {
			"jsonc/sort-keys": ["error"],
		},
	},
);

export { eslintTypescript };

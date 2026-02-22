import stylistic from "@stylistic/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

import { defineConfig } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

const config = {
  plugins: {
    "simple-import-sort": simpleImportSort,
    "@stylistic": stylistic,
  },
  rules: {
    // ESLint handles import sorting
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^node", "^@?\\w"], ["^#.*"], ["^[^@]?\\w"]],
      },
    ],
    "@stylistic/arrow-parens": ["error", "as-needed", { requireForBlockBody: false }],
    "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "@stylistic/comma-dangle": "error",
    "@stylistic/comma-style": "error",
    "@stylistic/operator-linebreak": ["error", "after", { overrides: { "+=": "before", "|": "before", "?": "before", ":": "before" } }],
    "@stylistic/quote-props": ["error", "as-needed"],
    curly: ["error", "all"],
  },
};

const eslintTypescript = defineConfig(
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
  }),
  {
    ignores: [
      "**/node_modules/**",
      "**/build/**",
      "**/dist/**",
      "**/examples/**",
      // Exclude generated files
      "**/*.generated.ts",
    ],
  },
  {
    files: ["**/*.ts", "**/*.mts"],
    extends: [tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
        // This is a modern feature that start a typescript server to analyze the code and eslint discusses with this server
        // It improves a lot the efficiency of the lint analysis but it can be very long if the file is complex
        // to parse by typescript.
        projectService: true,
      },
    },
    ...config,
  },
  {
    files: ["**/*.js", "**/*.mjs"],
    ...config,
  },
);

export { eslintTypescript };

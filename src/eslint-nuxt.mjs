import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import stylistic from "@stylistic/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

import simpleImportSort from "eslint-plugin-simple-import-sort";

const NUXT_CONFIG_NAMES = [
  "nuxt.config.ts",
  "nuxt.config.js",
  "nuxt.config.mjs",
  "nuxt.config.cjs",
];

const eslintNuxt = await (async () => {
  const cwd = process.cwd();
  if (!isNuxtProject(cwd)) {
    return [];
  }

  const nuxtEslintPath = join(cwd, ".nuxt", "eslint.config.mjs");
  if (!existsSync(nuxtEslintPath)) {
    throw new Error(
      `Nuxt ESLint config not found at ${nuxtEslintPath}. Run \`nuxt prepare\` or start the dev server in your Nuxt project to generate it.`,
    );
  }

  const { default: withNuxt } = await import(nuxtEslintPath);

  return withNuxt(
    {
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
        "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
        "@typescript-eslint/no-invalid-void-type": "off",
        "vue/html-self-closing": "off",
        curly: ["error", "all"],
        // It's because maybe one day default html component will be called and there are always in one word
        "vue/multi-word-component-names": "off",
      },
    },
    // Parse TypeScript inside Vue SFC <script> blocks (fixes "Unexpected token" errors)
    {
      files: ["**/*.vue"],
      languageOptions: {
        parserOptions: {
          parser: tsParser,
        },
      },
    },
  );
})();

function isNuxtProject(cwd = process.cwd()) {
  for (const name of NUXT_CONFIG_NAMES) {
    if (existsSync(join(cwd, name))) {
      return true;
    };
  }

  try {
    const pkgPath = join(cwd, "package.json");
    if (!existsSync(pkgPath)) {
      return false;
    };

    const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    return typeof deps.nuxt === "string";
  } catch {
    return false;
  }
}

export { eslintNuxt };

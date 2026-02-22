import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

import perfectionist from "eslint-plugin-perfectionist";

const NUXT_CONFIG_NAMES = [
  "nuxt.config.ts",
  "nuxt.config.js",
  "nuxt.config.mjs",
  "nuxt.config.cjs",
];

const eslintNuxt = (async () => {
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
        perfectionist,
      },
      rules: {
        "@typescript-eslint/no-invalid-void-type": "off",
        "perfectionist/sort-imports": "error",
        "vue/html-self-closing": "off",
        // It's because maybe one day default html component will be called and there are always in one word
        "vue/multi-word-component-names": "off",
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

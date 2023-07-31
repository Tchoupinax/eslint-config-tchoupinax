module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:typescript-sort-keys/recommended"],
  ignorePatterns: [
    "dist",
    "node_modules",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "typescript-sort-keys",
    "unused-imports",
  ],
  overrides: [
    {
      files: ["*.ts"],
      rules: { "@typescript-eslint/explicit-function-return-type": "warn" },
    },
  ],
  rules: {
    "arrow-body-style": "off",
    "comma-dangle": ["error", "always-multiline"],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "no-useless-constructor": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "error",
    camelcase: "off",
    indent: ["error", 2, { ignoredNodes: ["PropertyDefinition"] }],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};

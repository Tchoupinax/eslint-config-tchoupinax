# eslint-config-tchoupinax

## Installation

⚠️ `eslint` dependency is necessary when you use vscode extension for ESlint to activate it...

### [ni](https://github.com/antfu-collective/ni)

```bash
ni -D eslint-config-tchoupinax eslint
```

### npm

```bash
npm install -D eslint-config-tchoupinax eslint
```

### yarn

```bash
yarn add -D eslint-config-tchoupinax eslint
```

### pnpm

```bash
pnpm install -D eslint-config-tchoupinax eslint
```

## Eslint

### Import configuration

```ts
// eslint.config.mjs
import { eslintTypescript } from "eslint-config-tchoupinax";

export default eslintTypescript;
```

## Sources

- https://medium.com/@python-javascript-php-html-css/optimizing-typescript-imports-configuring-prettier-and-eslint-for-multi-line-format-ec282b65d64e

# eslint-config-tchoupinax

## Installation

### [ni](https://github.com/antfu-collective/ni)

```bash
ni -D eslint-config-tchoupinax
```

### npm

```bash
npm install -D eslint-config-tchoupinax
```

### yarn

```bash
yarn add -D eslint-config-tchoupinax
```

### pnpm

```bash
pnpm install -D eslint-config-tchoupinax
```

## Eslint

### Import configuration

```ts
// eslint.config.mjs
import { eslintTypescript } from "./index.mjs";

export default eslintTypescript;
```

## Prettier

### Import configuration

```ts
// prettier.config.mjs
import { prettierTypescript } from "./index.mjs";

export default prettierTypescript;
```

### Import ignore file

```json
{
  "scripts": {
    "format": "prettier . --write --ignore-path node_modules/eslint-config-tchoupinax/.prettierignore"
  }
}
```

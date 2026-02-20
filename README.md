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
import { eslintTypescript } from "eslint-config-tchoupinax";

export default eslintTypescript;
```

## Prettier

### Import configuration

```ts
// prettier.config.mjs
import { prettierTypescript } from "eslint-config-tchoupinax";

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

## Sources

- https://medium.com/@python-javascript-php-html-css/optimizing-typescript-imports-configuring-prettier-and-eslint-for-multi-line-format-ec282b65d64e

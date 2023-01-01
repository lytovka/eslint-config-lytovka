# @lytovka/eslint-config

[![npm](https://img.shields.io/npm/v/@lytovka/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@lytovka/eslint-config)

## Installation

This module is distributed via [npm](https://www.npmjs.com/) and should be installed as one of your project's `devDependencies`. You should also have required [`eslint`](https://github.com/eslint/eslint) `peerDependency` installed.

```bash
npm i -D eslint @lytovka/eslint-config
```

## Usage

Then, add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: ["@lytovka"],
  rules: {
    // override rules
  },
}
```

### Other configs

Currently this module exposes a few additional configs:

- `@lytovka/eslint-config/react`: preset for React projects.
- `@lytovka/eslint-config/jsx-a11y`: preset for accessibility issues in React apps.

Feel free to add those configs to the `extend` property:

```js
module.exports = {
  extends: [
    "@lytovka",
    "@lytovka/eslint-config/react",
    "@lytovka/eslint-config/jsx-a11y",
  ],
  rules: {
    // override rules
  },
}
```

import globals from "globals"

/**
 * @param {Object} options options for Import config
 * @param {import("eslint").Linter.RulesRecord | undefined} options.overrides rules overrides
 *
 * @returns { import("eslint").Linter.FlatConfig[] }
 */
export function importing(options = {}) {
  const { overrides = {} } = options;

  console.log("loading importing rules")
  return [
    {
      files: ['**/*.{js,mjs,cjs}'],
      name: "lytovka/import/rules",
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ...globals.browser,
        ...globals.node,
      },
      settings: {
        "import/ignore": ["node_modules"],
      },
      rules: {
        "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
        "import/default": "error",
        "import/dynamic-import-chunkname": "error",
        "import/export": "error",
        "import/exports-last": "off",
        "import/extensions": "off",
        "import/first": "error",
        "import/group-exports": "off",
        "import/max-dependencies": "off",
        "import/named": "error", // turn off for TS
        "import/namespace": "error",
        "import/newline-after-import": "warn",
        "import/no-absolute-path": "error",
        "import/no-amd": "error",
        "import/no-anonymous-default-export": "off",
        "import/no-commonjs": "off",
        "import/no-cycle": "error",
        "import/no-default-export": "off",
        "import/no-deprecated": "warn",
        "import/no-duplicates": "warn",
        "import/no-dynamic-require": "error",
        "import/no-empty-named-blocks": "warn",
        "import/no-extraneous-dependencies": "error",
        "import/no-import-module-exports": "off",
        "import/no-internal-modules": "off",
        "import/no-mutable-exports": "error",
        "import/no-named-as-default-member": "error",
        "import/no-named-as-default": "error",
        "import/no-named-default": "error",
        "import/no-named-export": "off",
        "import/no-namespace": "off",
        "import/no-nodejs-modules": "off",
        "import/no-relative-parent-imports": "off",
        "import/no-restricted-paths": "off",
        "import/no-self-import": "error",
        "import/no-unassigned-import": "off",
        "import/no-unresolved": "error",
        "import/no-unused-modules": "off",
        "import/no-useless-path-segments": "warn",
        "import/no-webpack-loader-syntax": "error",
        "import/order": "off",
        "import/prefer-default-export": "off",
        "import/unambiguous": "off",
        ...overrides
      },
    },
    // not sure tbh
    {
      files: ["**/*.ts?(x)"],
      extends: "plugin:import/typescript",
      parserOptions: {
        sourceType: "module",
      },
      settings: {
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          "typescript": true,
          "node": true,
        },
      },
      rules: {
        "import/no-unresolved": "off",
      },
    },
  ]
}

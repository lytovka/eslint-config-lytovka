import eslintPluginImportX from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'
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
    eslintPluginImportX.flatConfigs.recommended,
    eslintPluginImportX.flatConfigs.typescript,
    {
      name: "lytovka/import/rules",
      files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
      ignores: ['eslint.config.js', 'node_modules/**'],
      languageOptions: {
        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      rules: {
        "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
        "import-x/default": "error",
        "import-x/dynamic-import-chunkname": "off",
        "import-x/export": "error",
        "import-x/exports-last": "off",
        "import-x/extensions": "off",
        "import-x/first": "error",
        "import-x/group-exports": "off",
        "import-x/max-dependencies": "off",
        "import-x/named": "error", // turn off for TS
        "import-x/namespace": "error",
        "import-x/newline-after-import": "warn",
        "import-x/no-absolute-path": "error",
        "import-x/no-amd": "error",
        "import-x/no-anonymous-default-export": "off",
        "import-x/no-commonjs": "off",
        "import-x/no-cycle": "error",
        "import-x/no-default-export": "off",
        "import-x/no-deprecated": "warn",
        "import-x/no-duplicates": "warn",
        "import-x/no-dynamic-require": "error",
        "import-x/no-empty-named-blocks": "warn",
        "import-x/no-extraneous-dependencies": "error",
        "import-x/no-import-module-exports": "off",
        "import-x/no-internal-modules": "off",
        "import-x/no-mutable-exports": "error",
        "import-x/no-named-as-default-member": "error",
        "import-x/no-named-as-default": "error",
        "import-x/no-named-default": "error",
        "import-x/no-named-export": "off",
        "import-x/no-namespace": "off",
        "import-x/no-nodejs-modules": "off",
        "import-x/no-relative-parent-imports": "off",
        "import-x/no-restricted-paths": "off",
        "import-x/no-self-import": "error",
        "import-x/no-unassigned-import": "off",
        "import-x/no-unresolved": "error",
        "import-x/no-unused-modules": "off",
        "import-x/no-useless-path-segments": "warn",
        "import-x/no-webpack-loader-syntax": "error",
        "import-x/order": "off",
        "import-x/prefer-default-export": "off",
        "import-x/unambiguous": "off",
        ...overrides
      },
    },
  ]
}

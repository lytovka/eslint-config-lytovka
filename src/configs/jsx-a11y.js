import globals from "globals"

/**
 * @param {Object} options options for TypeScript config
 * @param {import("eslint").Linter.RulesRecord | undefined} options.overrides rules overrides
 * @param {string | string[] | boolean | undefined} options.tsconfigPath path to `tsconfig.json` file. This enables type-aware linting.
 *
 * @returns { import("eslint").Linter.FlatConfig[] }
 */
export function jsxA11y(options = {}) {
  const { overrides = {} } = options;

  return {
    name: "lytovka/jsx-a11y/rules",
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-ambiguous-text": "off",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-activedescendant-has-tabindex": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/autocomplete-valid": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/control-has-associated-label": "off",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/lang": "error",
      "jsx-a11y/media-has-caption": "error",
      "jsx-a11y/mouse-events-have-key-events": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-interactive-element-to-noninteractive-role": "warn", // not sure I understand what this rule does, but seems useful
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn", // not sure I understand what this rule does, but seems useful
      "jsx-a11y/no-noninteractive-element-interactions": "warn", // not sure I understand what this rule does, but seems useful
      "jsx-a11y/no-noninteractive-tabindex": [
        "error",
        {
          tags: [],
          roles: ["tabpanel"],
          allowExpressionValues: true,
        },
      ],
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/no-static-element-interactions": [
        "warn",
        {
          handlers: [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp",
          ],
          allowExpressionValues: true,
        },
      ],
      "jsx-a11y/prefer-tag-over-role": "error",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "jsx-a11y/scope": "warn",
      "jsx-a11y/tabindex-no-positive": "warn",
      ...overrides,
    },
  }
}

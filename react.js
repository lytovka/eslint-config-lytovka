/** @type {import('@types/eslint').Linter.BaseConfig} */

module.exports = {
  extends: ["plugin:react/jsx-runtime"],
  env: {
    browser: true,
  },
  plugins: ["react", "react-hooks"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Recommended rules: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js
    "react/display-name": "error",
    "react/jsx-key": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": "off", // jsx-runtime plugin
    "react/jsx-uses-vars": "error",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off", // jsx-runtime plugin

    // Remaining rules
    "react/boolean-prop-naming": "off",
    "react/button-has-type": "off", // default `type=submit` is fine
    "react/default-props-match-prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/forbid-component-props": "off",
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/function-component-definition": "off", // constrained in TS
    "react/hook-use-state": "warn",
    "react/iframe-missing-sandbox": "warn",
    "react/jsx-boolean-value": "warn",
    "react/jsx-child-element-spacing": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", propElementValues: "always" },
    ],
    "react/jsx-curly-newline": "warn",
    "react/jsx-curly-spacing": ["warn", { when: "never" }],
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-filename-extension": ["error"],
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-fragments": "off",
    "react/jsx-handler-names": "off",
    "react/jsx-indent": "off", // prettier takes care of this
    "react/jsx-indent-props": "off", // prettier takes care of this
    "react/jsx-max-depth": "off",
    "react/jsx-max-props-per-line": "off", // prettier takes care of this
    "react/jsx-newline": "off",
    "react/jsx-no-bind": "error",
    "react/jsx-no-constructed-context-values": "warn",
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    "react/jsx-no-literals": "off",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-one-expression-per-line": "off", // can become noisy and annoying
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": [
      "warn",
      { callbacksLast: true, shorthandFirst: true },
    ],
    "react/jsx-tag-spacing": "warn",
    "react/jsx-wrap-multilines": "off", // can become noisy and annoying
    "react/no-adjacent-inline-elements": "off",
    "react/no-array-index-key": "off", // if items don't mutate, you generally don't care about the `key` value
    "react/no-arrow-function-lifecycle": "error",
    "react/no-danger": "off",
    "react/no-multi-comp": "off", // meh
    "react/no-namespace": "error",
    "react/no-object-type-as-default-prop": "off", // Not sure how to fix `Definition for rule 'react/no-object-type-as-default-prop' was not found`.
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unstable-nested-components": "error",
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",
    "react/self-closing-comp": "warn",
    "react/sort-comp": "off",
    "react/sort-default-props": "off",
    "react/sort-prop-types": "off",
    "react/state-in-constructor": "off",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      },
    },
  ],
}

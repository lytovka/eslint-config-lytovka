import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals"

/**
 * @param {Object} options options for JavaScript config
 * @param {import("eslint").Linter.RulesRecord | undefined} options.overrides rules overrides
 *
 * @returns { import("eslint").Linter.FlatConfig[] }
 */
export function javascript(options = {}) {
  console.log("loading JS rules")
  const { overrides = {} } = options;

  return [
    eslintConfigPrettier,
    {
      name: "lytovka/javascript/rules",
      languageOptions: {
        ecmaVersion: 2022,
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
      },
      rules: {
        "accessor-pairs": "error",
        "array-callback-return": "error",
        "arrow-body-style": "off",
        "block-scoped-var": "error",
        camelcase: "off",
        "capitalized-comments": "off", // no, Thanks.
        "class-methods-use-this": "off",
        complexity: ["error", 20],
        "consistent-return": "error",
        "consistent-this": "off",
        "constructor-super": "error",
        curly: ["error", "multi-line"],
        "default-case": "error",
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-notation": "warn",
        eqeqeq: "off",
        "for-direction": "error",
        "func-name-matching": "error",
        "func-names": "error",
        "func-style": "off",
        "getter-return": "error",
        "grouped-accessor-pairs": "off",
        "guard-for-in": "error",
        "id-denylist": "error",
        "id-length": "off",
        "id-match": "off", // TODO: figure out an optimal regex for identifiers
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "max-lines-per-function": "off",
        "logical-assignment-operators": "off", // although more concise, this notation is arguably more difficult to comprehend
        "no-unused-vars": [
          "warn",
          {
            args: "after-used",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
            varsIgnorePattern: "^ignored",
            caughtErrorsIgnorePattern: "^err"
          },
        ],
        "no-unused-private-class-members": "error",
        "no-array-constructor": "error",
        "no-async-promise-executor": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-console": "off", // becomes quite problematic in Node environment
        "no-const-assign": "error",
        "no-constant-condition": "off", // meh
        "no-constant-binary-expression": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-class-members": "error",
        "no-empty": "off", // empty blocks are sometimes used as placeholders
        "no-div-regex": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "error",
        "no-empty-character-class": "error",
        "no-empty-static-block": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-fallthrough": ["error", { allowEmptyCase: true }],
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-implied-eval": "error",
        "no-import-assign": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-misleading-character-class": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-label-var": "error",
        "no-loop-func": "error",
        "no-negated-condition": "off", // legibility of a negated condition should be decided on a per-case basis
        "no-new-native-nonconstructor": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-prototype-builtins": "error",
        "no-param-reassign": "off", // let's see if this ever becomes a problem...
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-exports": "off",
        "no-restricted-syntax": "off", // nothing immediate comes to mind
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-setter-return": "error",
        "no-shadow-restricted-names": "error",
        "no-sparse-arrays": "error",
        "no-ternary": "off",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-underscore-dangle": "off", // can emphasize that an identifier is special
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-expressions": "off", // an expression might be used later
        "no-unused-labels": "error",
        "no-useless-backreference": "error",
        "no-useless-catch": "error",
        "no-useless-escape": "error",
        "no-var": "error",
        "no-with": "off",
        "one-var": ["error", { initialized: "never" }],
        "prefer-const": "error",
        "prefer-numeric-literals": "error",
        "init-declarations": "off",
        "max-classes-per-file": "off",
        "max-depth": ["error", 4],
        "max-lines": [
          "error",
          { max: 1000, skipBlankLines: false, skipComments: false },
        ],
        "max-nested-callbacks": ["error", 3],
        "no-extend-native": "error",
        "max-params": ["error", 5],
        "max-statements": "off",
        "new-cap": "error",
        "no-alert": "error",
        "no-await-in-loop": "error",
        "no-constructor-return": "error",
        "no-continue": "off",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "off", // idk
        "no-empty-function": "off",
        "no-empty-static-block": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-constant-binary-expression": "error",
        "no-eq-null": "off",
        "no-extra-label": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "error",
        "no-inline-comments": "off", // who \n // cares?
        "no-lonely-if": "error",
        "no-new": "error",
        "no-plusplus": "off", // can be handy
        "no-restricted-properties": "off", // not sure what properties to disallow at the moment
        "no-shadow": "error",
        "no-unmodified-loop-condition": "error",
        "no-useless-computed-key": "error",
        "object-shorthand": "error",
        "prefer-exponentiation-operator": "off", // revisit later, not buying it now
        "prefer-regex-literals": "off", // will decide once I become a regex wizard
        "require-atomic-updates": ["error", { allowProperties: true }],
        "no-loss-of-precision": "error",
        "no-invalid-this": "error",
        "no-multi-assign": "error",
        "no-new-wrappers": "error",
        "no-restricted-imports": "off", // should be configured in a project that uses this preset
        "no-iterator": "error",
        "no-nested-ternary": "off",
        "no-proto": "error",
        "no-sequences": "error",
        "no-unneeded-ternary": "error",
        "no-useless-return": "error",
        "prefer-arrow-callback": "off",
        "prefer-promise-reject-errors": "error",
        "require-await": "error",
        "vars-on-top": "error",
        "no-labels": "error",
        "no-new-func": "error",
        "no-restricted-globals": "off", // revisit later
        "no-template-curly-in-string": "error",
        "no-lone-blocks": "error",
        "no-promise-executor-return": "error",
        "no-undef-init": "error",
        "no-useless-rename": "error",
        "prefer-destructuring": "off",
        "no-magic-numbers": "off", // we all need some magic once in a while
        "no-return-await": "off",
        "no-use-before-define": "off",
        "prefer-spread": "error",
        strict: "off",
        "no-multi-str": "off",
        "no-script-url": "error",
        "no-useless-call": "error",
        "prefer-named-capture-group": "off", // gotta learn proper regex first
        "prefer-template": "error",
        "symbol-description": "error",
        "no-void": "off",
        radix: "error",
        "use-isnan": "error",
        "require-yield": "error",
        "no-octal-escape": "error",
        "no-warning-comments": "off", // ["error", { "terms": ["todo", "fixme"], "location": "start" }]
        "require-unicode-regexp": "off",
        "no-return-assign": "error",
        "operator-assignment": "off", // per-case basis
        "no-throw-literal": "error",
        "prefer-object-has-own": "error",
        yoda: "error",
        "no-undefined": "off",
        "prefer-object-spread": "error",
        "no-unreachable-loop": "error",
        "prefer-rest-params": "error",
        "valid-typeof": "error",
        ...overrides
      }
    },
  ]
}

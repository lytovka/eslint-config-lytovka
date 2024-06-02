import fs from "node:fs"
import path from "node:path"
import eslintConfigPrettier from "eslint-config-prettier";
import typescriptEslint from "typescript-eslint"

const tsConfig = process.env.ESLINT_TSCONFIG_PATH || "tsconfig.json"

const tsConfigAbsolutePath = fs.existsSync(tsConfig)
  ? path.resolve(tsConfig)
  : undefined

const projectRootDir = import.meta.dirname

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  eslintConfigPrettier,

  /* JS config */
  {
    files: ['**/*.{js,mjs,cjs}'],
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
      "max-statements-per-line": ["error", { max: 1 }],
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
      "no-new-symbol": "error",
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
      "line-comment-position": "off", // smh
      "lines-between-class-members": "off",
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
      "multiline-comment-style": "off",
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
      "padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "prefer-spread": "error",
      strict: "off",
      "no-multi-str": "off",
      "no-script-url": "error",
      "no-useless-call": "error",
      "prefer-named-capture-group": "off", // gotta learn proper regex first
      "prefer-template": "error",
      "symbol-description": "error",
      "no-new-object": "error",
      "no-void": "off",
      radix: "error",
      "use-isnan": "error",
      "require-yield": "error",
      "no-octal-escape": "error",
      "no-warning-comments": "off", // ["error", { "terms": ["todo", "fixme"], "location": "start" }]
      "require-unicode-regexp": "off",
      "no-return-assign": "error",
      "operator-assignment": "off", // per-case basis
      "spaced-comment": "off", // excessively pedantic rule
      "no-throw-literal": "error",
      "prefer-object-has-own": "error",
      yoda: "error",
      "no-undefined": "off",
      "prefer-object-spread": "error",
      "no-unreachable-loop": "error",
      "prefer-rest-params": "error",
      "valid-typeof": "error",
    }
  },

  /* TS config */
  {
    files: ["**/*.ts?(x)"],
    plugins: {
      '@typescript-eslint': typescriptEslint.plugin,
    },
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        tsconfigRootDir: projectRootDir,
        project: [tsConfigAbsolutePath],
      },
    },
    rules: {
      // Recommended rules: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-implied-eval": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/restrict-template-expressions": "error",
      "@typescript-eslint/unbound-method": "error",

      // Extension rules
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/dot-notation": "warn",
      "@typescript-eslint/init-declarations": "off",
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/no-dupe-class-members": "off",
      "@typescript-eslint/no-empty-function": "error",
      "@typescript-eslint/no-extra-semi": "error",
      "@typescript-eslint/no-invalid-this": "warn",
      "@typescript-eslint/no-loop-func": "warn",
      "@typescript-eslint/no-loss-of-precision": "error",
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-redeclare": "off",
      "@typescript-eslint/no-restricted-imports": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-throw-literal": "error",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^ignored",
        },
      ],
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "@typescript-eslint/return-await": "error",

      // Remaining TypeScript Rules
      "@typescript-eslint/adjacent-overload-signatures": "warn",
      "@typescript-eslint/array-type": [
        "warn",
        { default: "generic", readonly: "generic" },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": "allow-with-description",
        },
      ],
      "@typescript-eslint/ban-tslint-comment": "error",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/class-literal-property-style": "off",
      "@typescript-eslint/consistent-generic-constructors": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/consistent-type-assertions": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-exports": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/explicit-function-return-type": "off", // I prefer type inference on primitive types
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/member-ordering": "off", // doesn't make sense to include granular options in the preset
      "@typescript-eslint/method-signature-style": "off",
      "@typescript-eslint/naming-convention": "off", // should be set per each project separately
      "@typescript-eslint/no-base-to-string": "warn",
      "@typescript-eslint/no-confusing-non-null-assertion": "off",
      "@typescript-eslint/no-confusing-void-expression": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "@typescript-eslint/no-dynamic-delete": "error",
      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-extraneous-class": "error",
      "@typescript-eslint/no-floating-promises": [
        "warn",
        { ignoreVoid: true },
      ],
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-invalid-void-type": "warn",
      "@typescript-eslint/no-meaningless-void-operator": "off", // this rule suppresses `no-floating-promises`
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-redundant-type-constituents": "error",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-type-alias": "off",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "off", // Not sure I follow their examples
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/no-useless-empty-export": "off",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/non-nullable-type-assertion-style": "off",
      "@typescript-eslint/parameter-properties": "error",
      "@typescript-eslint/prefer-as-const": "warn",
      "@typescript-eslint/prefer-enum-initializers": "off", // should be configured in a project that uses this preset
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "warn",
      "@typescript-eslint/prefer-includes": "warn",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/prefer-readonly": "off",
      "@typescript-eslint/prefer-readonly-parameter-types": "off",
      "@typescript-eslint/prefer-reduce-type-parameter": "warn",
      "@typescript-eslint/prefer-regexp-exec": "warn",
      "@typescript-eslint/prefer-return-this-type": "warn",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/prefer-ts-expect-error": "off", // clashes with `ban-ts-comment` rule
      "@typescript-eslint/promise-function-async": "warn",
      "@typescript-eslint/require-array-sort-compare": "off",
      "@typescript-eslint/sort-type-constituents": "warn",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/triple-slash-reference": "error",
      "@typescript-eslint/typedef": "off",
      "@typescript-eslint/unified-signatures": "warn",
    }
  }
]

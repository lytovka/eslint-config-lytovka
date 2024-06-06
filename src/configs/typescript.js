import tseslint from 'typescript-eslint';
import { GLOB_TS, GLOB_TSX } from "../globs";

const projectRootDir = import.meta.dirname

/**
 * @param {any} value
 * @returns {any[]}
 */
function toArrayOrUndefined(value) {
  return value ? Array.isArray(value) ? value : [value] : undefined
}

/**
 * @param {Object} options options for TypeScript config
 * @param {import("eslint").Linter.RulesRecord | undefined} options.overrides rules overrides
 * @param {string | string[] | boolean | undefined} options.tsconfigPath path to `tsconfig.json` file. This enables type-aware linting.
 *
 * @returns { import("eslint").Linter.FlatConfig[] }
 */
export function typescript(options = {}) {
  const { overrides = {}, tsconfigPath: tsconfigPath = undefined } = options;

  const tsConfig = typeof tsconfigPath === "boolean" ? tsconfigPath : toArrayOrUndefined(tsconfigPath)
  const isTypeAware = !!tsConfig

  return [
    {
      files: [GLOB_TS, GLOB_TSX],
      name: "lytovka/typescript/rules",
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          sourceType: "module",
          ...isTypeAware ? {
            tsconfigRootDir: projectRootDir,
            project: tsConfig,
          } : {},
        },
      },
      rules: {
        ...tseslint.configs.recommended.rules, // https://typescript-eslint.io/users/configs/#recommended
        ...tseslint.configs.eslintRecommended.rules, //https://typescript-eslint.io/users/configs/#eslint-recommended

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
        ...overrides
      }
    }
  ];
}

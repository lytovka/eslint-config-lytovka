/**
 * @typedef {Object} FactoryPlugin
 * @property {boolean} [enable] Enable plugin
 * @property {import("eslint").Linter.RulesRecord | undefined} [overrides] Rules overrides
 */

import { javascript, typescript, jsxA11y, react } from "./configs"

/**
 * @param { Object } options
 * @param { FactoryPlugin } options.javascript JavaScript plugin configuration
 * @param { FactoryPlugin } options.typescript TypeScript plugin configuration
 * @param { FactoryPlugin } options.jsxA11y `jsx-a11y` plugin configuration
 * @param { FactoryPlugin } options.react React plugin configuration
 * @param { FactoryPlugin } options.import Import plugin configuration
 * @returns { import("eslint").Linter.FlatConfig[] }
 */
export default function factory(options = {}) {
  console.log("Loading factory.js...")
  const {
    javascript: javascriptConfig = { enable: true, overrides: undefined },
    typescript: typescriptConfig = { enable: true, overrides: undefined },
    jsxA11y: jsxA11yConfig = { enable: true, overrides: undefined },
    react: reactConfig = { enable: true, overrides: undefined },
    import: importConfig = { enable: true, overrides: undefined },
  } = options

  /** @type { import("eslint").Linter.FlatConfig[] } */
  const configs = []
  configs.push(javascript({ overrides: javascriptConfig.overrides }))
  if (typescript.enable) {
    configs.push(typescript({ overrides: typescriptConfig.overrides }))
  }
  if (jsxA11yConfig.enable) {
    configs.push(jsxA11y({ overrides: jsxA11yConfig.overrides }))
  }
  if (reactConfig.enable) {
    configs.push(react({ overrides: reactConfig.overrides }))
  }
  if (importConfig.enable) {
    configs.push(import({ overrides: importConfig.overrides }))
  }

  return configs
}

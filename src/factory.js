/**
 * @typedef {Object} FactoryPlugin
 * @property {boolean} [enable] Enable plugin
 * @property {import("eslint").Linter.RulesRecord | undefined} [overrides] Rules overrides
 */

import { javascript, typescript, jsxA11y, react, importing } from "./configs/index.js"

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
    jsxA11y: jsxA11yConfig = { enable: false, overrides: undefined },
    react: reactConfig = { enable: false, overrides: undefined },
    importing: importingConfig = { enable: false, overrides: undefined },
  } = options

  /** @type { import("eslint").Linter.FlatConfig[] } */
  const configs = []
  configs.push(javascript({ overrides: javascriptConfig.overrides }))
  if (typescriptConfig.enable) {
    configs.push(typescript({ overrides: typescriptConfig.overrides }))
  }
  if (jsxA11yConfig.enable) {
    configs.push(jsxA11y({ overrides: jsxA11yConfig.overrides }))
  }
  if (reactConfig.enable) {
    configs.push(react({ overrides: reactConfig.overrides }))
  }
  if (importingConfig.enable) {
    configs.push(importing({ overrides: importingConfig.overrides }))
  }

  return configs.flat()
}

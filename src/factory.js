/**
 * @typedef {Object} FactoryPlugin
 * @property {boolean} [enable] Enable plugin
 * @property {import("eslint").Linter.RulesRecord | undefined} [overrides] Rules overrides
 */

import { isPackageExists } from "./utils"
import { javascript, typescript } from "./configs"

/**
 * @param { Object } options
 * @param { FactoryPlugin } options.javascript JavaScript plugin configuration
 * @param { FactoryPlugin } options.typescript TypeScript plugin configuration
 * @returns { import("eslint").Linter.FlatConfig[] }
 */
export default function factory(options = {}) {
  console.log("hellloooo")
  const {
    javascript: javascriptConfig = { enable: true, overrides: undefined },
    typescript: typescriptConfig = { enable: true, overrides: undefined }
  } = options

  /** @type { import("eslint").Linter.FlatConfig[] } */
  const configs = []

  configs.push(javascript({ overrides: javascriptConfig.overrides }))

  if (typescript.enable) {
    configs.push(typescript({ overrides: typescriptConfig.overrides }))
  }

  return configs
}

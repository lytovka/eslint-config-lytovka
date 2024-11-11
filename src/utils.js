import fs from "node:fs"

export const isPackageExists = (packageName) => {
  console.log("isPackageExists")
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf-8"))

  return packageJson.dependencies[packageName] || packageJson.devDependencies[packageName]
};

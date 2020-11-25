import { JSDOM } from 'jsdom'
import fs from 'fs-extra'
import path from 'path'
import SVGO from 'svgo/lib/svgo'
import svgoConfigs from './svgo.config'
import { toHumpName, parseSvg, parseStyles } from './tools'

const outputDir = path.join(__dirname, '../', 'packages')
const exampleDataFilePath = path.join(__dirname, '../src/assets/data.json')
const sourceFile = path.join(__dirname, '../', '.source')
const typeDeclaraction = path.join(__dirname, '../', 'types/index.d.ts')
const typeDeclaractionMap = path.join(__dirname, '../', 'types/index.d.ts.map')

const makeMixin = () => {
  return `export const props = { size: [String, Number], color: String }
export const computed = {
  listeners() { return { ...this.$listeners } },
  styles() {
    const sizes = this.size ? { height: this.size, width: this.size } : {}
    return {...sizes, ...{"color":this.color || "currentColor"}}
  },
  attrs() {
    return {
      'viewBox': '0 0 24 24',
      'shape-rendering': 'geometricPrecision',
      'width': 24,
      'height': 24,
      ...this.$attrs,
    }
  },
}`
}

export default (async () => {
  // clearup and load svgs
  await fs.remove(outputDir)
  const html = await fs.readFile(sourceFile, 'utf8')

  const document = new JSDOM(html).window.document
  const icons: Array<Element> = document.querySelectorAll('.geist-list .icon')
  let imports = '',
    install = '',
    exportNames = '',
    names = [],
    tsExports = '';

  await Promise.all(
    Array.from(icons).map(async (icon: Element) => {
      const name: string = icon.querySelector('.geist-text').textContent
      let componentName = toHumpName(name)
      componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1)
      console.log(componentName);
      imports += `import ${componentName}Icon from './${name}.vue'\n`
      tsExports += `export class ${componentName}Icon {}\n`
      install += `  vue.component('${name}-icon', ${componentName}Icon)\n`
      exportNames += `  ${componentName}Icon,\n`
      names.push(name)

      const svg = icon.querySelector('svg')
      const svgo = new SVGO(svgoConfigs)
      const { data: optimizedSvgString } = await svgo.optimize(svg.outerHTML)
      const styles = parseStyles(svg.getAttribute('style'))
      const component = `<template>${parseSvg(optimizedSvgString, styles)}</template>
<script>
import { props, computed } from './mixin'
export default {
  name: "${name}-icon", props, computed,
}
</script>`
      return fs.outputFile(path.join(outputDir, `${name}.vue`), component)
    }),
  )

  const indexjs = `${imports}\n
const install = vue => {\n${install}\n}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {\n${exportNames}  install,\n}`

  const indexts = `import Vue from 'vue';\n\ndeclare module 'brew-icons' {\n  export function install(): void;\n${tsExports}\n}`

  await fs.outputFile(path.join(outputDir, 'index.d.ts'), indexts)

  await fs.outputFile(path.join(outputDir, 'index.js'), indexjs)

  await fs.outputFile(path.join(outputDir, 'mixin.js'), makeMixin())

  await fs.writeJSON(exampleDataFilePath, names)

  // const { exec } = require('child_process');
  /*exec('yarn generate-types', async (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    await fs.copyFile(typeDeclaraction, path.join(outputDir, 'index.d.ts'));
    await fs.copyFile(typeDeclaractionMap, path.join(outputDir, 'index.d.ts.map'));
  });*/
})().catch(err => {
  console.log(err)
})

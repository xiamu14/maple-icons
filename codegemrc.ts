import { defineConfig } from 'codegem'
import loadFile from 'codegem-load-file'
import createReactSvg from 'codegem-machine-react-svg'

export default defineConfig({
  // output: , // 根目录;所有生成文件统一生成在这个目录下
  factory: [
    {
      use: [loadFile(`./src/assets`)],
      machine: createReactSvg({
        output: './src/lib',
        replaceAttrValues: { '#6F767E': '{props.color || "#6F767E"}' },
      }),
    },
  ],
})

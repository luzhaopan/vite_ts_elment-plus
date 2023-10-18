import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
const root = process.cwd()
export default ({ command, mode }: ConfigEnv): UserConfig => {
  let env = {} as any
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv(
      process.argv[3] === '--mode' ? process.argv[4] : process.argv[3],
      root
    )
  } else {
    env = loadEnv(mode, root)
  }
  return {
    resolve: {
      alias: {
        '~': resolve(__dirname, './'),
        '@': resolve(__dirname, 'src')
      },
      extensions: ['.js', '.json', '.ts', '.vue'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/variables.scss";'
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      open: true,
      https: false,
      // proxy: {
      //   // 选项写法
      //   '/api': {
      //     target: 'http://127.0.0.1:8080',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // },
      hmr: {
        overlay: false
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue'], // 自动导入内置的所有api，我们可以在项目中直接使用
        include: [/\.[tj]sx?$/, /\.vue$/], // 匹配的文件，也就是哪些后缀的文件需要自动引入
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        // 指定自动导入的组件位置，默认是 src/components
        dirs: ['src/components'],
        resolvers: [ElementPlusResolver()]
      }),
      viteMockServe({
        ignore: /^\_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer'

        setupProdMockServer()
        `
      })
    ]
  }
}

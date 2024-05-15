// vite.config.ts
import { loadEnv } from "file:///C:/Users/luzhaopan/Desktop/p_project/vite-threejs-demo/node_modules/.pnpm/vite@3.2.5_@types+node@18.11.12_sass@1.56.2/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/luzhaopan/Desktop/p_project/vite-threejs-demo/node_modules/.pnpm/@vitejs+plugin-vue@3.2.0_vite@3.2.5_vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///C:/Users/luzhaopan/Desktop/p_project/vite-threejs-demo/node_modules/.pnpm/unplugin-auto-import@0.12.0_@vueuse+core@10.5.0_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/luzhaopan/Desktop/p_project/vite-threejs-demo/node_modules/.pnpm/unplugin-vue-components@0.22.11_rollup@2.79.1_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///C:/Users/luzhaopan/Desktop/p_project/vite-threejs-demo/node_modules/.pnpm/unplugin-vue-components@0.22.11_rollup@2.79.1_vue@3.2.45/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { viteMockServe } from "file:///C:/Users/luzhaopan/Desktop/p_project/vite-threejs-demo/node_modules/.pnpm/vite-plugin-mock@2.9.6_mockjs@1.1.0_rollup@2.79.1_vite@3.2.5/node_modules/vite-plugin-mock/dist/index.js";
import { resolve } from "path";
import vueJsx from "file:///C:/Users/luzhaopan/Desktop/p_project/vite-threejs-demo/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.2_vite@3.2.5_vue@3.2.45/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\luzhaopan\\Desktop\\p_project\\vite-threejs-demo";
var root = process.cwd();
var vite_config_default = ({ command, mode }) => {
  let env = {};
  const isBuild = command === "build";
  if (!isBuild) {
    env = loadEnv(
      process.argv[3] === "--mode" ? process.argv[4] : process.argv[3],
      root
    );
  } else {
    env = loadEnv(mode, root);
  }
  return {
    resolve: {
      alias: {
        "~": resolve(__vite_injected_original_dirname, "./"),
        "@": resolve(__vite_injected_original_dirname, "src")
      },
      extensions: [".js", ".json", ".ts", ".vue"]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/variables.scss";'
        }
      }
    },
    server: {
      host: "0.0.0.0",
      port: 5173,
      open: true,
      https: false,
      hmr: {
        overlay: false
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ["vue"],
        include: [/\.[tj]sx?$/, /\.vue$/],
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        dirs: ["src/components"],
        resolvers: [ElementPlusResolver()]
      }),
      viteMockServe({
        ignore: /^\_/,
        mockPath: "mock",
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer'

        setupProdMockServer()
        `
      })
    ]
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsdXpoYW9wYW5cXFxcRGVza3RvcFxcXFxwX3Byb2plY3RcXFxcdml0ZS10aHJlZWpzLWRlbW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGx1emhhb3BhblxcXFxEZXNrdG9wXFxcXHBfcHJvamVjdFxcXFx2aXRlLXRocmVlanMtZGVtb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbHV6aGFvcGFuL0Rlc2t0b3AvcF9wcm9qZWN0L3ZpdGUtdGhyZWVqcy1kZW1vL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnLCBDb25maWdFbnYgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKClcclxuZXhwb3J0IGRlZmF1bHQgKHsgY29tbWFuZCwgbW9kZSB9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcclxuICBsZXQgZW52ID0ge30gYXMgYW55XHJcbiAgY29uc3QgaXNCdWlsZCA9IGNvbW1hbmQgPT09ICdidWlsZCdcclxuICBpZiAoIWlzQnVpbGQpIHtcclxuICAgIGVudiA9IGxvYWRFbnYoXHJcbiAgICAgIHByb2Nlc3MuYXJndlszXSA9PT0gJy0tbW9kZScgPyBwcm9jZXNzLmFyZ3ZbNF0gOiBwcm9jZXNzLmFyZ3ZbM10sXHJcbiAgICAgIHJvb3RcclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgZW52ID0gbG9hZEVudihtb2RlLCByb290KVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgICd+JzogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLycpLFxyXG4gICAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxyXG4gICAgICB9LFxyXG4gICAgICBleHRlbnNpb25zOiBbJy5qcycsICcuanNvbicsICcudHMnLCAnLnZ1ZSddIC8vIFx1NEY3Rlx1NzUyOFx1OERFRlx1NUY4NFx1NTIyQlx1NTQwRFx1NjVGNlx1NjBGM1x1ODk4MVx1NzcwMVx1NzU2NVx1NzY4NFx1NTQwRVx1N0YwMFx1NTQwRFx1RkYwQ1x1NTNFRlx1NEVFNVx1ODFFQVx1NURGMSBcdTU4OUVcdTUxQ0ZcclxuICAgIH0sXHJcbiAgICBjc3M6IHtcclxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQGltcG9ydCBcIi4vc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiOydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICBwb3J0OiA1MTczLFxyXG4gICAgICBvcGVuOiB0cnVlLFxyXG4gICAgICBodHRwczogZmFsc2UsXHJcbiAgICAgIC8vIHByb3h5OiB7XHJcbiAgICAgIC8vICAgLy8gXHU5MDA5XHU5ODc5XHU1MTk5XHU2Q0Q1XHJcbiAgICAgIC8vICAgJy9hcGknOiB7XHJcbiAgICAgIC8vICAgICB0YXJnZXQ6ICdodHRwOi8vMTI3LjAuMC4xOjgwODAnLFxyXG4gICAgICAvLyAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAvLyAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSxcclxuICAgICAgaG1yOiB7XHJcbiAgICAgICAgb3ZlcmxheTogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIHZ1ZUpzeCgpLFxyXG4gICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICBpbXBvcnRzOiBbJ3Z1ZSddLCAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTUxODVcdTdGNkVcdTc2ODRcdTYyNDBcdTY3MDlhcGlcdUZGMENcdTYyMTFcdTRFRUNcdTUzRUZcdTRFRTVcdTU3MjhcdTk4NzlcdTc2RUVcdTRFMkRcdTc2RjRcdTYzQTVcdTRGN0ZcdTc1MjhcclxuICAgICAgICBpbmNsdWRlOiBbL1xcLlt0al1zeD8kLywgL1xcLnZ1ZSQvXSwgLy8gXHU1MzM5XHU5MTREXHU3Njg0XHU2NTg3XHU0RUY2XHVGRjBDXHU0RTVGXHU1QzMxXHU2NjJGXHU1NEVBXHU0RTlCXHU1NDBFXHU3RjAwXHU3Njg0XHU2NTg3XHU0RUY2XHU5NzAwXHU4OTgxXHU4MUVBXHU1MkE4XHU1RjE1XHU1MTY1XHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXVxyXG4gICAgICB9KSxcclxuICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU3Njg0XHU3RUM0XHU0RUY2XHU0RjREXHU3RjZFXHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGIHNyYy9jb21wb25lbnRzXHJcbiAgICAgICAgZGlyczogWydzcmMvY29tcG9uZW50cyddLFxyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgICAgfSksXHJcbiAgICAgIHZpdGVNb2NrU2VydmUoe1xyXG4gICAgICAgIGlnbm9yZTogL15cXF8vLFxyXG4gICAgICAgIG1vY2tQYXRoOiAnbW9jaycsXHJcbiAgICAgICAgbG9jYWxFbmFibGVkOiAhaXNCdWlsZCxcclxuICAgICAgICBwcm9kRW5hYmxlZDogaXNCdWlsZCxcclxuICAgICAgICBpbmplY3RDb2RlOiBgXHJcbiAgICAgICAgaW1wb3J0IHsgc2V0dXBQcm9kTW9ja1NlcnZlciB9IGZyb20gJy4uL21vY2svX2NyZWF0ZVByb2R1Y3Rpb25TZXJ2ZXInXHJcblxyXG4gICAgICAgIHNldHVwUHJvZE1vY2tTZXJ2ZXIoKVxyXG4gICAgICAgIGBcclxuICAgICAgfSlcclxuICAgIF1cclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sWUFBWTtBQVJuQixJQUFNLG1DQUFtQztBQVd6QyxJQUFNLE9BQU8sUUFBUSxJQUFJO0FBQ3pCLElBQU8sc0JBQVEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUE2QjtBQUMzRCxNQUFJLE1BQU0sQ0FBQztBQUNYLFFBQU0sVUFBVSxZQUFZO0FBQzVCLE1BQUksQ0FBQyxTQUFTO0FBQ1osVUFBTTtBQUFBLE1BQ0osUUFBUSxLQUFLLE9BQU8sV0FBVyxRQUFRLEtBQUssS0FBSyxRQUFRLEtBQUs7QUFBQSxNQUM5RDtBQUFBLElBQ0Y7QUFBQSxFQUNGLE9BQU87QUFDTCxVQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUEsRUFDMUI7QUFDQSxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLFFBQVEsa0NBQVcsSUFBSTtBQUFBLFFBQzVCLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDL0I7QUFBQSxNQUNBLFlBQVksQ0FBQyxPQUFPLFNBQVMsT0FBTyxNQUFNO0FBQUEsSUFDNUM7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQVNQLEtBQUs7QUFBQSxRQUNILFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsV0FBVztBQUFBLFFBQ1QsU0FBUyxDQUFDLEtBQUs7QUFBQSxRQUNmLFNBQVMsQ0FBQyxjQUFjLFFBQVE7QUFBQSxRQUNoQyxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNuQyxDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFFVCxNQUFNLENBQUMsZ0JBQWdCO0FBQUEsUUFDdkIsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDbkMsQ0FBQztBQUFBLE1BQ0QsY0FBYztBQUFBLFFBQ1osUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsY0FBYyxDQUFDO0FBQUEsUUFDZixhQUFhO0FBQUEsUUFDYixZQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtkLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=

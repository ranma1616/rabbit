import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 1. 配置elementPlus采用的sass样式配色
      resolvers: [ElementPlusResolver({ importStyle : "sass"})],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 2. 自动导入定制化样式文件进行样式重叠
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/var.scss" as *;
        `,
      }
    }
  },
  server: {
    proxy: {
      // 匹配真实后端域名的请求（关键：拦截对真实域名的请求）
      'http://pcapi-xiaotuxian-front-devtest.itheima.net': {
        target: 'http://pcapi-xiaotuxian-front-devtest.itheima.net', // 目标后端地址
        changeOrigin: true, // 开启跨域（模拟请求来自后端域名）
        // 无需 rewrite，因为请求路径不变
      }
    }
  }
})

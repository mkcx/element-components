import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/element-components/' : '/',
  plugins: [
    vue(),
    vueJsx(),
    // 配置mock
    viteMockServe({
      mockPath: './mock',
      localEnabled: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  server: {
    port: 8088
  }
})

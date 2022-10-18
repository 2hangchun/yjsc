import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pxToViewport from 'postcss-px-to-viewport'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  css: {
    postcss: {
      plugins: [
        pxToViewport({
          unitToConvert: 'px',
          viewportWidth: 750,
          unitPrecision: 5,
          propList: ['*', '!box-shadow'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: undefined,
          include: undefined,
          landscape: false,
          landscapeUnit: 'vw',
          landscapeWidth: 568
        })
      ]
    }
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http:/localhost:80080',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     },
  //   }
  // }
})

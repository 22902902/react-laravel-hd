import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

// UI库：ui.shadcn.com ，样式库：tailwindcss.com ，图标库：icones.js.org
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  // 配置代理
  server: {
    proxy: {
      "/hd": {
        target: "http://hdedu.test",
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/hd/, "")
      }
    }
  }
})

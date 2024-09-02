/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'
import reactRefresh from '@vitejs/plugin-react-refresh'
// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [
    react(),
    envCompatible(),
    reactRefresh()
  ],
  test:{
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    css: true
  },
  build:{
    chunkSizeWarningLimit: 2000,
    rollupOptions:{
      output:{
        manualChunks(id){
          if(id.includes("node_modules")) {
            return 'vendor'
          }
        }
      }
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import tailwindcss from "tailwindcss";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    fs: {
      cachedChecks: false
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@components': path.resolve(__dirname, 'components'),
    },
  },

  // Build
  preview: {
    host: '0.0.0.0',
    port: 8000,
  },
})

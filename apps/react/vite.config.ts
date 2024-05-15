import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss";
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
  },
  // Build
  preview: {
    host: '0.0.0.0',
    port: 8000,
  },
})

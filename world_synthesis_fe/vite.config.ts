import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    open: true
  },
  build: {
    outDir: "../dist"
  },
  preview: {
    port: 3001,
    strictPort: true,
    open: true,
  }
})

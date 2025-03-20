import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0' // Makes the server accessible externally
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      core: path.resolve(__dirname, '../../core'),
      package: path.resolve(__dirname, '../../package')
    }
  },
  css: {
    devSourcemap: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  }
})

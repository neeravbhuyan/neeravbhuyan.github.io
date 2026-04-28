import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        format: 'umd',
        name: 'PortfolioApp'
      }
    }
  }
})

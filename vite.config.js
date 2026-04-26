import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'fix-github-pages',
      closeBundle() {
        const indexPath = resolve(__dirname, 'docs/index.html')
        let html = readFileSync(indexPath, 'utf-8')
        html = html.replace('type="module"', '')
        writeFileSync(indexPath, html)
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'docs'
  }
})
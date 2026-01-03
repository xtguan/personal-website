import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages deployment. Change VITE_BASE to override.
export default defineConfig({
  base: process.env.VITE_BASE || '/personal-website/',
  plugins: [react()]
})

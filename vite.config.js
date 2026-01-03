import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set `base` to the repository name when deploying to GitHub Pages.
// Example: base: '/your-repo-name/'
export default defineConfig({
  // Base path for GitHub Pages deployment. Change VITE_BASE to override.
  base: process.env.VITE_BASE || '/personal-website/',
  plugins: [react()]
})

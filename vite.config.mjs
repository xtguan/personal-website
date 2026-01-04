import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use a different base in development so localhost serves at '/'.
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  return {
    base: process.env.VITE_BASE || (isProd ? '/personal-website/' : '/'),
    plugins: [react()]
  }
})

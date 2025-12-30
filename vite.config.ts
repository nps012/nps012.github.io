import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env variables (if any)
  const env = loadEnv(mode, '.', '')

  return {
    // IMPORTANT for GitHub Pages (user site)
    base: '/',

    plugins: [react()],

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    // Safely expose env vars (won't crash if missing)
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || ''),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  }
})

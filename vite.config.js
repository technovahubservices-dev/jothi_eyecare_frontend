import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiBaseUrl = (env.VITE_API_BASE_URL || 'http://localhost:4000').replace(/\/$/, '')

  return {
    base: '/test_jothiEyecare/',
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: apiBaseUrl,
          changeOrigin: true
        },
        '/health': {
          target: apiBaseUrl,
          changeOrigin: true
        }
      }
    }
  }
})

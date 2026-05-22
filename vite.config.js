import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/jobs': {
        target: 'https://ebusinessbazar.com',
        changeOrigin: true,
        rewrite: () => '/ebusinessbazaar.com/retrive-jobs.php',
      },
      '/api/upload-job': {
        target: 'https://ebusinessbazar.com',
        changeOrigin: true,
        rewrite: () => '/ebusinessbazaar.com/upload-jobs.php',
      },
    },
  },
})

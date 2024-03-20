import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {  } from 'vitest'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // Optional, if you have setup files like for extending expect
  },
})

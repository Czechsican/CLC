import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// Kept separate from vite.config.ts: vitest bundles its own vite copy, so
// its config types clash with the app's vite plugin types.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: false,
  },
})

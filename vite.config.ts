/// <reference types="vitest" />
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['./src/components/**/__tests__/*'],
    setupFiles: ['./config/test/setup.ts'],
  },
});

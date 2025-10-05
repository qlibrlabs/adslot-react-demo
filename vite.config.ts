import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    proxy: {
      '/api': {
        target: 'https://nlca.nlcyber.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
  },
});



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/backend': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true, // Add this if necessary
      },
    },
  },
  plugins: [react()],
});

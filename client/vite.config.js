// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Ensure this matches the port you are proxying to in Express
  },
});

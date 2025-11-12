// BEFORE: import path from 'node:path'; // or similar
// AFTER: use fileURLToPath + path for ESM compatibility

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// then later use __dirname or path.resolve(__dirname, '...') as needed
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

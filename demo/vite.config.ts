import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  root: 'demo',
  build: {
    outDir: '../dist-demo',
  },
  base: '/react-copy-to-clipboard-ts/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      react: resolve(__dirname, '../node_modules/react'),
      'react-dom': resolve(__dirname, '../node_modules/react-dom'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});

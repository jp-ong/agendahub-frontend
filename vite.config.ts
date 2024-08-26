import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// @ts-ignore
import path from 'node:path';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { port: 3000 },
  resolve: {
    alias: {
      // @ts-ignore
      '@scss': path.resolve(__dirname, 'src/scss'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@scss/config/breakpoints';\n",
      },
    },
  },
});

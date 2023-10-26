import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import reactRefresh from '@vitejs/plugin-react-refresh';

import svgx from '@svgx/vite-plugin-react';
export default defineConfig({
  plugins: [react(), svgx(), reactRefresh()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/utils/variables.scss";`,
      },
    },
  },

  // base: '/dummyTable',
  build: {
    outDir: 'build',
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
});

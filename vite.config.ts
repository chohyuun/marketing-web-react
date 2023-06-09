import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  envPrefix: 'REACT_APP_',
  envDir: './environment',
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: '@import "./src/style/global.ts";',
      },
    },
  },
})

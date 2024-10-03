import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8082,

    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    rollupOptions: {
        output: {
            dir: 'dist',
            entryFileNames: 'mongoDb.js',
            assetFileNames: 'mongoDb.css',
            chunkFileNames: "mongoDb.js",
            manualChunks: undefined,
        }
    }
}
});

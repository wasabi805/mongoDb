import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    MODE: `"${process.env.MODE}"`,
    VITE_BACKEND: `"${process.env.VITE_BACKEND}"`,
    VITE_PORT: `"${process.env.VITE_PORT}"`,
  },

  plugins: [react()],
  server: {
    port: parseInt(`"${process.env.VITE_PORT}"`, 10),

    proxy: {
      "/api": {
        target: `"${process.env.VITE_BACKEND}"`,
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    rollupOptions: {
      output: {
        dir: "dist",
        entryFileNames: "mongoDb.js",
        assetFileNames: "mongoDb.css",
        chunkFileNames: "mongoDb.js",
        manualChunks: undefined,
      },
    },
  },
});

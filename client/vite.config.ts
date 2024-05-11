import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    MODE: `"${process.env.MODE}"`,
    VITE_LOCAL_HOST: `"${process.env.VITE_LOCAL_HOST}"`,
    VITE_PROD_URL: `"${process.env.VITE_PROD_URL}"`,
    VITE_LOCAL_PORT: `"${process.env.VITE_LOCAL_PORT}"`,
  },

  plugins: [react()],
  server: {
    port: 8082,

    proxy: {
      "/api": {
        // target: "http://localhost:8080",
        target:
          process.env.MODE === "development"
            ? process.env.VITE_LOCAL_HOST
            : process.env.VITE_PROD_URL,
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

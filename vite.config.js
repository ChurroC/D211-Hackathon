// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        grid: resolve(__dirname, "grid/index.html"),
        matching: resolve(__dirname, "matching/index.html"),
        stats: resolve(__dirname, "stats/index.html")
      }
    }
  }
});

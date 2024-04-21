import { resolve } from "path";
import { defineConfig } from "vite";
import { sync } from "glob";

export default defineConfig({
  root: "src",
  base: "./",
  build: {
    rollupOptions: {
      input: sync(resolve(__dirname, "src", "**/*.html"))
    },
    outDir: resolve(__dirname, "docs"),
    emptyOutDir: true
  },
  publicDir: "../public"
});

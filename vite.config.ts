import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
//@ts-ignore
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 8003
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});

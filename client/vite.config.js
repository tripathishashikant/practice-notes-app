import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

// in module configuration __dirname is not avaialbe as it is present in CJS configuration
// we are defining it here manually
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

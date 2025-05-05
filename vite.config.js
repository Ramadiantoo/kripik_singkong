import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/", 
  build: {
    outDir: "dist",
    publicDir: false, 
  },
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser", // mencegah error MIME 
    },
  },
});

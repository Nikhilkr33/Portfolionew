import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split large dependencies into separate chunks to improve caching and reduce initial load.
    rollupOptions: {
      output: {
        manualChunks: {
          three: [
            "three",
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
            "@react-three/rapier",
            "three-stdlib",
          ],
          vendor: ["react", "react-dom", "gsap"],
        },
      },
    },
    // Increase warning threshold so builds don't fail due to chunk size warnings.
    chunkSizeWarningLimit: 2000,
  },
});

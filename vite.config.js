import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Daily Tracker",
        short_name: "Tracker",
        theme_color: "#0071e3",
        background_color: "#ffffff",
        display: "standalone",
      }
    })
  ]
});
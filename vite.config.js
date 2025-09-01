import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/E-Commerce_App/",   // 👈 must match your repo name
  plugins: [react()],
});

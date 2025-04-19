import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  if (mode === "dev") {
    const customEnv = dotenv.config({ path: ".local.env" }).parsed || {};
    Object.assign(env, customEnv);
  }
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH,
  };
});

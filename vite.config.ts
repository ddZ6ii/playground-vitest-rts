import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { configDefaults, defineConfig } from "vitest/config"

// Define chrome as default browser for the dev serprver.
const opsys = process.platform
// windows
if (opsys === "win32") process.env.BROWSER = "chrome"
// macOS
if (opsys === "darwin") process.env.BROWSER = "/Applications/Google Chrome.app"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: resolve(import.meta.dirname, "dist"),
    sourcemap: true,
    minify: true,
    cssMinify: true,
  },
  resolve: {
    alias: {
      "@/components": resolve(__dirname, "src/components"),
      "@/hooks": resolve(__dirname, "src/hooks"),
      "@/services": resolve(__dirname, "src/services"),
      "@/tests": resolve(__dirname, "tests"),
    },
  },
  // Vitest config options
  test: {
    // Emulate headless web browser and DOM APIs in node.js environment
    environment: "jsdom",
    // Append test files or folders to be excluded during test run
    exclude: [...configDefaults.exclude],
    // List of glob patterns to locate test files (default to "**/*.{test,spec}.?(c|m)[jt]s?(x)")
    include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    // Setup file location (contains global config to be shared across test files, will be run before each test)
    setupFiles: ["tests/setup.ts"],
  },
  plugins: [react(), tailwindcss()],
})

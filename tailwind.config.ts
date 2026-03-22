import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  safelist: [
    "card-1", "card-2", "card-3", "card-4",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config

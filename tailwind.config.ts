import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#374151",
        background: "#1d4ed8",
        backgroundHover: "#1e40af",
        backgroundSand: "#f6f6f6"
      },
    },
  },
  plugins: [],
} satisfies Config;

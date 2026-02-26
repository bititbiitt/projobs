import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: "#0d9488",
          DEFAULT: "#0d9488",
          dark: "#0f766e",
        },
        navy: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
        },
        accent: {
          yellow: "#fbbf24",
          green: "#86efac",
          blue: "#3b82f6",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #172554, #1e7a8a)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/presentation/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0B1224",
          900: "#111A33",
          800: "#182648",
          700: "#2A3B63",
        },
        paper: "#FBFAF7",
        ink: "#14182B",
        slate: {
          DEFAULT: "#5B6478",
          light: "#8B93A7",
        },
        gold: {
          DEFAULT: "#E7B24B",
          dark: "#C6912F",
        },
        teal: {
          DEFAULT: "#3F8F82",
          dark: "#2E6D63",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;

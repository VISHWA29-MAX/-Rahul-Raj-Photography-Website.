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
        brand: {
          dark: "#050505",
          charcoal: "#111111",
          card: "#161616",
          cardHover: "#1E1E1E",
          border: "#262626",
          borderLight: "#333333",
          red: "#E50914",
          redHover: "#C40812",
          redGlow: "rgba(229, 9, 20, 0.2)",
          textPrimary: "#FFFFFF",
          textSecondary: "#BDBDBD",
          textMuted: "#737373",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

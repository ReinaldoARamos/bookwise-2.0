import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: "16px",
      },
      gradientColorStops: {
        teal: "#7FD1CC",
        purple: "#9694F5",
      },

      colors: {
        singin: "#50B2C0",
        latestread: "#252D4A",
        reviewCard: "#181C2A",
        custompurple: "#8381D9",
        custompurple200: "#2A2879",
        searchbar: "#303F73",
        background: "#0E1116",
        starpurple: "#8381D9",
        customgreen300: "#0A313C",
        customgreen100: "#50B2C0",
        customgreen200: "#255D6A",
        teal: "#7FD1CC",
        purpleguy: "#9694F5",
      },
    },
  },
  
};
export default config;

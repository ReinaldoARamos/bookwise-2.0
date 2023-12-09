import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        md: "16px",
      },
      gradientColorStops: {
        'from-teal': '#7FD1CC',
        'to-purple': '#9694F5',
      },
      linearGradientDirections: {
        '45': '45deg',
      },
      colors: {
        singin: '#50B2C0'
      }
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
export default config;

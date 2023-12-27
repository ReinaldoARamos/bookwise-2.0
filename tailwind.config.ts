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
          'linear': 'linear-gradient(to right, rgba(34,164,116,1) 0%, rgba(41,47,143,1) 100%)'
      },
      fontSize: {
        md: "16px",
      },
      gradientColorStops: {
        "teal": "#7FD1CC",
        "purple": "#9694F5",
      },
      linearGradientDirections: {
        "45": "45deg",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      colors: {
        singin: "#50B2C0",
        latestread: '#252D4A',
        reviewCard: "#181C2A",
        custompurple: "#8381D9",
        custompurple200: "#2A2879",
        searchbar: '#303F73',
        background: '#0E1116',
        starpurple: '#8381D9',
        customgreen300: '#0A313C',
        customgreen100: '#50B2C0',
        customgreen200: '#255D6A',
        teal: "#7FD1CC",
        purpleguy: "#9694F5",
       
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
export default config;

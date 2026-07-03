import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/landing-system/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#151716",
        bone: "#f7f2e8",
        moss: "#39483b",
        copper: "#bd6f3c",
        mint: "#d8f1df",
        fog: "#edf0ee",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(21, 23, 22, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

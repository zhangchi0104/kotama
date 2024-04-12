/** @format */

import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        github: "rgb(24, 23, 23)",
        linkedin: "#0a66c2",
        bilibili: "#fb7299",
        accentColor: "#00b4d8",
      },
    },
  },
  plugins: [],
};
export default config;

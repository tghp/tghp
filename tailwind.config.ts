import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: false,
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-main)", "sans-serif"],
      },
      colors: {
        background: "rgb(0 0 0 / <alpha-value>)",
        green: "rgb(106 199 198 / <alpha-value>)",
        teal: "rgb(45 212 174 / <alpha-value>)",
        "teal-mid": "rgb(24 104 85 / <alpha-value>)",
        "teal-dark": "rgb(1 26 20 / <alpha-value>)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@joshdavenport/tailwindcss-filter-order"),
  ],
};
export default config;

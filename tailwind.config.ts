const { fontFamily } = require("tailwindcss/defaultTheme");
const extraColumns = {
  13: "13",
  14: "14",
  15: "15",
  16: "16",
  17: "17",
  18: "18",
  19: "19",
  20: "20",
  21: "21",
  22: "22",
  23: "23",
  24: "24",
  25: "25",
  26: "26",
  27: "27",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:
        /col-(start|end)-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27)/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: "#334646",
        mainLight: "#FBECE6",
        accent: "#FCD4B7",
      },
      backgroundImage: {
        cGradient:
          "linear-gradient(156deg, rgba(0, 0, 0, 0.40) 17.48%, rgba(0, 0, 0, 0.00) 117.22%)",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.5rem",
        "2xl": "2.438rem",
        "3xl": "5.938rem",
      },
      fontFamily: {
        serif: ["var(--grotesque)", fontFamily.serif],
        grotesque: ["var(--grostesque)", fontFamily.serif],
        sans: ["var(--inter)", ...fontFamily.sans],
        inter: ["var(--inter)", ...fontFamily.sans],
      },
      gridColumnStart: extraColumns,
      gridColumnEnd: extraColumns,
      gridTemplateColumns: {
        container:
          "[full-start] minmax(calc(calc(100% - 1440px) / 2), 1fr) [main-start] repeat(24, [col-start] 1fr) [main-end] minmax(calc(calc(100% - 1440px) / 2), 1fr) [full-end]",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "376px",
      xl: "1440px",
    },
    colors: {
      orange: "#fb7413",
      lightGrey: "#959eac",
      mediumGrey: "#7c8798",
      darkBlue: "#252d37",
      veryDarkBlue: "#121417",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};

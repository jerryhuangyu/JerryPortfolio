/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#fcfbf6",
        "secondary-light": "#73839d", // text main
        "third-light": "#576076", // text secondary
        "tertiary-light": "#AEBDCA",

        "primary-dark": "#1b1b1d",
        "secondary-dark": "#e0e2d9", // text main
        "third-dark": "#fffefe", // text secondary
        "tertiary-dark": "#374151",
        
        "out": "#62cdff"
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};

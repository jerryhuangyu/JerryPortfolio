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
        "sidemenu-light": "#d8dfe5",

        "primary-dark": "#1b1b1d",
        "secondary-dark": "#a4b2c4", // text main
        "third-dark": "#fffefe", // text secondary
        "tertiary-dark": "#374151",
        "sidemenu-dark": "#2b2b2d",
        
        "out": "#62cdff"
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};

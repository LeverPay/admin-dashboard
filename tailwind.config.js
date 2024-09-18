const { green } = require("@mui/material/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/Components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        red: "#E20010",
        "green-opacity": "#32952175",
        "blue-shade": "#0F3FB2",
        "off-white-shade": "#887c7c15",
        "light-orange-shade": "#f1b69a35",
        "light-green-shade": "#3ad4a725",
        "red-shade": "#e2001035",
        "black-fade": "#000000d2",
      },
    },
  },
  plugins: [],
};

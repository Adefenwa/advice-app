/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        blue: "hsl(228, 45%, 44%)",
      },
    },
  },
  plugins: [],
};

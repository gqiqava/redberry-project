/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "metal-dark": "#111317",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};

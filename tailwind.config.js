/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      tablet: "640px",
      md: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        "dark-grey": "#121212",
        "dark-primary": "#1F1B24",
        "dark-purple": "#BB86FC",
        "dark-teal": "#03DAC5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

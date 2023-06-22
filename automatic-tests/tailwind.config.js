/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans, sans-serif"],
      },
      colors: {
        accent: {
          600: "#4093ce",
        },
        black: {
          400: "#ededed",
          900: "#163450",
        },
      },
    },
  },
  plugins: [],
};

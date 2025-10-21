/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#FFD700', // or #D4AF37 for darker gold
          500: '#FFD700',
          600: '#D4AF37',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
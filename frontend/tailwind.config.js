/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          grey: '#29524d', // use as bg-brand, text-brand, etc.
          yellow: '#ffb31b', // bg-brand-dark
        },
      },
    },
  },
  plugins: [],
}


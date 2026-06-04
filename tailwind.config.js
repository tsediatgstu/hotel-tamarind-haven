/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tamarind: {
          green: '#2B7A4B',
          accent: '#DD9494',
          cream: '#F7F5EE', // Added token here
        }
      }
    },
  },
  plugins: [],
}
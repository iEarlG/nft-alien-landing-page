/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fonts: {
        'poppins': ['Poppins', 'sans-serif'],
        'bakbak': ['Bakbak One', 'cursive']
      },
      colors: {
        'first-color': '#21E786',
        'second-color': '#141B22',
        'third-color': '#000000',

        'base-color': '#FFFFFF',
        'base-color-2': '#C2C3C5',
      }
    },
  },
  plugins: [],
}


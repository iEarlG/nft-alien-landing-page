/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fonts: {
        poppins: ['Poppins', 'sans-serif'],
        bakbak: ['Bakbak One', 'cursive']
      },
      colors: {
        firstColor: '#21E786',
        secondColor: '#141B22',
        thirdColor: '#000000',
        baseColor: '#FFFFFF',
        baseColor2: '#C2C3C5',
      },
      screens: {
        xs: '375px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
    },
  },
  plugins: [],
}


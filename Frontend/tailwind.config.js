
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#ee0181',
      },
      fontFamily:{
        'display':['Roboto' , 'sans-sarif']
      } 
    },
  },
  plugins: [],
} 
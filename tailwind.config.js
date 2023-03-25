/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    fontSize:{
      'base': '1rem',
      'md': '1.3rem',
      'lg': '2rem',
      'xl': '3rem',
      '2xl': '4rem',
      '3xl': '5rem',
      '4xl': '6rem',
      '2xl': '4rem'
    },
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")]
}
 
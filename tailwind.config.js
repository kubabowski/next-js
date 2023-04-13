/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    screens: { 
      'start': '100px',
      '2xs': '350px',
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1520px',
      '3xl': '1630px',
      '4xl': '1820px',
      '5xl': '2100px',
    },
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
      center: true,
      padding: {
        sm: '1rem',
        md: '3rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '3rem',
        '3xl': '0',
      }
    },
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
        require("tw-elements/dist/plugin"),
        function ({ addComponents }) {
          addComponents({
            '.container': {
              maxWidth: '100%',

              // 'start': '100px',
              '@screen start': {
                maxWidth: '250px',
              },
              // '2xs': '350px',
              '@screen 2xs': {
                maxWidth: '340px',
              },
              // 'xs': '500px',
              '@screen xs': {
                maxWidth: '450px',
              },
              // 'sm' => '640px'
              '@screen sm': {
                maxWidth: '600px',
              },
              // 'md': '768px',
              '@screen md': {
                maxWidth: '728px',
              },
              // 'lg': '1024px',
              '@screen lg': {
                maxWidth: '984px',
              },
              // 'xl': '1280px',
              '@screen xl': {
                maxWidth: '1240px',
              },
              // '2xl': '1520px',
              '@screen 2xl': {
                maxWidth: '1480px',
              },
              // '3xl': '1630px',
              '@screen 3xl': {
                maxWidth: '1590px',
              },
              // '4xl': '1820px',
              '@screen 4xl': {
                maxWidth: '1780px',
              },
              // '5xl': '2000px',
              '@screen 5xl': {
                maxWidth: '2000px',
              },
            }
          })
        }
      
      ]
}
 
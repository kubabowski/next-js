/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{html,js}",
    
  ],
  theme: {
    screens: { 
      'start': '250px',
      'xs': '360px',
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
      'sm': ['0.8rem ', { fontWeight : '100' }],
      'base': ['1rem ', { fontWeight : '100' }],
      'md':   ['1.3rem', { fontWeight : '100' }],
      'lg':   ['2rem', { fontWeight : '100' }],
      'xl':   ['3rem', { fontWeight : '100' }],
      '2xl':  ['4rem', { fontWeight : '100' }],
      '3xl':  ['5rem', { fontWeight : '100' }],
      '4xl':  ['6rem', { fontWeight : '100' }],
      '2xl':  ['4rem', { fontWeight : '100' }],
    },
    fontWeight: {
      normal: 100
    },
    container: {
      center: true,
      padding: {
        'start': '0.15rem',
        xs: '0.5rem',
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
        
        function ({ addComponents }) {
          addComponents({
            '.container': {
              maxWidth: '100%',

              // 'start': '100px',
              '@screen start': {
                // maxWidth: '320px',
                paddingLeft: '1rem',
                paddingRight: '1rem',
              },
              // 'xs': '400px',
              '@screen xs': {
                // maxWidth: '290px',
                paddingLeft: '1rem',
                paddingRight: '1rem',
              },
              // 'sm' => '640px'
              '@screen sm': {
                maxWidth: '600px',
                paddingLeft: '0',
                paddingRight: '0',
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
 
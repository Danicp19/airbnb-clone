const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    container: {
      center: true,
    },
  
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      gray: {
        100: '#F7F7F7',
        200: '#DDDDDD',
        300: '#717171',
        400: '#484848',
        500: '#222222',
      },
      primary: '#FF385C',
      'transparent-black': 'rgba(0,0,0,0.4)',
    },
    extend: {},
  },
  variants: {
    extend: { 
    
    },
  },
  plugins: [
    // function ({ addComponents }) {
    //   addComponents({
    //     '.container': {
    //       maxWidth: '100%',
    //       margin: '0 auto',
    //       padding: '0 16px',
    //       '@screen sm': {
    //         padding: '0 24px',
    //       },
    //       '@screen md': {
    //         padding: '0 40px',
    //       },
    //       '@screen lg': {},
    //       '@screen xl': {
    //         padding: '0 72.5px',
    //       },
    //       '@screen 2xl': {
    //         maxWidth: '1760px',
    //       },
    //     },
    //   });
    // },
  ],
};
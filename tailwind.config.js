// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  theme: {
    colors: {
      white: '#ffffff',
      black: '#262626',
      'amber-100': '#FFECCC', //navOransje
      'amber-400': '#D47B00', //navOransjeDarken20
      'blue-100': '#D8F9FF', //navLysBla
      'blue-200': '#bfdbfe',
      'blue-400': '#368DA8', //navLysBlaDarken40
      'gray-100': '#F8F8F8',
      'gray-200': '#C6C2BF',
      'gray-800': '#3E3832',
      'green-100': '#CCF1D6', //grønn bakgrunn varselboks
      'green-200': '#72ba74',
      'green-400': '#06893A', //grønn ramme varselboks
      'purple-100': '#E0DAE7',
      'purple-200': '#5C4378',
      'red-100': '#F9D2CC', //rød bakgrunn varselboks
      'red-400': '#BA3A26', //rød ramme varselboks
      'sky-200': '#E0F5FB',
      'sky-400': '#4E737C',
      'stone-200': '#F1F1F1',
      'stone-400': '#6A6A6A',
      'yellow-200': '#FFECCC',
      'yellow-300': '#FFAA33',
    },
    fontSize: {
      xs: '14px',
      sm: '16px',
      base: '18px',
      lg: '20px',
      xl: '20px',
    },
    extend: {
      spacing: {
        16: '16px', // S
        20: '20px', // M
        24: '24px', // M+
        32: '32px', // L
        40: '40px', // XL
      },
    },
  },
  variants: {
    extend: {
      padding: ['first'],
      backgroundColor: ['odd'],
      borderWidth: ['last'],
    },
  },
  plugins: [],
};

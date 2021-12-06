module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    colors: {
      white: '#ffffff',
      black: '#262626',
      'gray-800': '#3E3832',
      'gray-100': '#F8F8F8',
      'gray-200': '#C6C2BF',
      'purple-100': '#E0DAE7',
      'purple-200': '#5C4378',
      'blue-400': '#0067C5',
      'red-200': '#F9D2CC',
      'red-400': '#A32A17',
      'sky-200': '#E0F5FB',
      'sky-400': '#4E737C',
      'yellow-200': '#FFECCC',
      'yellow-300': '#FFAA33',
      'yellow-400': '#D47B00',
      'stone-200': '#F1F1F1',
      'stone-400': '#6A6A6A',
      'green-200': '#72ba74',
      'green-400': '#48864d',
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

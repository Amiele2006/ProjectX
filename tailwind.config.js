/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xsm': { 'max': '413px' },
      'lg' : {'min':'768px'},
      'mobile' : {'min': '425px'}
    },
    extend: {
      spacing: {
        '97': '25rem',
        '98': '62rem',
        '99': '30.25rem',
        '13' : '3.125rem',
        '21': '5.125rem',
      },
    },
  },
  plugins: [],
}


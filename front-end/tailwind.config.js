const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/**/*.{html,js,jsx,ts,tsx,svelte}'],
  theme: {
    extend: {
      colors: {
        bayck:{
          1: '#e5e5e5',
          2: '#fca311',
          3: '#14213d',
          4: '#fcbc52'
        }
      }
    },
  },
  plugins: [],
}


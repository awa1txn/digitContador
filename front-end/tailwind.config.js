const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        purple:{
          1: '#F9F4F5',
          2: '#C8B8DB',
          3: '#70587C',
          4: '#502F4C',
        }
      }
    },
  },
  plugins: [],
}


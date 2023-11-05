/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      colors: {
        rich: '#00111E',
        oxford: '#00111E',
        platinum: '#e5e5e5',
        mandarin: '#FCA311',
      },
    },
  },
  plugins: [require('preline/plugin')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B8FAC',
        primary_v1: '#7BC1B7',
        primary_v2: '#677294',
        secondary: '#E5F1FE',
        secondary_v1: '#D2EBE7',
        accent: '#1648CE',
        coalBlack:"#232D42",
      },
      "boxShadow": {
        "blue_dropshadow": "2px 4px 20px 0px rgba(24,57,107,0.05)",
        "card_shadow": "0px 18px 40px 0px rgba(112,144,176,0.12)"
       },
    },
  },
  plugins: [],
};
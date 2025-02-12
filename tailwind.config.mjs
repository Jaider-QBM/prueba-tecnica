/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing:{
        'extra-wide': '.30em',
        'extra-sm': '.50em',
        'extra-large' : '1.1em', 
        'extra-largex': '1.3em'
      },
      colors:{
        'custom-yellow': '#D99A4E',
        'yellow-dark': '#D99A4E',
      },
      
    },
  },
  plugins: [],
};

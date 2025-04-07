/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#009fe3',
        secondary: '#3aaa35',
        tertiary: '#010d33',
      },

      fontFamily: {
        // heading: ['"Open Sans"', 'sans-serif'], // For headings
        // body: ['"Average Sans"', 'sans-serif'], // For normal text,

        heading: ['"Nunito"', 'sans-serif'], // For headings
        body: ['"PT Sans"', 'sans-serif'], // For normal text
      },
    },
  },
  plugins: [],
};

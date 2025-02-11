/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': '#009fe3',
        'secondary': '#3aaa35',
        'tertiary': '#010d33',
      },
    },  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brandOrange: {
          DEFAULT: '#FDA429',
          light: '#FFC876',
          dark: '#F08C00',
        },
        brandBlue: {
          DEFAULT: '#0080FF',
          dark: '#006FE0',
        },
      },
      fontFamily: {
        // Handwritten / marker-style display face used for every section heading
        display: ['"Patrick Hand"', 'cursive'],
        // Rounded geometric sans used for nav, buttons, body copy
        sans: ['"Quicksand"', '"Nunito"', 'sans-serif'],
        body: ['"Nunito"', '"Quicksand"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};

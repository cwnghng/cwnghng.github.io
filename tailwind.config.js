/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#FF4081',
        secondary: '#448AFF',
        accent: '#B2FF59',
        dark: '#333333',
        light: '#FAFAFA',
      },
    },
  },
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: [
        'text-primary',
        'text-secondary',
        'text-accent',
        'text-light',
        'text-dark',

        'bg-primary',
        'bg-secondary',
        'bg-accent',
        'bg-light',
        'bg-dark',
      ],
    },
  },
  darkMode: 'class',
  plugins: [],
}

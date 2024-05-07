/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navBarText: {
          light: '#262625',
          dark: '#ebebeb',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['dark'],
    },
  },
  plugins: [],
}


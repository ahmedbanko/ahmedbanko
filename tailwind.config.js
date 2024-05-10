/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navBarText: {
          light: "#262625",
          dark: "#BDBDBD",
        },
        bodyText: {
          primaryLight: "#1a1a1a",
          primaryDark: "#ebebeb",
          secondaryLight: "#333333",
          secondaryDark: "#bababa",
        },
        bodyBg: {
          light: "#a5a5a5",
          dark: "#000000",
        },
      },
      gradientColorStops: (theme) => ({
        "custom-gradient-dark": {
          start: theme("colors.zinc.900"),
          via: theme("colors.zinc.800"),
          end: theme("colors.zinc.700"),
        },
        "custom-gradient-light": {
          start: theme("colors.zinc.300"),
          end: theme("colors.zinc.200"),
        },
      }),
    },
  },
  variants: {
    extend: {
      textColor: ["dark"],
      gradientColorStops: ["dark"],
    },
  },
  plugins: [],
};

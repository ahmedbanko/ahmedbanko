/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navBarText: {
          light: "#EEEEEE",
          dark: "#BDBDBD",
        },
        bodyText: {
          primaryLight: "#262625",
          primaryDark: "#ebebeb",
          secondaryLight: "#262625",
          secondaryDark: "#bababa",
        },
        bodyBg: {
          light: "#EEEEEE",
          dark: "#000000",
        },
        gradient: {
          lightStart: "#176B87",
          lightEnd: "#053B50",
          darkStart: "colors.zinc.900",
          darkVia: "colors.zinc.800",
          darkEnd: "colors.zinc.700",
        },
      },
      gradientColorStops: (theme) => ({
        "custom-gradient-dark": {
          start: theme("colors.zinc.900"),
          via: theme("colors.zinc.800"),
          end: theme("colors.zinc.700"),
        },
        "custom-gradient-light": {
          start: "#176B87",
          end: "#053B50",
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

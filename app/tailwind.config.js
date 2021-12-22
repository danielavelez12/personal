module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#evebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      slate: "#64748b",
      zinc200: "#e4e4e7",
      zinc300: "#d4d4d8",
      zinc400: "#a1a1aa",
      zinc600: "#52525b",
      blue: "#1e40af",
    },
    textColor: {
      dark: "#18181b",
      med: "#3f3f46",
      light: "#a1a1aa",
      white: "#f4f4f5",
      blue: "#1e40af",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

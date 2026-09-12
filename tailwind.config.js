module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: "#260b9caf",
        secondary: "#4e2edfaf",
        "primary-hover": "#1e086b",
        "light-bg": "#f5eeed",
        "dark-text": "#000000af",
        "light-green": "#C7FFB2",
        "primary-light": "#a78bfa",
        "secondary-light": "#c4b5fd",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        jacquard: ["Jacquard 12", "sans-serif"],
        azeret: ["Azeret Mono", "sans-serif"],
        della: ["Della Respira", "sans-serif"],
        sacramento: ["Sacramento", "sans-serif"],
        gideon: ["Gideon Roman", "Abril Fatface"],
      },
    },
  },
};

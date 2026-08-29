// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],
  css: ["animate.css"],
  googleFonts: {
    families: {
      Oswald: {
        wght: [300, 400, 500, 600, 700],
      },
      "Jacquard 12": true,
      "Azeret Mono": {
        wght: [300, 400, 500, 600, 700],
      },
      "Della Respira": true,
      Sacramento: true,
      "Abril Fatface": true,
      "Gideon Roman": true,
    },
  },
  devtools: { enabled: false },
  colorMode: {
    preference: "light", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
});

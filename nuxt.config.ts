// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MP9X98P9');`,
          tagPosition: "head",
        },
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MP9X98P9" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: "bodyOpen",
        },
      ],
    },
  },
  compatibilityDate: "2026-09-12",
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

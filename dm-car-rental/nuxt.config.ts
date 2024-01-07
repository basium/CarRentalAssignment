

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/fonts.css',
    '~/assets/css/app.css'
  ],
  runtimeConfig: {
    dmProxyUrl: "https://dm-assignment-commonshare.koyeb.app/api"
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  modules:[
    '@pinia/nuxt'
  ]
})

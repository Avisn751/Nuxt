export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr:true,
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
  ],
  build: {
    transpile: ['bootstrap']
  },
  plugins: [
    { src: '~/plugins/bootstrap.ts', mode: 'client' },
    { src: '~/plugins/fontawesome.ts', mode: 'client' }
  ],
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
 
})

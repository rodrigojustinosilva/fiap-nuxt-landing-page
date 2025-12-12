// Nuxt configuration for static landing page
export default defineNuxtConfig({
  modules: [],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  app: {
    head: {
      title: 'Landing Page',
      meta: [
        { name: 'description', content: 'Landing page construída com Nuxt e Tailwind.' }
      ]
    }
  },
  nitro: {
    preset: 'static'
  }
})
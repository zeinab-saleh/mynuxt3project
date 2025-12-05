import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    css: [
    'bootstrap/dist/css/bootstrap.min.css',
      '~/assets/css/main.css' 
  ],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  modules: [],

  // لكي يقرأ Nuxt ملفات JSON من خارج src
  nitro: {
    prerender: {
      crawlLinks: true
    }
  }
})

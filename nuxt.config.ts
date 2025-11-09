// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/strapi'],
  css: ['~/assets/css/main.css'],
  components: [{ path: "~/components", pathPrefix: false }],
  runtimeConfig: {
    public: {
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || "https://localhost:1337",
    },
  },
  strapi: {
    url: process.env.NUXT_PUBLIC_STRAPI_URL || "https://localhost:1337",
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
})
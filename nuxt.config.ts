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
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://vemianou.org",
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
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Association Vémianou - Pour un meilleur avenir',
      titleTemplate: '%s | Association Vémianou',
      meta: [
        {
          name: 'description',
          content: 'L\'Association Vémianou œuvre pour la promotion de la paix, de l\'unité et du vivre-ensemble au Togo. À travers des actions de sensibilisation, d\'éducation et de solidarité.',
        },
        {
          name: 'keywords',
          content: 'Association Vémianou, Togo, paix, unité, vivre-ensemble, solidarité, éducation, sensibilisation',
        },
        {
          name: 'author',
          content: 'Association Vémianou',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: 'Association Vémianou',
        },
        {
          property: 'og:locale',
          content: 'fr_FR',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@vemianou',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.NUXT_PUBLIC_SITE_URL || 'https://vemianou.org',
        },
      ],
    },
  },
})
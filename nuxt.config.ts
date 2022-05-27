import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        '@nuxtjs/style-resources'
    ],

    metaInfo: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,200;0,400;0,700;1,200&display=swap' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
      ]
    },

    css: [
        '~/assets/scss/_variables.scss',
        '~/assets/scss/_reset.scss',
        '~/assets/scss/_general.scss'
    ],

    publicRuntimeConfig: {
      SUPABASE_KEY: process.env.SUPABASE_KEY
    },
    
})
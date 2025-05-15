import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    'reka-ui/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@vee-validate/nuxt',
    '@nuxtjs/strapi',
    'nuxt-toast',
  ],

  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/uploads/logo.png' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  future: { compatibilityVersion: 4 }, compatibilityDate: '2024-11-01',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    families: [{ name: 'Lexend Deca', provider: 'google' }],
  },

  icon: {
    mode: 'svg',
  },

  image: {
    sirv: {
      baseURL: 'https://rophi-ccl.sirv.com/pti/',
    },
  },

})

import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/fonts', 
    '@vueuse/nuxt', 
    '@nuxt/eslint',
    'reka-ui/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@vee-validate/nuxt'
  ],

  future: { compatibilityVersion: 4 },

  fonts: {
    families: [{ name: 'Lexend Deca', provider: 'google' }],
  },

  icon: {
    mode: 'svg',
  }
})
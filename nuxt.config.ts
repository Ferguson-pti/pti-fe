import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

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
    '@vue-email/nuxt',
    '@nuxtjs/ngrok',
    '@pinia/nuxt',
    'shadcn-nuxt',
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

  runtimeConfig: {
    resendApiKey: process.env.NUXT_RESEND_API_KEY,
    resendEmail: process.env.NUXT_RESEND_EMAIL,
    resendName: process.env.NUXT_RESEND_NAME,
    strapiUrl: process.env.NUXT_STRAPI_BACKEND_URL,
    paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,

    public: {
      strapiurl: process.env.NUXT_PUBLIC_STRAPIURL,
    },
  },

  future: { compatibilityVersion: 4 }, compatibilityDate: '2024-11-01',

  nitro: {
    rollupConfig: {
      // @ts-expect-error deep nested type error
      plugins: [vue()],
    },
  },

  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
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
      baseURL: 'https://pti-ichst.sirv.com/pti/',
    },
  },

  ngrok: {
    authtoken: process.env.NGROK_AUTHTOKEN,
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
})

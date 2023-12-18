// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/app.scss'],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || 'https://api.example.com/'
    }
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-quasar-ui',
    '@nuxtjs/tailwindcss'
  ],
  pinia: {
    storesDirs: ['./store/**']
  },
  tailwindcss: {
    // specify your custom config file path (optional)
    configPath: '~/tailwind.config.ts'
  },
  quasar: {
    sassVariables: '~/assets/css/quasar.variables.scss',
    // iconSet: 'material-symbols-rounded',
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark'
    ],
    extras: {
      font: 'roboto-font'
    },
    components: {
      defaults: {
      }
    }
  }

})

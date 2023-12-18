import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'app.vue',
    'plugins/**/*.{js,ts}',
    'nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--q-primary)',
        secondary: 'var(--q-secondary)',
        accent: 'var(--q-accent)',
        tertiary: 'var(--q-tertiary)'
      }
    }
  },
  plugins: []
}

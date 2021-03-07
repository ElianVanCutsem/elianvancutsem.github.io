module.exports = {
  purge: {
    enabled: true,
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}'
    ],
    options: {
      safeList: ['dark']
    }
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    typography: ["responsive", "dark"],
    extend: {
      backgroundColor: ['dark', 'responsive'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}

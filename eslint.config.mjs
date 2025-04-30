// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {},
  ignores: ['*.css', '*.png', '*.ico', '*.txt', 'src/public/'],
})

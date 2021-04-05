module.exports = {
  purge: {
    content: ['./templates/**/*.twig'],

    // These options are passed through directly to PurgeCSS
    options: {
      safelist: [],
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

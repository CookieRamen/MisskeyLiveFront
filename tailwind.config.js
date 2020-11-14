require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: enablePurge,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

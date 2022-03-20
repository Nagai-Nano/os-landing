const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans]
      },
      colors: {
        primary: '#26B7D6',
        'primary-lv1': '#272F31',
        'primary-lv2': '#46656C',
        background: '#181818',
        'text-color': '#F9F9F7'
      }
    }
  },
  plugins: []
}

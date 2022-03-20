const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans]
      },
      colors: {
        primary: '#2ACBEE',
        background: '#181818',
        'text-color': '#F9F9F7'
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors : {
        brand: '#000000',
        circle: '#B70404',
        point: '#B70404',
        price: '#333333',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      }
    },
  },
  plugins: [],
}


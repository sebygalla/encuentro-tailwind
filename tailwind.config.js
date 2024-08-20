/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {

      backgroundImage: {
        portada: "url('../src/assets/image/galeria1.webp')",
        portadaDos: "url('../src/assets/image/1.webp')",
        spotify: "url('../src/assets/image/alabanza.webp')",
        cuarto: "url('../src/assets/image/cuartoUno.webp')",
        nubes: "url('../src/assets/image/nube.webp')",
        formulario: "url('../src/assets/image/formulario.webp')",
        fondo: "url('../src/assets/image/fondo.webp')",
        sanando: "url('../src/assets/image/sanando.webp')",
      },

    },



    fontFamily: {
      'sub': ["Borel", "cursive"],
      'title': ["Lato", "sans-serif"],
      'links': ["Roboto", "sans-serif"],
  }
},
  plugins: [require('tailwindcss-animated')],

  colors: {
    colorUno: '#04aec7',
    secondary: '#c7fe05',
    // ...
  },

};

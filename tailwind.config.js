/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {




    extend: {

 

 
      backgroundImage: {
        portada: "url('../src/assets/image/galeria1.png')",
        "portada-dos": "url('../src/assets/image/1.jpg')",
        "portada-tres": "url('../src/assets/image/portada3.jpg')",
        "portada-cuatro": "url('../src/assets/image/portada29.png')",
        testimonio: "url('../src/assets/image/portada20.png')",
        about: "url('../src/assets/image/portada9.png')",
        spotify: "url('../src/assets/image/spotify.jpg')",
        fondo: "url('../src/assets/image/fondo.webp')",
        rehma: "url('../src/assets/image/blob.svg')",
        patron: "url('../src/assets/image/patron.svg')",
        cuarto: "url('../src/assets/image/cuarto2.jpg')",
        nubes: "url('../src/assets/image/nube.jpg')",
        formulario: "url('../src/assets/image/formulario.png')",
      },

    },

    fontFamily: {
      'sub': ["Borel", "cursive"],
      'title': ["Lato", "sans-serif"],
      'links': ["Roboto", "sans-serif"],
  }
},
  plugins: [],

};

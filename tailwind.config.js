/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {

      colors:{

        //color principal de la web
        'color-principal': '#04AEC7',

         //color secundariio de la web
        'color-secundario': '#C7FE05',

        //color button
        'color-button': '#00497D',

        //colorn degradado
        'color-degradado': 'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%',
      },

      backgroundImage: {
        portada: "url('../src/assets/image/galeria1.webp')",
        portadaDos: "url('../src/assets/image/1.webp')",
        spotify: "url('../src/assets/image/piano.webp')",
        cuarto: "url('../src/assets/image/cuartoUno.webp')",
        nubes: "url('../src/assets/image/nube.webp')",
        formulario: "url('../src/assets/image/formulario.webp')",
        fondo: "url('../src/assets/image/fondo.webp')",
        sanando: "url('../src/assets/image/sanando.webp')",

        iglesia: "url('../src/assets/image/iglesia.webp')",
      },

    },



    fontFamily: {
      'sub': ["Borel", "cursive"],
      'title': ["Lato", "sans-serif"],
      'links': ["Roboto", "sans-serif"],
  }
},
  plugins: [require('tailwindcss-animated')],





};

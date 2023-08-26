/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {




    extend: {

 

 
      backgroundImage: {
        portada: "url('../src/assets/image/galeria1.webp')",
        "portada-dos": "url('../src/assets/image/1.webp')",
    
        spotify: "url('../src/assets/image/spotify.jpg')",
     
    
        cuarto: "url('../src/assets/image/cuarto.jpg')",
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

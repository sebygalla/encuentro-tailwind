/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Open Sans", "Poppins", "Monserrat",
      'Dancing Script', 'cursive',
],
      
    },

    extend: {
      backgroundImage: {
        'portada': "url('../src/assets/image/main2.png')",
        'portada-dos': "url('../src/assets/image/1.jpg')",
        'testimonio': "url('../src/assets/image/portada20.png')",
        'fondo': "url('../src/assets/image/fondo.webp')",
        
        
      }

  
    },
  },
  plugins: [],
};

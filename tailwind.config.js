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
        'portada': "url('../src/assets/image/portada7.png')",
        'testimonio': "url('../src/assets/image/portada20.png')",
        
      }

  
    },
  },
  plugins: [],
};

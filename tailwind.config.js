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
        'portada': "url('../src/assets/image/pastor.jpg')",
        'testimonio': "url('../src/assets/image/portada20.png')",
        'portadaMobile': "url('../src/assets/image/portada9.png')",
        
      }

  
    },
  },
  plugins: [],
};

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
        'testimonio': "url('../src/assets/image/portada2.jpg')",
        
      }

  
    },
  },
  plugins: [],
};

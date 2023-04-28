/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Open Sans", "Poppins", "Monserrat"],
    },

    extend: {
      backgroundImage: {
        'main': "url('../../src/assets/image/main2.png')",
      }
    },
  },
  plugins: [],
};

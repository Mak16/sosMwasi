/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // ✅ ajoutez cette ligne
"./src/**/*.{js,jsx,ts,tsx}" // ✅ ajoutez cette ligne
],
  theme: {
    extend: {
      colors:{
        "blue": "#0096F5",
        "pink":"#F5119C"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}


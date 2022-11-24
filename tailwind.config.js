/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        vt323: "vt323",
        Rampart: ["Rampart One","cursive"],
        Rubik: ["Rubik Glitch", "cursive"],
        Dancing: ["Dancing Script", "cursive"],
        
      }
    },
  },
  plugins: [],
}
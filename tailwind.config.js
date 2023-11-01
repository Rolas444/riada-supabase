/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#5C3D2E",//"#EE6C4D",
        secondary:{
          100: "#1E1F25",
          900: "#131517"
        },
        menu: "#CA965C",
        soft: "#B85C38",
        invert: "#E0C097"
      }
    },
  },
  plugins: [],
}


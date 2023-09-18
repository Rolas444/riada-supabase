/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#A34A28",//"#EE6C4D",
        secondary:{
          100: "#1E1F25",
          900: "#131517"
        },
        menu: "#A34A28",
        soft: "#F58B54",
        invert: "#DFDDC7"
      }
    },
  },
  plugins: [],
}


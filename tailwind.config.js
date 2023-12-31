/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#0067FF",
        yellowColor:"#FEB60D",
        purpleColor:"#9771FF",
        textColor:"#4E545F",
        headingColor:"#181A1E",
        irisBlueColor:"#01B5C5",
      },
      boxShadow:{
        panelShadow: "rgba(17,12,46,0.15) 0px 48px 100px 0px;",
      }
    },
  },
  plugins: [],
}
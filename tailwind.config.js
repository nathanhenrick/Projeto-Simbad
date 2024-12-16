/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlue: "#F0F8FF",
        myBlack: "#0E1216",
        myDarkRed: "#A31621",
        myDarkBlue: "#053C5E",
        myCyan: "#46CAE4",
        myLightRed: "#DB222A",
        myGreenConfirmation: "#38ED7D",
      },
    },
  },
  plugins: [],
};
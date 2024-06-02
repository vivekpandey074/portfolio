/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:["Roboto", "sans-serif"],
        singleDay:['"Single Day"', "sans-serif"],
        Dmsans:['"DM Sans"', "sans-serif"],
        Calsans:['CalSans-SemiBold',"sans-serif"],
      }
    },
  },
  plugins: [],
}


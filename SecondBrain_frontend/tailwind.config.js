/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "1":"#5047e2",
        "2":"#e0e9ff",
        "3":"#e0e9ff"
      }
    },
  },
  plugins: [],
}


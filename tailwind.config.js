/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#009edb"
      }
    },
    container: {
      center: true,
      padding: {
        DEAFULT: "20px",
        md: "30px"
      }
    }
  },
  plugins: [],
}
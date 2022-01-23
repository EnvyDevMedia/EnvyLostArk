module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        dorado : '#bfa251',
        noche : '#FBEED9',
        lightcard : '#FDF6EA',
        darkcard: ' #1c1f26',

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

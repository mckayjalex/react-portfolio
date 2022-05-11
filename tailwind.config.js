module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
         roboto: 'Roboto'
        },
        backgroundImage: {
          'sortameal': "url('./components/pages/assets/sortameal.jpg')",
          'guru': "url('./components/pages/assets/guru.jpg')",
          'techblog': "url('./components/pages/assets/techblog.jpg')",
          'codequiz': "url('./components/pages/assets/codequiz.jpg')",
        }
      },
    },
  plugins: [],
}
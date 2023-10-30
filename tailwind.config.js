/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'container-image': "url('/src/static/bg-container.svg')",
        'body-image': "url('/src/static/bg-body.svg')"
      },
      backgroundColor: {
        'pink-button': '#FFAEB8'
      },
      borderRadius: {
        'homepage-image': '40px'
      },
    },
  },
  plugins: [],
}

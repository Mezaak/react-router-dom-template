/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'discord-grey': '#0f0f0f',
      }
      
    },
    fontFamily : {
    }
  },
  plugins: [],
}


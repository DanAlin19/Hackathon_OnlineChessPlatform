/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'mobile': '200px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation:{
        blob: "blob 10s infinite"
      },
      keyframes:{
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(.7)",
            opacity: .6,
          },
          "33%": {
            transform: "translate(50px, -100px) scale(1)",
            opacity: .1,
          },
          "66%": {
            transform: "translate(-40px, 20px) scale(0.5)",
            opacity: .4,
          },
          "100%": {
            transform: "translate(0px, 0px) scale(.7)",
            opacity: .6,
          },
        }
      }
    },
  },
  plugins: [],
}

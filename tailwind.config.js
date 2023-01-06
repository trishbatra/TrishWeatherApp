/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace']
      }
    }
  },
  plugins: [],
}
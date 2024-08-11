/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        edu: ["edu", "serif"],
      },
    colors: {
      'tan': '#f1ddbf',
      'forest-purple': '#524275',
      'green-deep': '#004d40',
      'green-light': '#ccffcc'
    }
    },
  },
  plugins: [],
}


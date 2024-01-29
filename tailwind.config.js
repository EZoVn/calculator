/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-body': "var(--bg-body)",
        'background-color-input': "var(--background-input-color)",
        'color': "var(--color)",
        'number-color': "var(--number-color)",
        'touch-color': "var(--touch-color)",
      }
    },
  },
  plugins: [{
    autoprefixer: {},
  }],
}


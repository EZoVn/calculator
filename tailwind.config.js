/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-body': "var(--bg-body)",
        'background-input-color': "var(--background-input-color)",
        'color': "var(--color)",
        'number-color': "var(--number-color)",
        'touch': "var(--touch)",
        'bg-calculator': "var(--bg-calculator)",
        'number-color-delete': "var(--number-color-delete)",
        'touch-equals': "var(--touch-equals)",
        'touch-shadow': "var(--touch-shadow)",
        'touch-shadow-delete': "var(--touch-shadow-delete)",
        'touch-shadow-equals': "var(--touch-shadow-equals)",
        'touch-hover': "var(--touch-hover)",
        'touch-hover-delete': "var(--touch-hover-delete)",
        'touch-hover-equals': "var(--touch-hover-equals)",
      }
    },
  },
  plugins: [{
    autoprefixer: {},
  }],
}


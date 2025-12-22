module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./public/**/*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

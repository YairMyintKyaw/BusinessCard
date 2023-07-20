/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1D3557",
        secondary: "#F1FAEE",
        logo_color: "#E63946",
      },
    },
  },
  plugins: [],
};

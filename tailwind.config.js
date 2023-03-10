/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(250px, 1fr))",
        cart: "repeat(auto-fit, minmax(250px,350px))",
      },
    },
  },
  plugins: [],
};

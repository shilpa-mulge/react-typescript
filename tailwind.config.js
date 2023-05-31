/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "700px" },
      lg: { max: "1100px" },
    },
    extend: {},
    fontFamily: {
      sig: ["Great Vibes"],
    },
  },

  plugins: [],
};

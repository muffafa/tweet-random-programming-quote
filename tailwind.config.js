/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      colors: {
        twitter: {
          50: "#F5F8FA",
          100: "#E1E8ED",
          200: "#AAB8C2",
          300: "#657786",
          400: "#61bdf5",
          500: "#1da1f2",
          600: "#1a91d9",
          700: "#1679b5",
          800: "#116191",
          900: "#14171a",
        },
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};

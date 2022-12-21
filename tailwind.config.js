/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.5rem",
    },
    extend: {
      boxShadow: {
        "card-shadow": "0px 0px 15px rgba(141, 140, 140, 0.15)",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/images/hero-bg.jpg')",
        "hero-bg-dark": "url('/assets/images/hero-bg-dark.jpg')",
        "cta-bg": "url('/assets/images/cta-bg.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        casablanca: {
          50: "#fef9ee",
          100: "#fdf2d7",
          200: "#fae2ae",
          300: "#f7cc7a",
          400: "#f4b355",
          500: "#ef9220",
          600: "#e17815",
          700: "#ba5b14",
          800: "#944818",
          900: "#783d16",
        },
        bone: {
          50: "#faf7f2",
          100: "#f3ede1",
          200: "#e3d6be",
          300: "#d4bf9d",
          400: "#c2a175",
          500: "#b68a59",
          600: "#a8774e",
          700: "#8c6042",
          800: "#724e3a",
          900: "#5d4131",
        },
        'chathams-blue': {
          50: "#ecfaff",
          100: "#cff1fe",
          200: "#a5e4fc",
          300: "#67d1f9",
          400: "#22b6ee",
          500: "#069cd4",
          600: "#0884b2",
          700: "#0e6d90",
          800: "#155b75",
          900: "#164e63",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

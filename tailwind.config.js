/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: "#dfe2fe",
          200: "#e2e5fe",
          300: "#e5e8fe",
          400: "#e9ebfe",
          500: "#eceefe",
          600: "#eff1ff",
        },
        snowish: {
          100: "#b1cbfa",
          200: "#b9d0fb",
          300: "#c1d5fb",
          400: "#c8dbfc",
          500: "#d0e0fc",
          600: "#d8e5fd",
        },
        lipsing: {
          100: "#8e98f5",
          200: "#99a2f6",
          300: "#a5adf7",
          400: "#b0b7f8",
          500: "#bbc1f9",
          600: "#bbc1f9",
        },
        slateMedium: {
          100: "#7971ea",
          200: "#867fec",
          300: "#948dee",
          400: "#a19cf0",
          500: "#afaaf2",
          600: "#bcb8f5",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};

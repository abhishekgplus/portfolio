/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",   // 👈 ADD THIS LINE
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
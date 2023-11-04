/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      serif: ["Playfair Display", "sans"],
      sans: ["Poppins", "sans"],
    },
  },
  plugins: [],
};

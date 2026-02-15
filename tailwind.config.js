/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E7",
        sageDark: "#3F6B52",
        ink: "#1B1F1D",
      },
    },
  },
  plugins: [],
};

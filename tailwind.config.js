/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      'sans':['Poppins', 'sans-serif'],
      'serif':['Playfair Display', 'serif']
    },
   
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};

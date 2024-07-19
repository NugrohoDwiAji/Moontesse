/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Primary": "#141125",
        "Secondary": "#C68F5C",
        "Secondary-brief22":"#E8D2BE",
        "ne50":"#3D4755"
      },
      fontFamily: {
        "sans":["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

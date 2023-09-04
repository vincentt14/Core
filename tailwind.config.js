/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        primary: "#727272",
        secondary: "#0c0c0d",
        tertiary: "#111",
        borderColor: "#3e3e3e",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        mulish: ["Mulish"],
      },
      fontWeight: {
        medium: "700",
      },
      colors: {
        primary: "#2E4E92",
      },
    },
  },
  plugins: [],
};

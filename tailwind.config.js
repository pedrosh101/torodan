/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clr1: "#539165",
        clr2: "#3F497F",
        clr3: "#F7C04A",
        clr4: "#F8F5E4",
      },
      fontFamily: {
        avenirbook: ["AVENIRBOOK"],
        avenirheavy: ["AVENIRHEAVY"],
        acc: ["ACC"],
      },
      lineHeight: {
        '12': '4.5rem',
      },
      fontSize: {
        '5xl': '3.3rem',
      },
    },
  },
  plugins: [],
};

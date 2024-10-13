/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3F35", 
        secondary: {
          DEFAULT: "#D4A373", 
          100: "#C19A6B", 
          200: "#B08968", 
        },
        black: {
          DEFAULT: "#3C3B3D", 
          100: "#2C2A2B", 
          200: "#1F1E1F", 
        },
        gray: {
          100: "#D3C6B1", 
          200: "#B0A399", 
          300: "#8D7D74", 
        },
        offwhite: "#F5F1E3", 
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        // Optionally, you could use a vintage serif font if desired
        vintageSerif: ["Merriweather", "serif"], // Example of a serif font
      },
    },
  },
  plugins: [],
};

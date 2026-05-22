/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        horizontalright: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        horizontalrightmore: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(125%)" },
          "100%": { transform: "translateX(0%)" },
        },
        horizontalleft: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        horizontalleftmore: {
          "0%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(-125%)" },
          "100%": { transform: "translateX(0%)" },
        },
        verticaltopbottom: {
          "0%": {
            top: "10%",
          },
          "50%": {
            top: "80%",
          },
          "100%": {
            top: "10%",
          },
        },
      },

      animation: {
        "waving-hand": "wave 2s linear infinite",
        "horizontal-move-r": "horizontalright 2s ease-in-out infinite",
        "horizontal-move-more-r": "horizontalrightmore 2s ease-in-out infinite",
        "horizontal-move-l": "horizontalleft 2s ease-in-out infinite",
        "horizontal-move-more-l": "horizontalleftmore 2s ease-in-out infinite",
        "vertical-move": "verticaltopbottom 15s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

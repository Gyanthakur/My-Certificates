/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Ensure you have defined --background in your CSS variables
        foreground: "var(--foreground)", // Ensure you have defined --foreground in your CSS variables
      },
      keyframes: {
        borderMove: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        borderMoveRtL: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        borderMovey: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        borderMoveydown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        borderMove: "borderMove 3s linear infinite",
        borderMoveRtL: "borderMoveRtL 3s linear infinite",
        borderMovey: "borderMovey 3s linear infinite",
        borderMoveydown: "borderMoveydown 3s linear infinite",
      },
    },
  },
  plugins: [],

  
};


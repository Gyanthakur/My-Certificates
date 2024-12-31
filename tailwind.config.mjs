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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        // Horizontal movement from left to right
        borderMove: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        // Horizontal movement from right to left
        borderMoveRtL: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // Vertical movement from top to bottom
        borderMovey: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        // Vertical movement from bottom to top
        borderMoveydown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        // Horizontal movement animation
        borderMove: 'borderMove 3s linear infinite',
        borderMoveRtL: 'borderMoveRtL 3s linear infinite',
        // Vertical movement animation
        borderMovey: 'borderMovey 3s linear infinite',
        borderMoveydown: 'borderMoveydown 3s linear infinite',
      },
    },
  },
  plugins: [],
};

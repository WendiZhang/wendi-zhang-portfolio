/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#131514",
        paper: "#f7f5ef",
        warm: "#eee9df",
        surface: "#151918",
        accent: "#aa9acb",
        "accent-dark": "#75649c",
        contact: "#c9c0dc",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)",
      },
    },
  },
  plugins: [],
};

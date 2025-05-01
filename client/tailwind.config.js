export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f6ff",
          100: "#e0eeff",
          200: "#c7deff",
          300: "#a4caff",
          400: "#78acff",
          500: "#4d8bff", // Professional blue
          600: "#3b6ef0",
          700: "#2f59db",
          800: "#2847b3",
          900: "#253d8d",
        },
      },
      keyframes: {
        blob: {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        blob: "blob 10s infinite",
        fadeIn: "fadeIn 1s ease-in",
        slideIn: "slideIn 1s ease-out",
      },
      backgroundImage: {
        "skills-gradient":
          "linear-gradient(38.73deg, rgba(45, 212, 191, 0.15) 0%, rgba(45, 212, 191, 0) 50%), linear-gradient(141.27deg, rgba(45, 212, 191, 0) 50%, rgba(45, 212, 191, 0.15) 100%)",
      },
    },
  },
  plugins: [],
};

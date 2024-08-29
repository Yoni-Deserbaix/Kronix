/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B9FD50",
        background: "#111204",
        text: "#FFFFFF",
        bgCard: "#222222",
        lightGray: "#CDD0D8",
        borderGray: "#d9d9d9",
        bgGray: "#f9f9f9",
        darkGray: "#9593A4",
      },
      fontFamily: {
        jarkarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};

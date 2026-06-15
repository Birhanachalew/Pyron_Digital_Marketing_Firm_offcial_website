module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandButton: "#7B2FFF",
        brandHeadline: "#9B5FFF",
        brandAccent: "#6010EE",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(12px, -10px, 0) scale(1.03)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        drift: "drift 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

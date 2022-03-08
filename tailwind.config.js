module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: "hsl(226, 43%, 10%)",
          200: "hsl(235, 46%, 20%)",
          300: "hsl(235, 45%, 61%)",
          400: "hsl(236, 100%, 87%)",
        },

        primary: {
          blue: "hsl(246, 80%, 60%)",
          LightRed: "hsl(15, 100%, 70%)",
          SoftBlue: "hsl(195, 74%, 62%)",
          Light: "hsl(348, 100%, 68%)",
          LimeGreen: "hsl(145, 58%, 55%)",
          Violet: " hsl(264, 64%, 52%)",
          SoftOrange: "hsl(43, 84%, 65%)",
        },
      },

      fontFamily: {
        Rubik: "'Rubik', sans-serif",
      },
    },
  },
  plugins: [],
};

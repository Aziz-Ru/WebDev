/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "my-color": "#202940",
        "hover-color": "#1ee3dc",
      },
      keyframes: {
        up: {
          "0%": {
            transform: "translateY(-300%)",
            color: "red",
          },
          "100%": {
            color: "Green",
          },
        },
      },
      animation: {
       up :"up 100s linier 1",
      },
    },
  },
  plugins: [],
};

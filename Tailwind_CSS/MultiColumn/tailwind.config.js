/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    extend: {
      animation:{
        'spin-slow':'spin 3s 5'
      },
      keyframes:{
        spin:{
          '0%':{
            transform:'translateX(-200%)'
            },
        }
      }
    },
  },
  plugins: [],
};

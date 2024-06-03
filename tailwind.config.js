/** @type {import('tailwindcss').Config} */
module.exports = {
 /** @type {import('tailwindcss').Config} */

 content:[ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar::-webkit-scrollbar': {
          'display':'none!important',  // Chrome, Safari, Opera
        },
      }, ['responsive']);
    },
  ],
}


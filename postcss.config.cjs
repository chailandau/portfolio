/** @type {import('postcss').Postcss} */
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-lightningcss": {
      browsers: ">= .25%",
    },
  },
};

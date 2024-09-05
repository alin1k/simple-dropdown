/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    './src/stories/**/*.{js,jsx,ts,tsx}' // Include Storybook stories as well
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


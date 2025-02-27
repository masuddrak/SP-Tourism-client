/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Playfair Display', 'serif'],
      'body': ["Open Sans"]
    }
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require("daisyui")],

}


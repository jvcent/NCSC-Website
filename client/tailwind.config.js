/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'txt': '#071d07',
        'background': '#def7df',
        'primary': '#259827',
        'secondary': '#d6f5d6',
        'accent': '#32cd34', 
      },
    },
  },
  plugins: [],
}


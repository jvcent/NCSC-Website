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
        'background2': '#86D089',
        'primary': '#74DB75',
        'secondary': '#d6f5d6',
        'accent': '#32cd34', 
        'logo': '#24A74A', 
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",
        secondary: "#1E40AF",
        accent: "#FFC107",
        background: "#F8FAFC",
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '35px',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

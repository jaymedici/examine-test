/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'heading': ['Lora', 'serif'],
    },
    extend: {
      colors: {
        examinePurple: '#562E69',
        infoBox: 'rgba(37, 161, 175, 0.1)',
        infoBoxBold: '#25A1AF'
      },
    },
  },
  plugins: [],
}

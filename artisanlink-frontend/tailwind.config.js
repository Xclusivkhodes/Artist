/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  colors: {
    secondary: '#91398b',
    accent: '#502779',
    background: '#f9aad0',
    border: '#E1E8ED',
    text: '\FFFFFF',
  },
    extend: {
      fontFamily: {
        'poppins-medium': ['Poppins Medium', 'sans-serif'],
        'poppins-light': ['Poppins Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


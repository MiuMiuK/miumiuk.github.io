/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', '"Arial Narrow"', '"Noto Sans SC"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

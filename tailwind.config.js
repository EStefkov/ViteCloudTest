/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00aaff',
        secondary: '#8a2be2',
        background: '#f0f0f0',
        dark: '#121212',
      },
    },
  },
  plugins: [],
};

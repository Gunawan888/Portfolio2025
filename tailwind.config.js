/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'bounce-slow': 'bounceSlow 2s infinite',
        'gradient': 'gradientShift 3s ease infinite',
      },
    },
  },
  plugins: [],
};
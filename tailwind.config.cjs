/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1204px',
      },
      padding: {
        DEFAULT: '0.75rem',
      },
    },
    extend: {
      gradientColorStops: {
        'gradient-text': 'bg-gradient-to-b from-[#ffff] to-[#AEBCE1]',
      },
    },
  },
  plugins: [],
};

import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      scale: { 98: '0.98', 102: '1.02' },
    },
  },
  plugins: [animate],
};

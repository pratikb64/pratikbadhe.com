const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './pages/**/**/*.{ts,tsx}',
    './pages/**/**/**/*.{ts,tsx}',
    './pages/**/**/**/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/components/**/**/*.{ts,tsx}',
    './src/components/**/**/**/*.{ts,tsx}',
    './src/components/**/**/**/**/*.{ts,tsx}',
    './src/components/**/**/**/**/**/*.{ts,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: '#FFD43B',
        'primary-black': '#141517',
        'secondary-black': '#1A1B1E',
        'accent-black': '#5A5A5A',
      },
      fontFamily: {
        'ibm-mono': ['IBM Plex Mono', ...defaultTheme.fontFamily.sans],
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

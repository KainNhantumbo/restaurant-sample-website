/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '420px',
        'mobile-x': '480px',
        
      },
      colors: {
        transparent: 'transparent',
        error: { DEFAULT: '#FD384F', light: '#FD384F', dark: '#FD384F' },
        font: { DEFAULT: '#5F6368', light: '#5F6368', dark: '#C6C5CD' },
        black: { DEFAULT: '#101010', light: '#101010', dark: '#1B1E20' },
        white: { DEFAULT: '#fff', light: '#fff', dark: '#FCFCFC' },
        primary_a: { DEFAULT: '#E3C49A', light: '#E3C49A', dark: '#E3C49A' },
        primary_b: { DEFAULT: '#F7AB36', light: '#F7AB36', dark: '#F7AB36' },
        primary_c: { DEFAULT: '#274637', light: '#274637', dark: '#274637' },
        background: { DEFAULT: '#F6F9F7', light: '#F6F9F7', dark: '#1B1B1F' },
        foreground: { DEFAULT: '#FFFFFF', light: '#FFFFFF', dark: '#27282D' }
      }
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      'sans-serif': ['Cinzel','Bitter', 'sans-serif']
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        error: { DEFAULT: '#BE123C', light: '#BE123C', dark: '#BE123C' },
        font: { DEFAULT: '#CBD0D0', light: '#CBD0D0', dark: '#CBD0D0' },
        black: { DEFAULT: '#101010', light: '#101010', dark: '#1B1E20' },
        white: { DEFAULT: '#fff', light: '#fff', dark: '#FCFCFC' },
        primary_a: { DEFAULT: '#E3C49A', light: '#E3C49A', dark: '#E3C49A' },
        primary_b: { DEFAULT: '#F7AB36', light: '#F7AB36', dark: '#F7AB36' },
        primary_c: { DEFAULT: '#274637', light: '#274637', dark: '#274637' },
        background: { DEFAULT: '#F6F9F7', light: '#F6F9F7', dark: '#1B1E20' },
        foreground: { DEFAULT: '#FFFFFF', light: '#FFFFFF', dark: '#33373A' }
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      'sans-serif': ['Zilla_Slab', 'sans-serif']
    }
  },
  plugins: []
};

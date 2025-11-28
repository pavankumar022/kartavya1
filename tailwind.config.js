/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige-light': '#FBE9DD',
        'beige-medium': '#F8E2D4',
        'beige-pale': '#FAF5F0',
        'orange-primary': '#E4552C',
        'green-secondary': '#1C7C3B',
        'brown-soft': '#8B6F47',
        'brown-dark': '#6B4E3D',
        'dark-red': '#8B0000',
        'dark-red-light': '#A52A2A',
        'dark-gray': '#1F2937',
        'dark-gray-light': '#374151',
      },
      fontFamily: {
        'sans': ['Roboto Slab', 'serif'],
        'nav': ['Noto Serif', 'serif'],
      },
      fontSize: {
        'xs': '0.875rem',
        'sm': '1rem',
        'base': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '3.75rem',
        '6xl': '4.5rem',
        '7xl': '5rem',
      },
    },
  },
  plugins: [],
}


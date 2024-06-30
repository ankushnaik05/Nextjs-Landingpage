/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.css'
  ],
  theme: {

    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {

      height: {
        '88': '22rem', // Add custom height class
      },

      gridTemplateColumns: {
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      spacing: {
        '22.5': '5.625rem', // 22.5 * 0.25rem = 5.625rem
        '26': '6.5rem',
        '40': '10rem',
        '50': '12.5rem',
        '52': '13rem',
      },
      scale: {
        '30': '0.3',
        '35': '0.35',
        '40': '0.4',
        '20': '0.2',
        '32' : '0.32',
        '25' : '0.25',
        '70' :  '0.7',
        '60' :  '0.6',
        
      },
      zIndex: {
        '1': '1',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 10s linear infinite',
        'slide-right': 'slide-right 10s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

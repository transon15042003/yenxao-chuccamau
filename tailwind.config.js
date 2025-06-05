/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/mdx-components.tsx'],
  theme: {
    extend: {
      height: {
        header: 'var(--header-height)',
        content: 'calc(100vh - var(--header-height))'
      },
      spacing: {
        'header-height': 'var(--header-height)'
      },
      zIndex: {
        top: 'var(--top-layer-z-index)',
        cart: 'var(--cart-layer-z-index)'
      },
      fontFamily: {
        primary: ['var(--font-primary)']
      },
      colors: {
        primary: {
          DEFAULT: '#D62C35',
          light: '#FF4148',
          dark: '#B4071A'
        },
        secondary: {
          DEFAULT: '#FFEB70'
        },
        typo: {
          1: '#424B5A',
          2: '#2A2A40',
          3: '#5E6971'
        },
        ground: {
          1: '#F5F5F5'
        },
        blog: {
          1: '#202020',
          2: '#132238',
          3: '#353A3E'
        }
      },
      backgroundImage: {
        'primary-gradient-90': 'linear-gradient(90deg, #920202 0%, #B4071A 100%)',
        'primary-dark-gradient-360': 'linear-gradient(360deg, #670000 0%, #920202 100%)',
        'secondary-gradient-180': 'linear-gradient(180deg, #E6B522 0%, #FFF788 47% ,#FFE059 100%)',
        'secondary-gradient-90': 'linear-gradient(90deg, #E6B522 0%, #FFF788 47% ,#FFE059 100%)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar')]
};

import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif']
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        light: {
          primary: '#635FC7',
          onPrimary: '#FFFFFF',

          background: '#F4F7FD',

          surface: '#FFFFFF',
          onSurface: '#000112',

          lines: '#E4EBFA',

          neutral: '#828FA3'
        },

        dark: {
          primary: '#635FC7',
          onPrimary: '#FFFFFF',

          background: '#20212C',

          surface: '#2B2C37',
          onSurface: '#FFFFFF',

          lines: '#3E3F4E',

          neutral: '#828FA3'
        },

        danger: '#EA5555',
        onDanger: '#FFFFFF',

        hover: {
          primary: '#A8A4FF',
          danger: '#FF9898'
        }
      },

      fontSize: {
        'heading-sm': [
          '0.75rem',
          {
            lineHeight: '0.938rem',
            letterSpacing: '0.15rem',
            fontWeight: '700'
          }
        ],
        'heading-md': [
          '0.938rem',
          {
            lineHeight: '1.188rem',
            fontWeight: '700'
          }
        ],
        'heading-lg': [
          '1.125rem',
          {
            lineHeight: '1.438rem',
            fontWeight: '700'
          }
        ],
        'heading-xl': [
          '1.5rem',
          {
            lineHeight: '1.875rem',
            fontWeight: '700'
          }
        ],
        'body-md': [
          '0.75rem',
          {
            lineHeight: '0.9375rem',
            fontWeight: '700'
          }
        ],
        'body-lg': [
          '0.8125rem',
          {
            lineHeight: '1.4375rem',
            fontWeight: '500'
          }
        ]
      }
    }
  },

  plugins: [forms, containerQueries]
}

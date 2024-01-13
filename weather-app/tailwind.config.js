/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["*"],
  theme: {

    extend: {

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.4' }],
        sm: ['0.875rem', { lineHeight: '1.4' }],
        base: ['1rem', { lineHeight: '1.4' }],
        xl: ['1.25rem', { lineHeight: '1.4' }],
        '3xl': ['2rem', { lineHeight: '1.4' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },

    }

  },
  plugins: [],
}


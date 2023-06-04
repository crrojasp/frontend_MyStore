module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#F7FAFC',
        },
      },
      borderColor: {
        colors: {
          light: {
            DEFAULT: '#E2E8F0',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss/plugins'),
    require('@tailwindcss/forms'),
    require('tailwindcss-border-colors'),
  ],
}

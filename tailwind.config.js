module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        orange: {
          100: '#FFEDD5',
          200: '#FED7A0',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316', // Default orange
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A2D00',
          900: '#7A1E00',
        },
        primary: '#1DA1F2'
      },
      screens: {
        md: '900px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};

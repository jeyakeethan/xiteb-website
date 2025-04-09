module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
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

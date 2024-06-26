import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Color
        primary: {
          50: '#D0D3D1',
          100: '#BAC0BA',
          150: '#A3ADA3',
          200: '#8C9A8D',
          250: '#758776',
          300: '#5F6B61',
          350: '#4E5950',
          400: '#3D473F',
          450: '#2C352E',
          500: '#1B241D',
          600: '#141A16',
          700: '#0E1210',
          800: '#08090A',
          900: '#030303'
        },
        // Secondary Color
        secondary: {
          50: '#A3B5C9',
          100: '#8CA3C1',
          150: '#748EB8',
          200: '#5D7BAF',
          250: '#4568A6',
          300: '#2E559D',
          350: '#174294',
          400: '#00378B',
          450: '#002D7A',
          500: '#002469',
          600: '#001E58',
          700: '#001847',
          800: '#001236',
          900: '#000C25'
        },
        blue: {
          50: '#d6e8f3',
          100: '#bfddec',
          150: '#a8d2e6',
          200: '#91c7e0',
          250: '#7abcd7',
          300: '#63b0d1',
          350: '#4ca4cb',
          400: '#3598c5',
          450: '#1e8ebb',
          500: '#1780a9',
          600: '#126b8c',
          700: '#0e5770',
          800: '#0a4254',
          900: '#062d38'
        },
        // Standard colors
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};

export default config;

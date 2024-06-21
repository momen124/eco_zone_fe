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
        'primary': {
          '50': '#FFEBEE',
          '100': '#FFCDD2',
          '200': '#EF9A9A',
          '300': '#E57373',
          '400': '#EF5350',
          '500': '#FF204E', // Base Primary
        },

        // Secondary Color
        'secondary': {
          '50': '#F8E3E8',
          '100': '#F0B8C4',
          '200': '#E08DA0',
          '300': '#D0627C',
          '400': '#C03758',
          '500': '#A0153E', // Base Secondary
        },

        // Rich Purple Color
        'rich-purple': {
          '50': '#F2E6F1',
          '100': '#D9B8DA',
          '200': '#C18BC4',
          '300': '#A95EAE',
          '400': '#913198',
          '500': '#5D0E41', // Base Rich Purple
        },

        // Deep Blue Color
        'deep-blue': {
          '50': '#E6EAF1',
          '100': '#C1C9DA',
          '200': '#9CA8C4',
          '300': '#7787AE',
          '400': '#526698',
          '500': '#00224D', // Base Deep Blue
        },
      },
    },
  },
  plugins: [],
};

export default config;

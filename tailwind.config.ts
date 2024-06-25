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
          '50': '#987070',
          '100': '#987070',
          '200': '#153448',
          '300': '#DBB5B5'
         }, // Base Primary

          // Secondary Color
        'secondary': {
          '50': '#987070',
          '100': '#C39898',
          '250': '#DBB5B5',
          '280': '#C39898',
          '300': '#DBB5B5'
        }, // Base Secondary

          // Button Color
          "button": {
          '50': "#C39898",
          '150': "#DBB5B5",
          '250': "#987070"
        }, // Base Button

        // Budy Color
        'body': {
          '350': "#F1E5D1"
        }, // Base Budy

        // Form Color
        'form': {
          '402': "#C39898",
          '450': "#987070"
        }, // Base Form
      },
    },
  },
  plugins: [],
};

export default config;

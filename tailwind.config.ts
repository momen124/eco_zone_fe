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
        "header": {
          "logo": "#176B87",
          "items": "#176B87",
          "items-hover": "#86B6F6",
          "background": "#B4D4FF"
        },
        "footer": {
          "items": "#176B87",
          "items-hover": "#86B6F6",
          "title": "#176B87",
          "title-hover": "#86B6F6",
          "background": "#B4D4FF"
        },

        "button": {
          "text": "#176B87",
          "background": "#176B87",
          "background-hover": "#86B6F6"
        },

        "body": {
          "background": "#EEF5FF"
        },

        "form": {
          "text": "#176B87",
          "title": "#176B87"
        },
      },
    },
  },
  plugins: [],
};

export default config;

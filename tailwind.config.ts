import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        black: {
          500: '#4F5665',
          600: '#0B132A',
          800: '#29313A',
        },
        orange: {
          100: '#FFECEC',
          500: '#F53855',
        },
        green: {
          500: '#789395',
          300: '#94B49F',
          100: '#B4CFB0',
        },
        white: {
          300: '#F8F8F8',
          500: '#fff',
        },
        gray: {
          100: '#EEEFF2',
          400: '#AFB5C0',
          500: '#DDDDDD',
          700: '#C8C8C8',
        },
        red: {
          500: '#ef4444',
        },
        purple: {
          100: '#F2F5F9',
          200: '#E5EBF3',
          300: '#D8E2ED',
          900: '#8BA5C3',
        },
        aqua: {
          100: '#6DD4C9',
          200: '#4CC4B8',
        },
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Alegreya: ['Alegreya', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

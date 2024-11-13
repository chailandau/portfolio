import containerQueries from '@tailwindcss/container-queries';
import plugin from 'tailwindcss/plugin';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      accent: {
        pink: '#ffcfef',
        aqua: '#a6ffea',
        green: '#efffd9',
      },
      common: {
        white: '#f7f9ff',
        black: '#0a1109',
      },
      gray: {
        100: '#f3f4ff',
        500: '#656a7c',
      },
      primary: {
        100: '#eae7ff',
        200: '#d7efff',
        300: '#b4baff',
        500: '#3422ff',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
      mono: ['var(--font-ibm-plex-mono)'],
    },
    fontSize: {
      '2xs': ['0.875rem', '1.125'],
      xs: ['1rem', '1.75'],
      sm: ['1.25rem', '1.875'],
      md: ['1.375rem', '2'],
      lg: ['1.5rem', '3'],
      xl: ['1.625rem', '3.375'],
      '2xl': ['1.75rem', '3.25'],
      '3xl': ['2rem', '3.5'],
      'display-2xs': ['1.5rem', '1.875'],
      'display-xs': ['1.875rem', '2.25'],
      'display-sm': ['2rem', '2.5'],
      'display-md': ['2.25rem', '2.75'],
      'display-lg': ['2.5rem', '3'],
      'display-xl': ['3rem', '3.625'],
      'display-2xl': ['3.375rem', '4'],
      'display-3xl': ['4rem', '4.5'],
    },
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      xxl: '1600px',
    },
  },
  plugins: [
    containerQueries,
    plugin(function ({ addComponents, addVariant }) {
      addVariant('interact', ['&:hover', '&:focus-visible']);
      addVariant('group-interact', ['.group:hover &', '.group:focus-visible &']);
      addComponents({
        '.justify-inherit': {
          justifyContent: 'inherit',
        },
        '.object-inherit': {
          objectFit: 'inherit',
        },
      });
    }),
  ],
};
export default config;

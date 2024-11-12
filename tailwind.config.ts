import containerQueries from '@tailwindcss/container-queries';
import plugin from 'tailwindcss/plugin';

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
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

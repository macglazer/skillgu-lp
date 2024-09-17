import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '2px': '2px',
        '3x': '12px',
        '10px': '10px', // cta-banner
        '24px': '24px', // cta-banner
        '32px': '32px', // cta-banner
        '40px': '40px', // cta-banner
        '57px': '57px', // cta-banner
        '88px': '88px', // padding
      },
      fontFamily: {
        artist: ['Alkatra', 'system-ui'],
      },
      fontSize: {
        '56px': '56px',
        '48px': '48px',
        '40px': '40px',
        '32px': '32px',
        '18px': '18px',
        '16px': '16px',
        '14px': '14px',
        '12px': '12px',
      },
      // screens: {
      //   'xl': '1200px',
      // },
      lineHeight: {
        '100.8px': '100.8px', // cta-banner
        '72px': '72px', // cta-banner
      },
      boxShadow: {
        radio: '0 0 0 1px #252B61',
      },
      colors: {
        primary: '#252B61',
        secondary: '#FF6A3D',
        secondaryLight: '#FFEFEA',
        base000: '#FFFFFF',
        base200: '#F8F8FB',
        base400: '#E2E9FC',
        base600: '#8E9ABB',
        base800: '#56658F',
        error100: '#F51F59',
        error200: '#F9EBEB',
        success100: '#34C759',
        success200: '#EBF9EE',
        warning100: '#FCA004',
        warning200: '#FFFBED',
        'white-11': 'rgba(255, 255, 255, 0.11)',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('autoprefixer'),
    require('tailwindcss'),
  ],
}
export default config

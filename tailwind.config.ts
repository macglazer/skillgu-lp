import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '3x': '12px',
        '10px': '10px', // cta-banner
        '24px': '24px', // cta-banner
        '32px': '32px', // cta-banner
        '40px': '40px', // cta-banner
        '57px': '57px', // cta-banner
        '88px': '88px', // padding
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
      lineHeight: {
        '100.8px': '100.8px', // cta-banner
        '72px': '72px', // cta-banner
      },
      colors: {
        primary: '#252B61',
        secondary: '#FF6A3D',
        secondaryLight: '#FFEFEA',
        'white-11': 'rgba(255, 255, 255, 0.11)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

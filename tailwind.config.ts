import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1380px',
      },
      boxShadow: {
        base: '0px 1px 10px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        25: '6.25rem',
        50: '12.5rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem',
        },
      },
      colors: {
        white: '#FEFEFF',
        black: '#0D0D0D',
      },
      fontFamily: {
        iranyekan: 'IRANYekan',
      },
    },
  },
}
export default config

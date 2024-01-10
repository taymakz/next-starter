import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

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
  plugins: [nextui(
    {
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
      },
    }

  )],

}
export default config

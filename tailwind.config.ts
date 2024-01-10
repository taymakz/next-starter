import type { Config } from 'tailwindcss'
const svgToDataUri = require("mini-svg-data-uri");
const { nextui } = require("@nextui-org/react");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
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
  plugins: [
    nextui(
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

    ),
    require("@tailwindcss/aspect-ratio"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },

  ],

}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}


export default config



import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Serif fonts for headings and emphasis
        'serif': ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        // Sans-serif for body text and UI
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Lane's brand colours
        'lane': {
          'blue': '#66899b',
          'brown': '#9b7866', 
          'grey': '#b0b0b0',
          'blue-dark': '#5a7a8a',
          'brown-dark': '#8a6b58',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            // Override prose styling for Lane
            h1: {
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '700',
            },
            h3: {
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '600',
            },
            h4: {
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
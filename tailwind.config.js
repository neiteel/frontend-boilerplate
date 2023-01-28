const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

const calcModularScale = (maxPx, minPx, maxViewport = 1920, minViewport = 768) => {
  const maxRem = maxPx / 16
  const minRem = minPx / 16
  const maxViewportRem = maxViewport / 16
  const minViewportRem = minViewport / 16
  const calc = `calc(${minRem}rem + (${maxRem} - ${minRem}) * ((100vw - ${minViewportRem}rem) / (${maxViewportRem} - ${minViewportRem})))`

  const min = Math.min(minRem, maxRem)
  const max = Math.max(minRem, maxRem)

  const clamp = `clamp(${min}rem, ${calc}, ${max}rem);`

  // const minMax = `min(max(${min}rem, ${calc}), ${max}rem)`

  return clamp
}

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.js',
    './wordpress/views/**/*.{twig,html}',
    './static-site/**/*.{twig,html}'
  ],
  theme: {
    fontFamily: {
      serif: ['Noto Serif TC', ...defaultTheme.fontFamily.sans],
      sans: ['Lato', 'Noto Sans TC', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.green[800],
          lighten: colors.green[100]
        },
        secondary: {
          DEFAULT: colors.blue[100]
        }
      },
      lineHeight: {
        relaxed: 1.75
      },
      borderRadius: {
        xl: ' 0.625rem'
      },
      fontSize: {
        '3.5xl': '2rem',
        'f-1': [calcModularScale(80, 64)]
      },
      screens: {
        fhd: '1920px',
        'hover-hover': {
          raw: '(hover: hover),(-ms-high-contrast: active), (-ms-high-contrast: none)'
        }
      },
      spacing: {
        6.5: '1.625rem',
        7.5: '1.875rem',
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        30: '7.5rem'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            '--tw-prose-counters': theme('colors.gray[900]'),
            h2: {
              fontWeight: 400
            }
          }
        }
      })
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}

const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    "./src/**/*.vue"
  ],
  experimental: {
    uniformColorPalette: true,
    extendedSpacingScale: true,
  },
  theme: {
    extend: {
      fontSize: {
        'xxs': '.65rem',
      },
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      colors: {
        'sidebar-dark': '#313947',
        'sidebar-light': '#ffffff',
      },
      cursor: {
        'resize-x': 'ew-resize'
      },
      opacity: {
        '10': '.1',
        '90': '.9',
      },
      zIndex: {
        '1': 1,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme('colors.indigo.600'),
            textDecoration: 'none',
            '&:hover': {
              color: theme('colors.indigo.400'),
            },
          },
        },
      },
    }),
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
    opacity: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    zIndex: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      const utilWidth = {
        '.max-w-7xl': {
          'max-width': '80rem',
        },
        '.max-w-8xl': {
          'max-width': '90rem',
        },
        '.max-w-9xl': {
          'max-width': '105rem',
        },
        '.max-w-10xl': {
          'max-width': '120rem',
        },
      }

      const utilShadowOutlineColors = {
        '.shadow-outline-gray': {
          'box-shadow': '0 0 0 3px rgba(166, 177, 199, .35)',
        },
        '.shadow-outline-red': {
          'box-shadow': '0 0 0 3px rgba(229, 62, 62, .45)',
        },
        '.shadow-outline-orange': {
          'box-shadow': '0 0 0 3px rgba(221, 107, 32, .45)',
        },
        '.shadow-outline-yellow': {
          'box-shadow': '0 0 0 3px rgba(214, 158, 46, .45)',
        },
        '.shadow-outline-green': {
          'box-shadow': '0 0 0 3px rgba(56, 161, 105, .45)',
        },
        '.shadow-outline-teal': {
          'box-shadow': '0 0 0 3px rgba(49, 151, 149, .45)',
        },
        '.shadow-outline-blue': {
          'box-shadow': '0 0 0 3px rgba(49, 130, 206, .45)',
        },
        '.shadow-outline-indigo': {
          'box-shadow': '0 0 0 3px rgba(90, 103, 216, .45)',
        },
        '.shadow-outline-purple': {
          'box-shadow': '0 0 0 3px rgba(128, 90, 213, .45)',
        },
        '.shadow-outline-pink': {
          'box-shadow': '0 0 0 3px rgba(213, 63, 140, .45)',
        },
      }

      const utilBgPatterns = {
        '.pattern-dots-sm': {
          'background-image': 'radial-gradient(currentColor 0.5px, transparent 0.5px)',
          'background-size': 'calc(10 * 0.5px) calc(10 * 0.5px)',
        },
        '.pattern-dots-md': {
          'background-image': 'radial-gradient(currentColor 1px, transparent 1px)',
          'background-size': 'calc(10 * 1px) calc(10 * 1px)',
        },
        '.pattern-dots-lg': {
          'background-image': 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
          'background-size': 'calc(10 * 1.5px) calc(10 * 1.5px)',
        },
        '.pattern-dots-xl': {
          'background-image': 'radial-gradient(currentColor 2px, transparent 2px)',
          'background-size': 'calc(10 * 2px) calc(10 * 2px)',
        },
      }

      addUtilities(utilWidth)
      addUtilities(utilShadowOutlineColors, ['focus'])
      addUtilities(utilBgPatterns)
    }),
  ],
}
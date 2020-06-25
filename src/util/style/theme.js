/* eslint-disable prefer-destructuring */
/**
 * This is our custom theme where we define global styles.
 * It should serve as a guideline for styling, but not all styles *have* to be taken from here.
 */
const breakpoints = ['576px', '768px', '992px', '1200px', '375px']

//  Aliases
breakpoints.xs = breakpoints[4]
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

/**
 * Primary: Colors to use for actionable items, such as links, buttons etc.
 * Grey: Colors for items that are not that important
 */
const colors = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  primary: {
    1: '#ff9801',
    2: '#512da8',
  },
  general: '#181a1b',
  section: '#ffffff',
  segment: '#f8f8f8',
  pageBackground: '#ffffff',
}

const darkColors = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  primary: {
    1: '#c27400',
    2: '#4721a1',
  },
  general: '#ffffff',
  section: '#1f2223',
  segment: '#181a1b',
  pageBackground: '#181a1b',
}

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [
  '0',
  '4px',
  '8px',
  '16px',
  '24px',
  '32px',
  '64px',
  '128px',
  '256px',
]

/**
 * Typographic scale
 */
const fontSizes = [
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '48px',
  '64px',
  '96px',
  '128px',
]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = {
  normal: 400,
  semibold: 600,
}

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em',
}

/**
 * Border-radius
 */
const radii = ['0', '2px', '4px', '8px', '16px']

export const theme = {
  name: 'Default',
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
}

export const darkTheme = {
  name: 'Dark',
  breakpoints,
  colors: darkColors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
}

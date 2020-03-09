import Typography from 'typography'

const typography = new Typography({
  title: 'Default',
  googleFonts: [
    {
      name: 'Quicksand',
      styles: ['300', '400', '500', '700'],
    },
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Quicksand', 'sans-serif'],
  bodyFontFamily: ['Quicksand', 'sans-serif'],
  scaleRatio: 2.441,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
  }),
})

export default typography

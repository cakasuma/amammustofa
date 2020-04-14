import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from '@style/GlobalStyles'
import { ThemeProvider, theme } from '@style'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
      <footer>hello footer</footer>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }

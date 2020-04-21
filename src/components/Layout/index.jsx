import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from '@style/GlobalStyles'
import { ThemeProvider, theme } from '@style'
import Footer from '@components/Footer'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }

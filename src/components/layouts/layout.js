import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from '@style/GlobalStyles'
import { ThemeProvider, theme } from '@style'
import { ScrollTop } from '@components/elements'
import Footer from './footer'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
      <Footer />
      <ScrollTop />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

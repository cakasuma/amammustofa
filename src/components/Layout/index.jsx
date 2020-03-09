import React from 'react'
import PropTypes from 'prop-types'
import Footer from '@components/Footer'
import { Box } from '@components/Grid'
import { OutboundLink } from '@components/Link'
import GlobalStyles from '@style/GlobalStyles'
import { ThemeProvider, theme } from '@style'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Box>
        {children}
        <Box mt={3}>
          <Footer>
            Built with
            {` `}
            <OutboundLink to="https://www.gatsbyjs.org" from="footer">
              Gatsby
            </OutboundLink>
          </Footer>
        </Box>
      </Box>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }

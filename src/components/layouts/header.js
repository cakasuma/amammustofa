import React from 'react'
import PropTypes from 'prop-types'

import { Link, Text } from '@components/elements'
import { Box } from '@components/containers'

const Header = ({ siteTitle }) => (
  <Box as="header" bg="primary.800" px={3} py={3} mb={4}>
    <Box maxWidth="700px" m="0 auto">
      <Link to="/" css={{ textDecoration: 'none' }}>
        <Text as="h1" color="white">
          {siteTitle}
        </Text>
      </Link>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ data, className, children }) => (
  <BackgroundImage
    Tag="section"
    className={className}
    fluid={data.childImageSharp.fluid}
  >
    {children}
  </BackgroundImage>
)

BackgroundSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
}

BackgroundSection.defaultProps = {
  className: 'background-image',
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection

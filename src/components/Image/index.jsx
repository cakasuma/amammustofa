// TODO: replace image.js completely with this component
import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const QueryImage = ({ data, alt, width, height, className }) => {
  return (
    <Img
      alt={alt}
      fluid={data.childImageSharp.fluid}
      width={width}
      className={className}
      height={height}
    />
  )
}

QueryImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.object,
  height: PropTypes.string,
  width: PropTypes.string,
}
export default QueryImage

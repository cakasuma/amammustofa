import React from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from 'react-ga'

const ExternalLink = ({ to, from, target, children, className, download }) => (
  <a
    href={to}
    target={target}
    className={className}
    rel="noopener"
    onClick={() => {
      GoogleAnalytics.event({
        category: 'Outbound Link',
        action: `[clicked] ${from}`,
        label: to,
      })
    }}
    download={download}
  >
    {children}
  </a>
)

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  download: PropTypes.bool,
}

ExternalLink.defaultProps = {
  target: ``,
  className: ``,
}

export default ExternalLink

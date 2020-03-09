/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const GoogleAnalytics = require('react-ga')
const website = require('./config/website')

/**
 * Initialize Google Analytics
 */
exports.onClientEntry = () => {
  GoogleAnalytics.initialize(website.googleAnalyticsId)

  // if (!(`IntersectionObserver` in window)) {
  //   // eslint-disable-next-line no-unused-expressions
  //   import(`intersection-observer`)
  //   // eslint-disable-next-line no-console
  //   console.log(`# IntersectionObserver is polyfilled!`)
  // }
}

const website = require('./config/website')
const languages = require('./languages')

const pathPrefix = website.pathPrefix === `/` ? `` : website.pathPrefix

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    pathPrefix,
    siteUrl: website.url + pathPrefix,
    title: website.title,
    titleTemplate: website.titleTemplate,
    description: website.description,
    image: website.image,
    siteLanguage: website.siteLanguage,
    headline: website.headline,
    author: website.author,
    twitter: website.twitter,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `./config/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
      options: {
        disabledFeatures: [`shorthands`, `cloning`, `currying`],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
   
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            const { path } = edge.node
            const pathArray = path.split('/')
            const currentLang = pathArray[1]
            const checkLang = currentLang.replace('-', '_')
            let currentPage = path
            const keyLanguages = Object.keys(languages)

            if (keyLanguages.includes(checkLang)) {
              pathArray.splice(1, 1)
              currentPage = pathArray.join('/')
            }

            const sitemapLangs = keyLanguages.concat(['x-default'])

            const links = sitemapLangs.map((locale) => {
              const replacedLocale = locale.replace('_', '-')

              const isDefault = locale === 'en' || locale === 'x-default'
              const hrefLocale = isDefault ? '' : `/${replacedLocale}`
              const href = `${site.siteMetadata.siteUrl}${hrefLocale}${currentPage}`

              return { lang: replacedLocale, url: href }
            })

            return {
              url: site.siteMetadata.siteUrl + path, // https://sitemaps.com/page-path
              changefreq: 'daily',
              priority: 0.7,
              links,
            }
          }),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: website.googleAnalyticsId,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.shortName,
        description: website.description,
        start_url: `${pathPrefix}/?utm_source=a2hs`,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: `standalone`,
        icon: website.favicon,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/locales`,
        languages: Object.keys(languages),
        defaultLanguage: `en`,
        siteUrl: website.url + pathPrefix,

        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
  ],
}

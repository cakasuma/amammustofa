import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Layout, Seo } from '@components/layouts'
import AboutMe from './_home/_about-me'
import Interests from './_home/_interests'

const IndexPage = () => {
  const { t } = useI18next()
  return (
    <Layout>
      <Seo
        title={t('Home | About | Amam')}
        decription={t(
          'Developer | Teacher | trying to be blogger.. -- Code | Manga | Eat are my favorites'
        )}
      />
      <AboutMe />
      <Interests />
    </Layout>
  )
}

export default IndexPage

import React from 'react'
import { Link, Text } from '@components/elements'
import { Seo, Layout } from '@components/layouts'
import { useI18next } from 'gatsby-plugin-react-i18next'

const NotFoundPage = () => {
  const { t } = useI18next()
  return (
    <Layout>
      <Seo title={t('404 — Not found')} />
      <Text as="h2" mb={3}>
        {t('Not found')}
      </Text>
      <Text mr="1.6rem">
        {t('You just hit a route that doesn&#39;t exist... the sadness.')}
      </Text>
      <Link to="/">{t('Take me home.')}</Link>
    </Layout>
  )
}

export default NotFoundPage

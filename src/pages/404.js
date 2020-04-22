import React from 'react'
import { Link, Text } from '@components/elements'
import { Seo, Layout } from '@components/layouts'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 — Not found" />
    <Text as="h2" mb={3}>
      Not found
    </Text>
    <Text mr="1.6rem">
      You just hit a route that doesn&#39;t exist... the sadness.
    </Text>
    <Link to="/">Take me home.</Link>
  </Layout>
)

export default NotFoundPage

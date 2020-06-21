import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Switcher } from '@components/localization'
import { Box } from '@components/containers'
import { Text } from '@components/elements'

const Footer = () => {
  const { t } = useI18next()
  return (
    <Box as="footer" p="80px 20px 180px">
      <Text as="h2" mb="20px" textAlign="center" color="general">
        Amam Mustofa
      </Text>
      <Text textAlign="center" color="general">
        &copy; {t('Copyright 2020 - All rights reserved')}
      </Text>
      <Switcher />
    </Box>
  )
}

export default Footer

import React from 'react'
import { Box } from '@components/Grid'
import { Text } from '@components/Text'

const Footer = () => (
  <Box as="footer" p="80px 20px">
    <Text as="h2" mb="20px" textAlign="center">
      Amam Mustofa
    </Text>
    <Text textAlign="center">&copy; Copyright 2020 - All rights reserved</Text>
  </Box>
)

export default Footer

import React from 'react'
import styled from '@style'
import { graphql, useStaticQuery } from 'gatsby'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next'
import { Image } from '@components/images'
import { Container, Flex, Box } from '@components/containers'
import {
  Text,
  ExLinkButton,
  LinkButton,
  ShadowTitle,
} from '@components/elements'
import { Wrapper } from './_components'

const query = graphql`
  query {
    image: file(relativePath: { eq: "man-standing.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query)
  const { t } = useI18next()
  return (
    <Wrapper>
      <Container>
        <Flex alignItems="center" justifyContent="center" mb={['0', '4rem']}>
          <ShadowTitle title={t('ABOUT ME')} />
        </Flex>
        <Flex flexWrap="wrap" p={{ lg: '0 50px', sm: '0 30px' }}>
          <Flex width={{ lg: 0.332, md: 1 }} justifyContent="center" mt="1rem">
            <ImageWrapper data={data.image} />
          </Flex>
          <Flex width={{ lg: 0.668, md: 1 }} flexDirection="column">
            <Text
              my={4}
              fontSize={4}
              lineHeight="36px"
              fontWeight="300"
              color="general"
            >
              <Trans i18nKey="shortDescription">
                Hello, I’m <strong key={0}>Amam Mustofa</strong>, an independent
                Frontend Developer based in Malaysia.
              </Trans>
            </Text>
            <Text mb={5} fontWeight="300" color="general">
              {t(
                'I always aim to take full responsibility and do my best, My purpose is to build long term, strong and mutually beneficial relationships with people or clients. and as a developer i have to make the most efficient way with concern of the clients to make a better program or system.'
              )}
            </Text>
            <Text as="h4" fontWeight="300" fontSize={4} mb={4} color="general">
              {t('Personal information')}
            </Text>
            <Ul mb={4}>
              <li>
                <Text color="general" fontWeight="300">
                  <strong>{t('Name:')}</strong> Mustofa Ghaleb Amami
                </Text>
              </li>
              <li>
                <Text color="general" fontWeight="300">
                  <strong>{t('Address:')}</strong> Cyberjaya, Malaysia
                </Text>
              </li>
              <li>
                <Text color="general" fontWeight="300">
                  <strong>{t('Birthday:')}</strong> 14 April 1998
                </Text>
              </li>
              <li>
                <Text color="general" fontWeight="300">
                  <strong>{t('Phone:')}</strong>{' '}
                  <a href="tel:+60182655318">+60 182 655 318</a>
                </Text>
              </li>
              <li>
                <Text color="general" fontWeight="300">
                  <strong>{t('Job:')}</strong> Front-end Developer
                </Text>
              </li>
              <li>
                <Text color="general" fontWeight="300">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:amammustofa@gmail.com">
                    amammustofa@gmail.com
                  </a>
                </Text>
              </li>
            </Ul>
            <Flex flexDirection={{ _: 'column', sm: 'row' }} mt={3}>
              <ExLinkButton
                to="/resume.pdf"
                from="download resume"
                download
                variant="primary"
                mr={{ _: '0', sm: 4 }}
                mb={{ _: 4, sm: '0' }}
              >
                {t('Download resume')}
              </ExLinkButton>
              <LinkButton to="/" variant="secondary">
                {t('Get in Touch')}
              </LinkButton>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Wrapper>
  )
}

const Ul = styled(Box).attrs({ as: 'ul' })`
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;

  & > li {
    width: 50%;
    float: left;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    & > li {
      width: 100%;
    }
  }
`

const ImageWrapper = styled(Image)`
  width: 280px;

  @media (max-width: 480px) {
    display: none;
  }
`

export default IndexPage

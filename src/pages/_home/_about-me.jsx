import React from 'react'
import styled from '@style'
import { graphql, useStaticQuery } from 'gatsby'
import Image from '@components/Image'
import { Container, Flex } from '@components/Grid'
import { Text } from '@components/Text'

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

const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
`

const LinedText = styled(Text)`
  position: relative;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 3px;
    background: #000;
    top: 100%;
    left: 0;
    margin-top: 10px;
  }
`

const Span = styled.span`
  position: absolute;
  top: -32px;
  z-index: 1;
  text-transform: uppercase;
  font-size: 100px;
  width: 100%;
  left: 0;
  color: #ff9801;
  opacity: 0.1;
  font-weight: 500;
  text-align: center;
`

const ImageWrapper = styled(Image)`
  width: 350px;
`

const IndexPage = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <Container>
        <Flex alignItems="center" justifyContent="center" mb="4rem">
          <LinedText as="h2">ABOUT ME</LinedText>
          <Span>ABOUT ME</Span>
        </Flex>
        <Flex flexWrap="wrap">
          <Flex width={{ lg: 0.332, md: 1 }} justifyContent="center">
            <ImageWrapper data={data.image} />
          </Flex>
          <Flex pl={{ lg: '15px' }} width={{ lg: 0.668, md: 1 }}>
            <Text my={4} fontSize={4} lineHeight="36px" fontWeight="300">
              Hello, I’m <strong>Mustofa Amami</strong>, an independent Frontend
              Developer based in Malaysia.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default IndexPage

import React from 'react'
import styled from '@style'
import { graphql, useStaticQuery } from 'gatsby'
import { Image } from '@components/images'
import { Container, Flex, Box } from '@components/containers'
import { Text } from '@components/elements'

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

const Ul = styled(Box).attrs({ as: 'ul' })`
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;

  & > li {
    width: 50%;
    float: left;
    padding-bottom: 5px;
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
  color: ${(props) => props.theme.colors.primary[1]};
  opacity: 0.1;
  font-weight: 500;
  text-align: center;

  @media (max-width: 480px) {
    display: none;
  }
`

const ImageWrapper = styled(Image)`
  width: 280px;

  @media (max-width: 480px) {
    display: none;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <Container>
        <Flex alignItems="center" justifyContent="center" mb={['0', '4rem']}>
          <LinedText as="h1" data-sal="fade">
            ABOUT ME
          </LinedText>
          <Span>ABOUT ME</Span>
        </Flex>
        <Flex flexWrap="wrap" p={['0', '0 50px']}>
          <Flex
            width={{ lg: 0.332, md: 1 }}
            justifyContent="center"
            mt="1rem"
            data-sal="slide-right"
          >
            <ImageWrapper data={data.image} />
          </Flex>
          <Flex width={{ lg: 0.668, md: 1 }} flexDirection="column">
            <Text
              my={4}
              fontSize={4}
              lineHeight="36px"
              fontWeight="300"
              data-sal="slide-left"
            >
              Hello, I’m <strong>Amam Mustofa</strong>, an independent Frontend
              Developer based in Malaysia.
            </Text>
            <Text mb={5} fontWeight="300" data-sal="slide-left">
              I always aim to take full responsibility and do my best, My
              purpose is to build long term, strong and mutually beneficial
              relationships with people or clients. and as a developer i have to
              make the most efficient way with concern of the clients to make a
              better program or system.
            </Text>
            <Text
              as="h4"
              fontWeight="300"
              fontSize={4}
              mb={4}
              data-sal="slide-left"
            >
              Personal information
            </Text>
            <Ul mb={4} data-sal="slide-left">
              <li>
                <Text fontWeight="300">
                  <strong>Name:</strong> Mustofa Ghaleb Amami
                </Text>
              </li>
              <li>
                <Text fontWeight="300">
                  <strong>Address:</strong> Cyberjaya, Malaysia
                </Text>
              </li>
              <li>
                <Text fontWeight="300">
                  <strong>Birthday:</strong> 14 April 1998
                </Text>
              </li>
              <li>
                <Text fontWeight="300">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+60182655318">+60 182 655 318</a>
                </Text>
              </li>
              <li>
                <Text fontWeight="300">
                  <strong>Job:</strong> Front-end Developer
                </Text>
              </li>
              <li>
                <Text fontWeight="300">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:amammustofa@gmail.com">
                    amammustofa@gmail.com
                  </a>
                </Text>
              </li>
            </Ul>
          </Flex>
        </Flex>
      </Container>
    </Wrapper>
  )
}

export default IndexPage

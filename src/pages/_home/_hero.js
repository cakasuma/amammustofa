import React from 'react'
import Typist from 'react-typist'
import { graphql, useStaticQuery } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import styled from '@style'
import Particles from 'react-particles-js'
import { Image } from '@components/images'
import { Text } from '@components/elements'
import { Flex } from '@components/containers'
import {
  FacebookF,
  Linkedin,
  Github,
  Instagram,
  Whatsapp,
} from '@styled-icons/fa-brands'
import { Mail } from '@styled-icons/feather/Mail'

const query = graphql`
  query {
    image: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  return (
    <StyledBackground>
      <ParticlesAbsolute
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
      <Flex
        maxWidth="1140px"
        width="80%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        m="0 auto"
      >
        <ImageWrapper data={data.image} />
        <Text
          as="h1"
          fontSize={{ _: '36px', s: '34px' }}
          mt="30px"
          mb="20px"
          color="white"
          fontWeight="bold"
        >
          Amam Mustofa
        </Text>
        <Flex mb="20px">
          <Typer />
        </Flex>
        <Flex
          width="100%"
          mt="12px"
          justifyContent="center"
          flexWrap="wrap"
          alignItems="center"
        >
          <SocialWrapper>
            <Li>
              <ItemWrapper href="https://www.facebook.com/amam.mustofa">
                <FacebookF />
              </ItemWrapper>
            </Li>
            <Li>
              <ItemWrapper href="mailto:amammustofa@gmail.com">
                <Mail width="16px" height="16px" />
              </ItemWrapper>
            </Li>
            <Li>
              <ItemWrapper href="https://www.linkedin.com/in/mustofa-ghaleb-amami/">
                <Linkedin width="16px" height="16px" />
              </ItemWrapper>
            </Li>
            <Li>
              <ItemWrapper href="https://github.com/cakasuma">
                <Github width="16px" height="16px" />
              </ItemWrapper>
            </Li>
            <Li>
              <ItemWrapper href="https://www.instagram.com/rahdinahmad/">
                <Instagram width="16px" height="16px" />
              </ItemWrapper>
            </Li>
            <Li>
              <ItemWrapper href="tel:+60182655318">
                <Whatsapp width="16px" height="16px" />
              </ItemWrapper>
            </Li>
          </SocialWrapper>
        </Flex>
      </Flex>
    </StyledBackground>
  )
}

const Typer = () => {
  const [count, setCount] = React.useState(1)
  const { t } = useI18next()

  React.useEffect(() => {
    setCount(1)
  }, [count])

  return (
    <>
      {count ? (
        <StyledTypist
          cursor={{ blink: true }}
          avgTypingDelay={80}
          onTypingDone={() => setCount(0)}
        >
          <span>{t('a Developer')}</span>
          <Typist.Backspace count={11} delay={200} />
          <span>{t('a Teacher')}</span>
          <Typist.Backspace count={9} delay={200} />
          <span>{t('a Blogger')}</span>
          <Typist.Backspace count={9} delay={200} />
        </StyledTypist>
      ) : (
        ''
      )}
    </>
  )
}

const ParticlesAbsolute = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledBackground = styled.div`
  padding: 90px 0 120px;
  position: relative;
  background: ${(props) => props.theme.colors.primary[2]};
`

const ImageWrapper = styled(Image)`
  width: 270px;
  height: 270px;
  border-radius: 50%;

  @media (max-width: 425px) {
    width: 220px;
    height: 220px;
  }
`

const StyledTypist = styled(Typist)`
  color: ${(props) => props.theme.colors.primary[1]};
  font-size: 30px;
  font-weight: bold;
`

const SocialWrapper = styled.ul`
  background: rgba(255, 152, 1, 0.3);
  display: inline-flex;
  padding: 0 30px;
  border-radius: 50px;
  list-style: none;
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    padding: 0;
  }
`

const ItemWrapper = styled.a`
  color: ${(props) => props.theme.colors.white};
  opacity: 0.4;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transition: all 0.25s;
  cursor: pointer !important;
  position: relative;

  & > svg {
    width: 20px;
    height: 20px;

    @media (max-width: 480px) {
      width: 13px;
      height: 13px;
    }
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary[1]};
    opacity: 1;
  }
`

const Li = styled.li`
  margin: 0;
  padding: 0 5px;
`

export default Hero

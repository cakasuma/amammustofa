import React from 'react'
import Typist from 'react-typist'
import styled from '@style'
import Particles from 'react-particles-js'
import Image from '@components/Image'
import { Text } from '@components/Text'
import { Flex } from '@components/Grid'
import {
  FacebookF,
  Linkedin,
  Github,
  Instagram,
  Whatsapp,
} from '@styled-icons/fa-brands'
import { Mail } from '@styled-icons/feather/Mail'

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
  height: fit-content;
`

const ItemWrapper = styled.a`
  color: ${(props) => props.theme.colors.white};
  opacity: 0.4;
  padding: 5px;
  display: block;
  transition: all 0.25s;
  cursor: default;

  &:hover {
    color: ${(props) => props.theme.colors.primary[1]};
    opacity: 1;
  }
`

const FB = styled(FacebookF)`
  height: 16px;
  width: 16px;
`

const Li = styled.li`
  margin: 0;
  padding: 0 5px;
`

const Hero = () => (
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
      <ImageWrapper />
      <Text
        as="h1"
        fontSize="36px"
        color="white"
        mt="30px"
        mb="20px"
        fontWeight="normal"
      >
        Hello Guys, I’m
        <strong> Amam Mustofa</strong>
      </Text>
      <Flex mb="20px">
        <Text mr="6px" fontSize="30px" color="white">
          I am
        </Text>
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
              <FB />
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

const Typer = () => {
  const [count, setCount] = React.useState(1)

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
          <span>a Developer</span>
          <Typist.Backspace count={11} delay={200} />
          <span>a Teacher</span>
          <Typist.Backspace count={9} delay={200} />
          <span>a Blogger</span>
          <Typist.Backspace count={9} delay={200} />
        </StyledTypist>
      ) : (
        ''
      )}
    </>
  )
}

export default Hero

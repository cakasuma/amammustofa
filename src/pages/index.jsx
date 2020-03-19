import React from 'react'
import Typist from 'react-typist'
import styled from '@style'
import { Layout } from '@components/Layout'
import BackgroundImage from '@components/BackgroundImage'
import Image from '@components/Image'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Flex } from '@components/Grid'
import {
  FacebookF,
  Google,
  Linkedin,
  Github,
  Instagram,
  Whatsapp,
} from '@styled-icons/fa-brands'

const StyledBackground = styled(BackgroundImage)`
  padding: 90px 0 120px;
`

const ImageWrapper = styled(Image)`
  width: 270px;
  height: 270px;
  border-radius: 50%;
`

const StyledTypist = styled(Typist)`
  color: ${props => props.theme.colors.primary[1]};
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
  color: ${props => props.theme.colors.white};
  opacity: 0.4;
  padding: 5px;
  display: block;
  transition: all 0.25s;

  &:hover {
    color: ${props => props.theme.colors.primary[1]};
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

const Contact = styled(Whatsapp)`
  width: 48px;
  height: 48px;

  & > path {
    fill: ${props => props.theme.colors.primary[1]};
  }
`

const A = styled.a`
  text-decoration: none;
  display: inline-flex;
  align-items: center;

  &:hover {
    ${Text} {
      color: ${props => props.theme.colors.primary[1]};
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO />
    <StyledBackground>
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
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems="center"
        >
          <SocialWrapper>
            <Li>
              <ItemWrapper href="#">
                <FB />
              </ItemWrapper>
            </Li>
            <Li>
              <ItemWrapper href="#">
                <Google width="16px" height="16px" />
              </ItemWrapper>
            </Li>
            <Li>
              <ItemWrapper href="#">
                <Linkedin width="16px" height="16px" />
              </ItemWrapper>
            </Li>
            <Li>
              <ItemWrapper href="#">
                <Github width="16px" height="16px" />
              </ItemWrapper>
            </Li>
            <Li>
              <ItemWrapper href="#">
                <Instagram width="16px" height="16px" />
              </ItemWrapper>
            </Li>
          </SocialWrapper>
          <Flex maxWidth={180} alignItems="center">
            <A href="#">
              <Contact />
              <Text
                color="grey.1"
                textDecoration="none"
                ml="10px"
                transition="color 0.25s"
              >
                Contact me
              </Text>
            </A>
          </Flex>
        </Flex>
      </Flex>
    </StyledBackground>
  </Layout>
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

export default IndexPage

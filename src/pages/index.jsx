import React from 'react'
import Typist from 'react-typist'
import styled from '@style'
import { Layout } from '@components/Layout'
import BackgroundImage from '@components/BackgroundImage'
import Image from '@components/Image'
import { SEO } from '@components/SEO'
import { Text } from '@components/Text'
import { Box, Flex } from '@components/Grid'

const StyledBackground = styled(BackgroundImage)`
  padding: 90px 0 120px;
`

const SectionWrapper = styled.div`
  display: flex;
  max-width: 1140px;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`

const ImageWrapper = styled(Image)`
  width: 270px;
  height: 270px;
  border-radius: 50%;
`

const StyledTypist = styled(Typist)`
  color: #ff9801;
  font-size: 30px;
  font-weight: bold;
`

const IndexPage = () => (
  <Layout>
    <SEO />
    <StyledBackground>
      <SectionWrapper>
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
          <strong> Amam</strong>
        </Text>
        <Box display="flex" mb="20px">
          <Text mr="6px" fontSize="30px" color="white">
            I am
          </Text>
          <Typer />
        </Box>
      </SectionWrapper>
    </StyledBackground>
  </Layout>
)

const Typer = () => {
  const [count, setCount] = React.useState(1)

  React.useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log('Count: ' + count)
    setCount(1)
  }, [count])

  return (
    <>
      {count ? (
        <StyledTypist
          cursor={{ blink: true }}
          avgTypingDelay={60}
          onTypingDone={() => setCount(0)}
        >
          <span>a Developer</span>
          <Typist.Backspace count={11} delay={200} />
          <span>a Creative thinker</span>
          <Typist.Backspace count={18} delay={200} />
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

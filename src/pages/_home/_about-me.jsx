import React from 'react'
import styled from '@style'
import { Container, Flex } from '@components/Grid'
import { Text } from '@components/Text'

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
`

const IndexPage = () => (
  <Wrapper>
    <Container flexDirection="column">
      <Flex alignItems="center" justifyContent="center">
        <LinedText as="h2">ABOUT ME</LinedText>
        <Span>ABOUT ME</Span>
      </Flex>
    </Container>
  </Wrapper>
)

export default IndexPage

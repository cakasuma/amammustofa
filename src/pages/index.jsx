import React from 'react'
import styled from '@style'
import { Layout } from '@components/Layout'
import { SEO } from '@components/SEO'
import Hero from './_home/_hero'
import AboutMe from './_home/_about-me'

const Main = styled.main`
  max-width: 1250px;
  box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.15);
  position: relative;
  margin: -90px auto 0;
  background: #fff;
  z-index: 10;
`

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <Main>
      <AboutMe />
    </Main>
  </Layout>
)

export default IndexPage

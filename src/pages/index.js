import React from 'react'
import styled from '@style'
import { Layout, Seo } from '@components/layouts'
import Hero from './_home/_hero'
import AboutMe from './_home/_about-me'

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <Main>
      <AboutMe />
    </Main>
  </Layout>
)

const Main = styled.main`
  max-width: 1250px;
  box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.15);
  position: relative;
  margin: -90px auto 0;
  background: #fff;
`

export default IndexPage

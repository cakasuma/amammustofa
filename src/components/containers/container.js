import styled from '@style'

import Box from './box'

const Container = styled(Box)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;

  @media (max-width: 576px) {
    width: 540px;
    max-width: 100%;
    padding-right: 30px;
    padding-left: 30px;
  }

  @media (min-width: 768px) {
    width: 720px;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    width: 960px;
    max-width: 100%;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    max-width: 100%;
  }

  @media (min-width: 1600px) {
    width: 1400px;
    max-width: 100%;
  }
`

Container.displayName = `Container`

export default Container

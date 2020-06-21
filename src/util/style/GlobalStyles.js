import { createGlobalStyle } from './index'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
  }

  strong {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #ff9801;

    &:hover {
      text-decoration: underline;
    }
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeProvider, theme, darkTheme } from '@style'
import GlobalStyles from '@style/GlobalStyles'
import { Moon, Sun } from '@styled-icons/fa-solid'

import { ScrollTop, Text } from '@components/elements'
import Nav from './nav'
import Footer from './footer'

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(true)
  const [date, setDate] = React.useState(new Date())

  React.useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  React.useEffect(() => {
    const hours = date.getHours()
    const isDayTime = hours > 6 && hours < 20
    setDarkMode(!isDayTime)
  }, [date])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Relative>
        <GlobalStyles />
        <Nav />
        {children}
        <Footer />
        <ScrollTop />
        <DarkMode
          isDarkMode={darkMode}
          onClick={() => setDarkMode(!darkMode)}
          date={date}
        />
      </Relative>
    </ThemeProvider>
  )
}

const DarkMode = ({ onClick, isDarkMode, date }) => (
  <Toggle onClick={onClick}>
    {isDarkMode ? <IcMoon /> : <IcSun />}
    <Text color="general">{date.toLocaleTimeString()}</Text>
  </Toggle>
)

const Relative = styled.div`
  background: ${(props) => props.theme.colors.pageBackground};
`

const Toggle = styled.div`
  border-radius: 6px;
  padding: 8px 16px;
  background: ${(props) => props.theme.colors.pageBackground};
  position: fixed;
  top: 15px;
  left: 15px;
  display: flex;
  cursor: pointer;
  align-items: center;
`

const iconStyle = css`
  color: ${(props) => props.theme.colors.primary[1]};
  width: 30px;
  height: 30px;
  margin-right: 8px;
`

const IcMoon = styled(Moon)`
  ${iconStyle}
`

const IcSun = styled(Sun)`
  ${iconStyle}
`

DarkMode.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

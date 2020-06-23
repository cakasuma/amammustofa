import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeProvider, theme, darkTheme } from '@style'
import GlobalStyles from '@style/GlobalStyles'
import { Moon, Sun } from '@styled-icons/fa-solid'
import { ScrollTop, Text } from '@components/elements'
import Nav, { NavButton, useNavClickOutside } from './nav'
import Footer from './footer'

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(true)
  const [nightMode, setNightMode] = React.useState(true)
  const [date, setDate] = React.useState(new Date())
  const [navOpen, setNavOpen] = React.useState(false)
  const navRef = React.useRef()

  useNavClickOutside(navRef, () => setNavOpen(false))

  React.useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    const hours = date.getHours()
    const isDayTime = hours > 6 && hours < 20
    setNightMode(!isDayTime)
    setDarkMode(!isDayTime)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Relative>
        <GlobalStyles />
        <div ref={navRef}>
          <NavButton isOpen={navOpen} setOpen={setNavOpen} />
          <Nav isOpen={navOpen} setOpen={setNavOpen} />
        </div>
        {children}
        <Footer />
        <ScrollTop />
        <DarkMode
          isNightMode={nightMode}
          onClick={() => setDarkMode(!darkMode)}
          date={date}
        />
      </Relative>
    </ThemeProvider>
  )
}

const DarkMode = ({ onClick, isNightMode, date }) => (
  <Toggle onClick={onClick}>
    {isNightMode ? <IcMoon /> : <IcSun />}
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
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
  isNightMode: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

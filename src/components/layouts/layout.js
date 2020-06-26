import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, theme, darkTheme } from '@style'
import GlobalStyles from '@style/GlobalStyles'
import Nav, { NavButton, useNavClickOutside } from './nav'
import Footer from './footer'
import ScrollTop from './scroll-top'
import DarkMode from './dark-mode'
import Hero from './hero'

const isBrowser = window !== undefined

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(true)
  const [nightMode, setNightMode] = React.useState(true)
  const [date, setDate] = React.useState(new Date())
  const [navOpen, setNavOpen] = React.useState(false)
  const navRef = React.useRef()
  const darkModeName = 'theme-ui-darkmode'

  useNavClickOutside(navRef, () => setNavOpen(false))

  React.useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    const hours = date.getHours()
    const isDayTime = hours > 6 && hours < 20
    setNightMode(!isDayTime)

    const isDarkMode = localStorage.getItem(darkModeName) === 'true'
    setDarkMode(isDarkMode)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  const changeDarkMode = () => {
    setDarkMode(!darkMode)
    if (isBrowser) {
      localStorage.setItem('theme-ui-darkmode', !darkMode)
    }
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Relative>
        <GlobalStyles />
        <Header>
          <DarkMode
            isNightMode={nightMode}
            onClick={changeDarkMode}
            date={date}
          />
          <div ref={navRef}>
            <NavButton isOpen={navOpen} setOpen={setNavOpen} />
            <Nav isOpen={navOpen} setOpen={setNavOpen} />
          </div>
        </Header>
        <Hero />
        <Main>{children}</Main>
        <Footer />
        <ScrollTop />
      </Relative>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Header = styled.header`
  background: ${(props) => props.theme.colors.primary[2]};
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`

const Relative = styled.div`
  background: ${(props) => props.theme.colors.pageBackground};
`

const Main = styled.main`
  max-width: 1250px;
  box-shadow: 0 0 50px 5px rgba(0, 0, 0, 0.15);
  position: relative;
  margin: -90px auto 0;
  background: ${(props) => props.theme.colors.pageBackground};
`

export default Layout

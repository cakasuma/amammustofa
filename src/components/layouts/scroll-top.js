import React from 'react'
import styled from 'styled-components'
import { ChevronUp } from '@styled-icons/feather'

const StyledScrollTop = styled.div`
  background-color: ${(props) => props.theme.colors.primary[2]};
  border: none;
  border-radius: 6px;
  padding: 5px;
  color: white;
  font-size: 20px;
  position: fixed;
  right: 32px;
  bottom: 120px;
  cursor: pointer;
`

const ScrollTop = () => {
  const [isVisible, setVisible] = React.useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  React.useEffect(() => {
    document.addEventListener('scroll', toggleVisibility)

    return () => {
      document.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  return (
    <>
      {isVisible && (
        <StyledScrollTop>
          <ChevronUp onClick={scrollTop} widht="26" height="26" />
        </StyledScrollTop>
      )}
    </>
  )
}

export default ScrollTop

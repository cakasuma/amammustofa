import React from 'react'
import { Link } from '@components/elements'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Nav = ({ isOpen }) => {
  return (
    <StyledMenu open={isOpen}>
      <Link to="/">
        <span role="img" aria-label="about us">
          💁🏻‍♂️
          {/* TODO: add logo here */}
        </span>
        About
      </Link>
      <Link to="/contact">
        <span role="img" aria-label="about us">
          💸
          {/* TODO: add logo here */}
        </span>
        Contact
      </Link>
      {/* TODO: add these when the pages are ready */}
      {/* <Link to="/">
        <span role="img" aria-label="price">
          💸
        </span>
        Resume
      </Link>
      <Link to="/">
        <span role="img" aria-label="contact">
          📩
        </span>
        Portfolio
      </Link>
      <Link to="/">
        <span role="img" aria-label="contact">
          💁🏻‍♂️
        </span>
        Blog
      </Link> */}
    </StyledMenu>
  )
}

Nav.propTypes = {
  isOpen: PropTypes.bool,
}

const NavButton = ({ isOpen, setOpen }) => {
  return (
    <StyledBurger open={isOpen} onClick={() => setOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

NavButton.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
}

const useNavClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.theme.colors.section};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  height: 100%;
  text-align: left;
  padding: 4rem 3rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
  z-index: 9;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1.6rem;
    text-transform: uppercase;
    padding: 1.8rem 0 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${(props) => props.theme.colors.general};
    text-decoration: none;
    transition: transform 0.2s;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover,
    &:focus,
    &:active {
      transform: scale(1.1);
      text-decoration: none;
    }
  }
`

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open, theme }) =>
      open ? theme.colors.general : theme.colors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`

export default Nav

export { NavButton, useNavClickOutside }

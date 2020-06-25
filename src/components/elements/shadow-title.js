import React from 'react'
import PropTypes from 'prop-types'
import styled from '@style'
import { Flex } from '@components/containers'
import Text from './text'

const ShadowTitle = ({ className, title }) => {
  return (
    <Flex
      className={className}
      position="relative"
      width="100%"
      justifyContent="center"
    >
      <LinedText as="h1" color="general">
        {title}
      </LinedText>
      <Span>{title}</Span>
    </Flex>
  )
}

ShadowTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
}

const LinedText = styled(Text)`
  position: relative;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 3px;
    background: ${(props) => props.theme.colors.general};
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
  color: ${(props) => props.theme.colors.primary[1]};
  opacity: 0.1;
  font-weight: 500;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 80px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`

export default ShadowTitle

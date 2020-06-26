import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from '@style'
import { Moon, Sun } from '@styled-icons/fa-solid'
import { Text } from '@components/elements'

const DarkMode = ({ onClick, isNightMode, date }) => {
  return (
    <Toggle onClick={onClick}>
      {isNightMode ? <IcMoon /> : <IcSun />}
      <Text color="general">{date.toLocaleTimeString()}</Text>
    </Toggle>
  )
}

DarkMode.propTypes = {
  onClick: PropTypes.func.isRequired,
  isNightMode: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
}

const Toggle = styled.div`
  border-radius: 6px;
  padding: 8px 16px;
  background: ${(props) => props.theme.colors.pageBackground};
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

export default DarkMode

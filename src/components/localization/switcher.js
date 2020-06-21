import React from 'react'
import styled from 'styled-components'
import { Language } from '@styled-icons/fa-solid'
import { useI18next } from 'gatsby-plugin-react-i18next'
import languagesData from '../../../languages'

const Lang = styled(Language)`
  color: ${(props) => props.theme.colors.general};
  width: 32px;
  height: 32px;
`

const Select = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
`

const Button = styled.li`
  color: ${(props) =>
    props.selected
      ? props.theme.colors.primary[1]
      : props.theme.colors.general};
  display: inline-block;
  padding: 0 14px;
  border-right: 1px solid #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:last-of-type {
    border: none;
  }
`

const LanguageSwitcher = () => {
  const { languages, language, changeLanguage } = useI18next()

  return (
    <Select>
      <Lang />
      {languages.map((lang) => (
        <Button
          key={lang}
          onClick={() => changeLanguage(lang)}
          selected={language === lang}
        >
          {languagesData[lang]}
        </Button>
      ))}
      <Lang />
    </Select>
  )
}

export default LanguageSwitcher

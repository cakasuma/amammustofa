import React from 'react'
import styled from 'styled-components'
import { useI18next } from 'gatsby-plugin-react-i18next'
import languagesData from '../../../languages'

const Select = styled.div`
  padding: 10px 14px;
`

const Button = styled.button`
  color: ${(props) =>
    props.selected ? props.theme.colors.primary[1] : props.theme.colors.black};
`

const LanguageSwitcher = () => {
  const { languages, language, changeLanguage } = useI18next()

  return (
    <Select>
      {languages.map((lang) => (
        <Button
          key={lang}
          onClick={() => changeLanguage(lang)}
          selected={language === lang}
        >
          {languagesData[lang]}
        </Button>
      ))}
    </Select>
  )
}

export default LanguageSwitcher

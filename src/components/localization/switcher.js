import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import languages from './languages'

const Select = styled.div`
  padding: 10px 14px;
`

const Button = styled.button`
  color: ${(props) =>
    props.selected ? props.theme.colors.primary[1] : props.theme.colors.black};
`

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const handleChangelang = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <Select>
      {languages.map(({ code, label }) => (
        <Button
          key={code}
          onClick={() => handleChangelang(code)}
          selected={i18n.language === code}
        >
          {label}
        </Button>
      ))}
    </Select>
  )
}

export default LanguageSwitcher

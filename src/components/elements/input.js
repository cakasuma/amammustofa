import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = ({
  label,
  value,
  name,
  onChange,
  onBlur,
  error,
  fullWidth,
  type,
  className,
  variant,
}) => (
  <StyledTextField className={className} error={error} fullWidth={fullWidth}>
    {variant === 'textfield' && (
      <input
        placeholder=" "
        type={type || 'text'}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
      />
    )}
    {variant === 'textarea' && (
      <textarea
        placeholder=" "
        type={type || 'text'}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
      />
    )}

    <span>{label}</span>
  </StyledTextField>
)

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string.isRequired,
}

const StyledTextField = styled.label`
  position: relative;
  display: inline-block;
  padding-top: 6px;
  font-size: 14px;
  line-height: 1.5;
  overflow: hidden;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  & > input,
  & > textarea {
    box-sizing: border-box;
    margin: 0;
    border: solid 1px; /* Safari */
    border-color: ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.border};
    border-top-color: transparent;
    border-radius: 4px;
    padding: 15px 13px 15px;
    width: 100%;
    height: inherit;
    color: ${({ theme }) => theme.colors.general};
    background-color: transparent;
    box-shadow: none; /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    transition: border 0.2s, box-shadow 0.2s;
  }

  & > input + span,
  & > textarea + span {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    border-color: ${(props) => props.theme.colors.general};
    width: 100%;
    max-height: 100%;
    color: ${(props) => props.theme.colors.general};
    font-size: 75%;
    line-height: 15px;
    cursor: text;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
  }

  & > input + span::before,
  & > input + span::after,
  & > textarea + span::before,
  & > textarea + span::after {
    content: '';
    display: block;
    box-sizing: border-box;
    margin-top: 6px;
    border-top: solid 1px;
    border-top-color: ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.border};
    min-width: 10px;
    height: 8px;
    pointer-events: none;
    box-shadow: inset 0 1px transparent;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  & > input + span::before,
  & > textarea + span::before {
    margin-right: 4px;
    border-left: solid 1px transparent;
    border-radius: 4px 0;
  }

  & > input + span::after,
  & > textarea + span::after {
    flex-grow: 1;
    margin-left: 4px;
    border-right: solid 1px transparent;
    border-radius: 0 4px;
  }

  &:hover > input,
  &:hover > textarea {
    border-color: ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.general};
    border-top-color: transparent;
  }

  &:hover > input + span::before,
  &:hover > textarea + span::before,
  &:hover > input + span::after,
  &:hover > textarea + span::after {
    border-top-color: ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.general};
  }

  & > input:not(:focus):placeholder-shown,
  & > textarea:not(:focus):placeholder-shown {
    border-top-color: ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.border};
  }

  &:hover > input:not(:focus):placeholder-shown,
  &:hover > textarea:not(:focus):placeholder-shown {
    border-color: ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.general};
  }

  & > input:not(:focus):placeholder-shown + span,
  & > textarea:not(:focus):placeholder-shown + span {
    font-size: inherit;
    line-height: 68px;
  }

  & > input:not(:focus):placeholder-shown + span::before,
  & > textarea:not(:focus):placeholder-shown + span::before,
  & > input:not(:focus):placeholder-shown + span::after,
  & > textarea:not(:focus):placeholder-shown + span::after {
    border-top-color: transparent;
  }

  & > input:focus,
  & > textarea:focus {
    border-color: ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.border};
    border-top-color: transparent;
    box-shadow: inset 1px 0 // eslint-disable-next-line prettier/prettier
        ${({ error, theme }) =>
          error ? theme.colors.error : theme.colors.border},
      inset -1px 0 ${({ error, theme }) => (error ? theme.colors.error : theme.colors.border)},
      inset 0 -1px ${({ error, theme }) => (error ? theme.colors.error : theme.colors.border)};
    outline: none;
  }

  & > input:focus + span,
  & > textarea:focus + span {
    color: ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.border};
  }

  & > input:focus + span::before,
  & > input:focus + span::after,
  & > textarea:focus + span::before,
  & > textarea:focus + span::after {
    border-top-color: ${({ error, theme }) =>
      error ? theme.colors.error : theme.colors.border} !important;
    box-shadow: inset 0 1px
      ${({ error, theme }) =>
        error ? theme.colors.error : theme.colors.border};
  }

  & > input:disabled,
  & > input:disabled + span,
  & > textarea:disabled,
  & > textarea:disabled + span {
    border-color: ${(props) => props.theme.colors.disabled} !important;
    border-top-color: transparent !important;
    color: ${(props) => props.theme.colors.disabled};
    pointer-events: none;
  }

  & > input:disabled + span::before,
  & > input:disabled + span::after,
  & > textarea:disabled + span::before,
  & > textarea:disabled + span::after {
    border-top-color: ${(props) => props.theme.colors.disabled} !important;
  }

  & > input:disabled:placeholder-shown,
  & > input:disabled:placeholder-shown + span,
  & > textarea:disabled:placeholder-shown,
  & > textarea:disabled:placeholder-shown + span {
    border-top-color: ${(props) => props.theme.colors.disabled} !important;
  }

  & > input:disabled:placeholder-shown + span::before,
  & > input:disabled:placeholder-shown + span::after,
  & > textarea:disabled:placeholder-shown + span::before,
  & > textarea:disabled:placeholder-shown + span::after {
    border-top-color: transparent !important;
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      & > input,
      & > input + span,
      & > textarea,
      & > textarea + span,
      & > input + span::before,
      & > input + span::after,
      & > textarea + span::before,
      & > textarea + span::after {
        transition-duration: 0.1s;
      }
    }
  }
`

export default Input

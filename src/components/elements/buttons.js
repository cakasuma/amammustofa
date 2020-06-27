import styled, { css, space, layout } from '@style'
import { darken } from 'polished'
import Link from './link'
import ExLink from './external-link'

const buttonStyle = css`
  ${space}
  ${layout}
  border-radius: 50px;
  text-transform: uppercase;
  padding: 15px 30px;
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  transition: background 0.25s;
  font-size: 16px;
  cursor: pointer;
  border: none;

  &:hover {
    text-decoration: none;
  }

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          background: ${props.theme.colors.primary[1]};
          color: ${props.theme.colors.white};

          &:hover {
            background: ${darken(0.06, props.theme.colors.primary[1])};
          }
        `
      case 'secondary':
        return css`
          background: ${props.theme.colors.pageBackground};
          color: ${props.theme.colors.general};

          &:hover {
            background: ${props.theme.colors.primary[1]};
            color: ${props.theme.colors.white};
          }
        `
      default:
        return null
    }
  }}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.32;
      pointer-events: none;
      cursor: not-allowed;
    `}
  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Button = styled.button`
  ${buttonStyle}
`

const ExLinkButton = styled(ExLink)`
  ${buttonStyle}
`

const LinkButton = styled(Link)`
  ${buttonStyle}
`

export { LinkButton, Button, ExLinkButton }

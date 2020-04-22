import styled, {
  space,
  color,
  layout,
  border,
  background,
  position,
  propTypes,
  system,
} from '@style'

const Box = styled.div`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${background}
  ${position}
  ${system({
    transition: true,
  })}
`

Box.displayName = `Box`

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.border,
  ...propTypes.background,
  ...propTypes.position,
}

export default Box

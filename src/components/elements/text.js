import styled, {
  space,
  color,
  layout,
  typography,
  propTypes,
  system,
} from '@style'

const Text = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.5;
  ${space}
  ${color}
  ${layout}
  ${typography}
  ${system({
    transition: true,
  })}
`

Text.displayName = `Text`

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
}

export default Text

import styled, { flexbox, propTypes } from '@style'

import Box from './box'

const Flex = styled(Box)`
  ${flexbox}
`

Flex.displayName = `Flex`

Flex.defaultProps = {
  display: `flex`,
}

Flex.propTypes = {
  ...propTypes.flexbox,
}

export default Flex

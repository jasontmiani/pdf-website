// @flow
import React from 'components/primitives/react'
import Box from 'components/primitives/ui-box'

export default function Column({ children, ...styles }) {
  return (
    <Box display="block" flexBasis={0} flexGrow={1} flexShrink={1} {...styles}>
      {children}
    </Box>
  )
}

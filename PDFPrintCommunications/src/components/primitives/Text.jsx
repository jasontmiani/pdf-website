// @flow
import React from 'components/primitives/react'
import Box from 'components/primitives/ui-box'

export default function Text({ children, ...styles }) {
  return (
    <Box is="span" {...styles}>
      {children}
    </Box>
  )
}

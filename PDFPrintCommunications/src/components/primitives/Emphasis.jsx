// @flow
import React from 'components/primitives/react'
import Box from 'components/primitives/ui-box'

export default function Emphasis({ children, ...styles }) {
  return (
    <Box is="em" {...styles}>
      {children}
    </Box>
  )
}

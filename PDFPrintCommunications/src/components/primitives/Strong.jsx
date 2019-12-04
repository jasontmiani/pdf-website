// @flow
import React from 'components/primitives/react'
import Box from 'components/primitives/ui-box'

export default function Strong({ children, ...styles }) {
  return (
    <Box is="strong" {...styles}>
      {children}
    </Box>
  )
}

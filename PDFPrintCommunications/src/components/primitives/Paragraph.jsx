// @flow
import React from 'components/primitives/react'
import Box from 'components/primitives/ui-box'

export default function Paragraph({ children, ...styles }) {
  return (
    <Box is="p" {...styles}>
      {children}
    </Box>
  )
}

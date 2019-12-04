// @flow
import React from 'components/primitives/react'
import Box from 'components/primitives/ui-box'

export default function Ul({ children, ...styles }) {
  return (
    <Box is="ul" marginLeft={0} {...styles}>
      {children}
    </Box>
  )
}

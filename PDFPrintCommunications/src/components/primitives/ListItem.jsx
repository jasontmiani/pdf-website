// @flow
import React from 'components/primitives/react'
import Box from 'components/primitives/ui-box'

export default function Li({ children, ...styles }) {
  return (
    <Box is="li" fontSize={15} listStyleType="none" marginBottom={8} {...styles}>
      {children}
    </Box>
  )
}

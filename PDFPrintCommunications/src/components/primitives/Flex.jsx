// @flow
import React from 'components/primitives/react'
import Box from 'components/primitives/ui-box'
import MediaQuery from 'components/primitives/react-responsive'

export default function Flex({ children, ...styles }) {
  return (
    <MediaQuery maxWidth={800}>
      {mobile => (
        <Box display="flex" flexDirection={mobile ? 'column' : 'row'} {...styles}>
          {children}
        </Box>
      )}
    </MediaQuery>
  )
}

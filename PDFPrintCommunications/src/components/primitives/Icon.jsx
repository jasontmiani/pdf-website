// @flow
import React from 'components/primitives/react'
import Box from 'components/primitives/ui-box'

export default function Icon({ icon, ...styles }) {
  return <Box is="i" className={icon} {...styles} />
}

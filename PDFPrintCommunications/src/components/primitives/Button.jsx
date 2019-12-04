// @flow
import React from 'components/primitives/react'
import Box from 'components/primitives/ui-box'

import Icon from 'components/primitives/Icon'
import Link from 'components/primitives/Link'

import { gradientMap } from 'components/primitives/utils/color'

export default function Button(props) {
  const {
    background = 'teal',
    children,
    fontSize = 18,
    href,
    iconBefore,
    iconAfter,
    onClick,
    target,
    ...styles
  } = props
  const [from, to] = gradientMap[background]
  return (
    <Box
      alignItems="center"
      background={`linear-gradient(${from}, ${to})`}
      backgroundColor={from}
      border="0"
      borderRadius={36}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.15)"
      className="button"
      fontSize={fontSize}
      fontWeight={500}
      justifyContent="center"
      textShadow="0 0 2px rgba(0, 0, 0, 0.2)"
      transition="all 0.1s cubic-bezier(0, 0, 1, 2)"
      whiteSpace="nowrap"
      {...styles}
    >
      <Link
        color={background === 'white' ? '#333' : 'white'}
        href={href}
        onClick={onClick}
        paddingX={20}
        paddingY={10}
        target={target}
        underline={false}
      >
        {iconBefore && <Icon icon={iconBefore} marginRight={12} />}
        {children}
        {iconAfter && <Icon icon={iconAfter} marginLeft={12} />}
      </Link>
    </Box>
  )
}
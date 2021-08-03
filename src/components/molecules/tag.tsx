import React from 'react'
import { BlockedText } from '~/components/atoms/blocked_text'
import { Colors } from '~/types/colors'

type Props = {
  text: string
  colors: Colors
  className?: string
}

export const Tag: React.FC<Props> = ({ text, colors, className }) => (
  <BlockedText
    className={className}
    backgroundColor={colors.themeAA}
    textColor={'#fff'}
  >
    {'＃' + text}
  </BlockedText>
)

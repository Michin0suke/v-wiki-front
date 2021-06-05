import React from 'react'
import { BlockedText } from '~/components/atoms/blocked_text'

type Props = {
  text: string
  className?: string
}

export const Tag: React.FC<Props> = ({ text, className }) => (
  <BlockedText className={className} baseColor>
    {'＃' + text}
  </BlockedText>
)

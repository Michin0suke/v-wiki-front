import React from 'react'
import { HeadingH2 } from '~/components/molecules/heading_h2'

type Props = {
  text: string
  className: string
}

export const HeadingH2Block: React.FC<Props> = ({ text, className }) => (
  <HeadingH2 text={text} className={`mx-2 ${className}`} />
)

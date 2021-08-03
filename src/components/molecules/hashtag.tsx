import React from 'react'
import { Colors } from '~/types/colors'
import { BorderedText } from '../atoms/bordered_text'

type Props = {
  description: string
  name: string
  colors: Colors
  className?: string
}

export const HashTag: React.FC<Props> = ({
  description,
  name,
  colors,
  className,
}) => {
  return (
    <div
      className={`flex items-center rounded-lg py-1 px-3 ${className}`}
      style={{
        color: '#fff',
        backgroundColor: colors.themeAA,
      }}
    >
      <span>{description}</span>
      <BorderedText
        className="ml-2 py-1"
        backgroundColor={'#fff'}
        borderColor={colors.themeAA}
        textColor={colors.themeAAA}
        rounded
      >
        {'＃' + name}
      </BorderedText>
    </div>
  )
}

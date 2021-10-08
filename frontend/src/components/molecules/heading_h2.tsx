import React from 'react'
import { Colors } from '~/types/colors'

type Props = {
  text: string
  colors: Colors
  className: string
}

export const HeadingH2: React.FC<Props> = ({ text, colors, className }) => {
  return (
    <div className={`flex ${className}`}>
      <div style={{ backgroundColor: colors.themeAA }} className="w-2.5" />
      <div style={{ backgroundColor: colors.themeAA }} className="w-1 ml-1.5" />
      <h2 className="text-xl py-2 pl-3" style={{ color: colors.themeAAA }}>
        {text}
      </h2>
    </div>
  )
}

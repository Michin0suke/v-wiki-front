import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

type Props = {
  text: string
  className: string
}

export const HeadingH2: React.FC<Props> = ({ text, className }) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <div className={`flex ${className}`}>
      <div style={{ backgroundColor: themeColors.themeAA }} className="w-2.5" />
      <div
        style={{ backgroundColor: themeColors.themeAA }}
        className="w-1 ml-1.5"
      />
      <h2 className="text-xl py-2 pl-3" style={{ color: themeColors.themeAAA }}>
        {text}
      </h2>
    </div>
  )
}

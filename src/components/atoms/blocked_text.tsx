import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

export type BlockedTextProps = {
  className?: string
  children: string
  baseColor?: boolean
}

export const BlockedText = ({
  children,
  className,
  baseColor,
}: BlockedTextProps) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <span
      className={`py-1 px-1.5 whitespace-nowrap rounded inline-block ${className}`}
      style={
        baseColor
          ? {
              color: themeColors.themeAAA,
              backgroundColor: themeColors.base,
            }
          : {
              color: themeColors.base,
              backgroundColor: themeColors.themeAA,
            }
      }
    >
      {children}
    </span>
  )
}

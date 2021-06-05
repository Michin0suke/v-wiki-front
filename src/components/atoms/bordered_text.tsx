import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

export type BorderedTextProps = {
  className?: string
  rounded?: boolean
}

export const BorderedText: React.FC<BorderedTextProps> = ({
  className,
  rounded,
  children,
}) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <span
      className={`whitespace-nowrap border-4 ${
        rounded ? 'rounded-full px-2' : 'px-1 py-0.5'
      } ${className}`}
      style={{
        color: themeColors.themeAAA,
        backgroundColor: themeColors.base,
        borderColor: themeColors.themeAA,
      }}
    >
      {children}
    </span>
  )
}

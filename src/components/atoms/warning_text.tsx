import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

type Props = {
  className?: string
  children: React.ReactNode
}

export const WarningText: React.FC<Props> = ({ className, children }) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        color: themeColors.themeOppositeAAA,
      }}
    >
      {children}
    </span>
  )
}

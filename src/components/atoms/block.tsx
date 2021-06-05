import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

type Props = {
  className?: string
  children: React.ReactNode
}

export const Block = ({ className, children }: Props) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <div
      className={`p-2 rounded ${className}`}
      style={{
        backgroundColor: themeColors.theme,
      }}
    >
      {children}
    </div>
  )
}

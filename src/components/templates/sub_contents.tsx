import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

type Props = {
  children: React.ReactNode
  className?: string
}

export const SubContents: React.FC<Props> = ({ children, className }) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <div
      style={{ backgroundColor: themeColors.base }}
      className={`relative h-full min-h-screen flex-1 p-5 rounded-lg ${className}`}
    >
      {children}
    </div>
  )
}

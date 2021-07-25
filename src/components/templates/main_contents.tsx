import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { Header } from '~/components/organisms/header'

type Props = {
  children: React.ReactNode
  className?: string
}

export const MainContents: React.FC<Props> = ({ children, className }) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <div
      style={{ backgroundColor: themeColors.base }}
      className={`relative mx-auto h-full w-full max-w-2xl ${className}`}
    >
      <Header className="fixed top-0 w-full max-w-2xl z-10 h-14" />
      <div className="px-3 pt-14 pb-5 w-full h-full">{children}</div>
    </div>
  )
}

import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { SuperEllipseClip } from '~/components/clips/super_ellipse'
import { MenuButton } from '../organisms/menu_button'
import { ApolloProvider } from '@apollo/client'
import { client } from '~/graphql/client'

type Props = {
  className?: string
}

export const Wrapper: React.FC<Props> = ({ children, className }) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <div
      style={{ backgroundColor: themeColors.themeLight }}
      className={`w-full min-h-screen ${className}`}
    >
      <div className="h-14" />
      <SuperEllipseClip />
      <div className="flex">{children}</div>
      <MenuButton className="fixed bottom-5 right-5" />
    </div>
  )
}

import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'
import Link from 'next/link'
import { LogoTypeOwl } from '../atoms/logo_type_owl'
import { Colors } from '~/types/colors'

type HeaderProps = {
  colors: Colors
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ colors, className }) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <div
      className={`px-3 py-2 ${className}`}
      style={{ backgroundColor: themeColors.themeAA }}
    >
      <Link href="/">
        <div className="h-full">
          <LogoTypeOwl color={colors.themeAA} baseColor={'#fff'} />
        </div>
      </Link>
    </div>
  )
}

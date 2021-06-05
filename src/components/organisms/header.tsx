import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { TopLogo } from '~/components/molecules/top_logo'
import Link from 'next/link'

type HeaderProps = {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <div
      className={`px-3 py-2 ${className}`}
      style={{ backgroundColor: themeColors.themeAA }}
    >
      <Link href="/">
        <div className="h-full">
          <TopLogo />
        </div>
      </Link>
    </div>
  )
}

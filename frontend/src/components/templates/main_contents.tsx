import Link from 'next/link'
import React from 'react'
import { Colors } from '~/types/colors'
import { LogoTypeOwl } from '../atoms/logo_type_owl'

type Props = {
  colors: Colors
  children: React.ReactNode
  className?: string
}

export const MainContents: React.FC<Props> = ({
  colors,
  children,
  className,
}) => {
  return (
    <div
      style={{ backgroundColor: '#fff' }}
      className={`relative mx-auto h-full w-full max-w-2xl ${className}`}
    >
      <div
        className={`px-3 py-2 fixed top-0 w-full max-w-2xl z-10 h-14`}
        style={{ backgroundColor: colors.themeAA }}
      >
        <Link href="/">
          <div className="h-full">
            <LogoTypeOwl
              color={colors.themeAA}
              baseColor={'#fff'}
              className="h-full"
            />
          </div>
        </Link>
      </div>
      <div className="px-3 pt-14 pb-5 w-full h-full">{children}</div>
    </div>
  )
}

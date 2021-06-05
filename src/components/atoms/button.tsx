import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

type Props = {
  className?: string
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  // colorType?: number
}

export const Button = ({
  className,
  children,
  onClick,
}: // colorType = 1,
Props) => {
  const { themeColors } = useContext(ThemeColorContext)
  let style = {}
  // if (colorType === 1) {
  //   style = {
  //     backgroundColor: themeColors.themeAA,
  //     borderColor: themeColors.base,
  //     color: themeColors.base,
  //   }
  // } else if (colorType === 2) {
  //   style = {
  //     backgroundColor: themeColors.themeAA,
  //     borderColor: themeColors.base,
  //     color: themeColors.base,
  //   }
  // }
  return (
    <div
      className={`border-4 rounded-full flex justify-center items-center ${className}`}
      style={{
        backgroundColor: themeColors.themeAA,
        borderColor: themeColors.base,
        color: themeColors.base,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

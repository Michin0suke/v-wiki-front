import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

type Props = {
  text: string
  children: React.ReactNode
  className?: string
}

export const InnerBorder: React.FC<Props> = ({ text, children, className }) => {
  const { themeColors } = useContext(ThemeColorContext)

  return (
    <div className={className}>
      <span
        className="inline-block pt-1 px-3 pb-5 rounded"
        style={{
          color: themeColors.themeAAA,
          backgroundColor: themeColors.base,
        }}
      >
        {text}
      </span>
      <div
        className="-mt-5 relative p-2 border-4 rounded-lg"
        style={{
          backgroundColor: themeColors.theme,
          borderColor: themeColors.base,
        }}
      >
        {children}
      </div>
    </div>
  )
}

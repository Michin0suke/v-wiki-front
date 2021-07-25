import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { BorderedText } from '../atoms/bordered_text'

type Props = {
  description: string
  name: string
  className?: string
}

export const HashTag: React.FC<Props> = ({ description, name, className }) => {
  const { themeColors } = useContext(ThemeColorContext)

  return (
    <div
      className={`flex items-center rounded-lg py-2 px-3 ${className}`}
      style={{
        color: themeColors.themeAAA,
        backgroundColor: themeColors.base,
      }}
    >
      <span>{description}</span>
      <BorderedText className="ml-2" rounded>
        {'＃' + name}
      </BorderedText>
    </div>
  )
}

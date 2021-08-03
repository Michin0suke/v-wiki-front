import React from 'react'
import { Select } from '~/components/atoms/select'
import { Colors } from '~/types/colors'
import { Block } from '../atoms/block'
import { BlockedText } from '../atoms/blocked_text'

type Props = {
  values: string[]
  className?: string
  colors: Colors
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onClick?: (event: React.TouchEvent) => void
  keyText?: string
}

export const FormSelect: React.FC<Props> = ({
  values,
  className,
  colors,
  onChange,
  keyText,
}) => (
  <Block className={`flex gap-2 ${className}`} backgroundColor={colors.theme}>
    {keyText && (
      <BlockedText backgroundColor={colors.themeAA} textColor={'#fff'}>
        {keyText}
      </BlockedText>
    )}
    <Select
      {...{ values, onChange }}
      textColor={'#fff'}
      backgroundColor={colors.themeAA}
    />
  </Block>
)

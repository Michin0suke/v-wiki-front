import React from 'react'
import { Select } from '~/components/atoms/select'
import { Block } from '../atoms/block'
import { BlockedText } from '../atoms/blocked_text'

type Props = {
  values: string[]
  className?: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  onClick?: (event: React.TouchEvent) => void
  keyText?: string
}

export const FormSelect: React.FC<Props> = ({
  values,
  className,
  onChange,
  keyText,
}) => (
  <Block className={`flex gap-2 ${className}`}>
    {keyText && <BlockedText>{keyText}</BlockedText>}
    <Select {...{ values, onChange }} />
  </Block>
)

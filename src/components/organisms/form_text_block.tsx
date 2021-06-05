import React from 'react'
import { FormText } from '~/components/molecules/form_text'

type Props = {
  keyText: string
  value: string
  className?: string
  placeholder?: string
  prefix?: string
  suffix?: string | string[]
  textAlign?: 'left' | 'center' | 'right'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSuffix?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  validateFunc?: (text: string) => string | null
}

export const FormTextBlock: React.FC<Props> = ({
  keyText,
  placeholder,
  value,
  className,
  prefix,
  suffix,
  textAlign,
  onChange,
  onChangeSuffix,
  validateFunc,
}) => {
  return (
    <FormText
      {...{
        keyText,
        placeholder,
        value,
        className,
        prefix,
        suffix,
        textAlign,
        onChange,
        onChangeSuffix,
        validateFunc,
      }}
    />
  )
}

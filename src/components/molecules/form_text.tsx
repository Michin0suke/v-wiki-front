import React from 'react'
import { BlockedText } from '~/components/atoms/blocked_text'
import { InputText } from '~/components/atoms/input_text'
import { Block } from '../atoms/block'
import { WarningText } from '../atoms/warning_text'

type Props = {
  keyText?: string
  value: string
  className?: string
  placeholder?: string
  prefix?: string
  suffix?: string | string[]
  textAlign?: 'left' | 'center' | 'right'
  naked?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSuffix?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  validateFunc?: (text: string) => string | null
}

export const FormText: React.FC<Props> = ({
  keyText,
  placeholder,
  value,
  className,
  prefix,
  suffix,
  textAlign,
  onChange,
  onChangeSuffix,
  naked,
  validateFunc,
}) => {
  const contents = (
    <>
      <div className="flex gap-2">
        {keyText && <BlockedText>{keyText}</BlockedText>}
        <InputText
          {...{
            placeholder,
            value,
            prefix,
            suffix,
            textAlign,
            onChange,
            onChangeSuffix,
          }}
        />
      </div>
      {validateFunc && validateFunc(value) !== null && (
        <WarningText className="ml-2 mt-2">※{validateFunc(value)}</WarningText>
      )}
    </>
  )
  return naked ? (
    <div>{contents}</div>
  ) : (
    <Block className={`${className}`}>{contents}</Block>
  )
}

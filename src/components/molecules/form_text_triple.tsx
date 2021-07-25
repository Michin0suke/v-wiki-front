import React from 'react'
import { BlockedText } from '~/components/atoms/blocked_text'
import { InputText } from '~/components/atoms/input_text'
import { Block } from '../atoms/block'
import { WarningText } from '../atoms/warning_text'

type Props = {
  values: string[]
  className?: string
  textAlign?: 'left' | 'center' | 'right'
  onChanges: [
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void
  ]
  validateFunc?: (values: string[]) => string | null
}

const placeholders = ['(省略可)', '', '']
const suffixes = ['年', '月', '日']

export const Birthday: React.FC<Props> = ({
  values,
  onChanges,
  className,
  validateFunc,
}) => {
  if (
    [placeholders, values, onChanges, suffixes].find((arr) => arr.length !== 3)
  ) {
    console.log('Form Birthday Error')
    return null
  }
  return (
    <Block className={`${className}`}>
      <div className="flex gap-2">
        <BlockedText>誕生日</BlockedText>
        {values.map((_, i) => (
          <InputText
            key={i}
            placeholder={placeholders[i]}
            value={values[i]}
            onChange={onChanges[i]}
            suffix={suffixes[i]}
            textAlign="right"
          />
        ))}
      </div>
      {validateFunc && validateFunc(values) !== null && (
        <WarningText className="ml-2 mt-2">※{validateFunc(values)}</WarningText>
      )}
    </Block>
  )
}

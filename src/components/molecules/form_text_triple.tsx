import React from 'react'
import { BlockedText } from '~/components/atoms/blocked_text'
import { InputText } from '~/components/atoms/input_text'
import { Block } from '../atoms/block'
import { WarningText } from '../atoms/warning_text'

type Props = {
  keyText: string
  values: string[]
  className?: string
  placeholders: string[]
  suffixes: string[]
  textAlign?: 'left' | 'center' | 'right'
  onChanges: [
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void
  ]
  validateFunc?: (values: string[]) => string | null
}

export const FormTextTriple: React.FC<Props> = ({
  keyText,
  placeholders,
  values,
  onChanges,
  className,
  suffixes,
  textAlign,
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
        <BlockedText>{keyText}</BlockedText>
        {values.map((_, i) => (
          <InputText
            key={i}
            placeholder={placeholders[i]}
            value={values[i]}
            onChange={onChanges[i]}
            suffix={suffixes[i]}
            textAlign={textAlign}
          />
        ))}
      </div>
      {validateFunc && validateFunc(values) !== null && (
        <WarningText className="ml-2 mt-2">※{validateFunc(values)}</WarningText>
      )}
    </Block>
  )
}

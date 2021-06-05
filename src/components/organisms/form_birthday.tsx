import React from 'react'
import { FormTextTriple } from '~/components/molecules/form_text_triple'

type Props = {
  values: string[]
  className?: string
  onChanges: [
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: React.ChangeEvent<HTMLInputElement>) => void
  ]
  validateFunc?: (values: string[]) => string | null
}

export const FormBirthday: React.FC<Props> = ({
  values,
  className,
  onChanges,
  validateFunc,
}) => {
  if (values.length !== 3 || onChanges.length !== 3) {
    console.log('Form Birthday Error')
    return null
  }
  return (
    <FormTextTriple
      {...{
        keyText: '誕生日',
        values,
        className,
        placeholders: ['(省略可)', '', ''],
        suffixes: ['年', '月', '日'],
        textAlign: 'right',
        onChanges,
        validateFunc,
      }}
    />
  )
}

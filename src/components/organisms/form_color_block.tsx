import React from 'react'
import { FormColor } from '~/components/molecules/form_color'

type Props = {
  keyText: string
  value: number
  className?: string
  onChange: (value: number) => void
}

export const FormColorBlock: React.FC<Props> = ({
  keyText,
  value,
  onChange,
  className,
}) => {
  return <FormColor {...{ keyText, value, onChange, className }} />
}

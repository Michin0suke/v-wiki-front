import React from 'react'
import { FormSelect } from '~/components/molecules/form_select'

type Props = {
  values: string[]
  className?: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const FormSelectBlock: React.FC<Props> = ({
  values,
  onChange,
  className,
}) => {
  return <FormSelect {...{ values, onChange, className }} />
}

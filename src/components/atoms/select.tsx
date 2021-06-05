import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

export type SelectProps = {
  values: string[]
  className?: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({ values, className, onChange }: SelectProps) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <select
      style={{
        color: themeColors.base,
        backgroundColor: themeColors.themeAA,
      }}
      className={`w-full rounded py-1 px-1.5 ${className}`}
      value={values[0]}
      onChange={onChange}
    >
      {values.map((value, key) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}

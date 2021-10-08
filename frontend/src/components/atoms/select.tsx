import React from 'react'

export type SelectProps = {
  values: string[]
  textColor: string
  backgroundColor: string
  className?: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({
  values,
  className,
  onChange,
  textColor,
  backgroundColor,
}: SelectProps) => {
  return (
    <select
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
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

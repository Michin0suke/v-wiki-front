import React from 'react'
import { Colors } from '~/types/colors'

type Props = {
  value: string
  colors: Colors
  placeholder?: string
  className?: string
  prefix?: string
  suffix?: string | string[]
  textAlign?: 'left' | 'center' | 'right'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSuffix?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const InputText: React.FC<Props> = ({
  value,
  colors,
  placeholder,
  className,
  prefix,
  suffix,
  textAlign,
  onChange,
  onChangeSuffix,
}: Props) => {
  return (
    <label className={`flex w-full overflow-hidden rounded ${className}`}>
      {prefix && (
        <span
          style={{
            color: colors.base,
            backgroundColor: colors.themeAA,
          }}
          className="py-1 px-1.5"
        >
          {prefix}
        </span>
      )}
      <input
        className={`py-1 px-1.5 w-full`}
        type="text"
        style={{
          color: colors.themeAAA,
          backgroundColor: colors.base,
          textAlign,
        }}
        {...{ value, placeholder, onChange }}
      />
      {suffix && Array.isArray(suffix) === false && (
        <span
          style={{
            color: colors.base,
            backgroundColor: colors.themeAA,
          }}
          className="py-1 px-1.5"
        >
          {suffix}
        </span>
      )}
      {suffix && Array.isArray(suffix) && (
        <select
          style={{
            color: colors.base,
            backgroundColor: colors.themeAA,
          }}
          className="py-1 px-1.5"
          value={suffix[0]}
          onChange={onChangeSuffix}
        >
          {suffix.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
      )}
    </label>
  )
}

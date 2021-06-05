import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

export type InputTextProps = {
  value: string
  placeholder?: string
  className?: string
  prefix?: string
  suffix?: string | string[]
  textAlign?: 'left' | 'center' | 'right'
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSuffix?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const InputText = ({
  value,
  placeholder,
  className,
  prefix,
  suffix,
  textAlign,
  onChange,
  onChangeSuffix,
}: InputTextProps) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <label className={`flex w-full overflow-hidden rounded ${className}`}>
      {prefix && (
        <span
          style={{
            color: themeColors.base,
            backgroundColor: themeColors.themeAA,
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
          color: themeColors.themeAAA,
          backgroundColor: themeColors.base,
          textAlign,
        }}
        {...{ value, placeholder, onChange }}
      />
      {suffix && Array.isArray(suffix) === false && (
        <span
          style={{
            color: themeColors.base,
            backgroundColor: themeColors.themeAA,
          }}
          className="py-1 px-1.5"
        >
          {suffix}
        </span>
      )}
      {suffix && Array.isArray(suffix) && (
        <select
          style={{
            color: themeColors.base,
            backgroundColor: themeColors.themeAA,
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

import React from 'react'

export type BorderedTextProps = {
  className?: string
  rounded?: boolean
  textColor: string
  backgroundColor: string
  borderColor: string
}

export const BorderedText: React.FC<BorderedTextProps> = ({
  className,
  rounded,
  children,
  textColor,
  backgroundColor,
  borderColor,
}) => {
  return (
    <span
      className={`whitespace-nowrap border-4 ${
        rounded ? 'rounded-full px-2' : 'px-1 py-0.5'
      } ${className}`}
      style={{
        color: textColor,
        backgroundColor,
        borderColor,
      }}
    >
      {children}
    </span>
  )
}

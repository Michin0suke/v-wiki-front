import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
  color: string
}

export const WarningText: React.FC<Props> = ({
  className,
  children,
  color,
}) => {
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        color: color,
      }}
    >
      {children}
    </span>
  )
}

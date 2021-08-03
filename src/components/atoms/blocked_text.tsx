import React from 'react'

export type Props = {
  className?: string
  children: string
  textColor: string
  backgroundColor: string
}

export const BlockedText: React.FC<Props> = ({
  children,
  className,
  textColor,
  backgroundColor,
}: Props) => {
  return (
    <span
      className={`py-1 px-1.5 whitespace-nowrap rounded inline-block ${className}`}
      style={{
        color: textColor,
        backgroundColor,
      }}
    >
      {children}
    </span>
  )
}

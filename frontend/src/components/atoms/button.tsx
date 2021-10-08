import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  backgroundColor: string
  borderColor: string
  textColor: string
}

export const Button: React.FC<Props> = ({
  className,
  children,
  onClick,
  backgroundColor,
  borderColor,
  textColor,
}: Props) => {
  return (
    <div
      className={`border-4 rounded-full flex justify-center items-center ${className}`}
      style={{
        backgroundColor,
        borderColor,
        color: textColor,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

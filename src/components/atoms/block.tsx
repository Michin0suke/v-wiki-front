import React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
  backgroundColor: string
}

export const Block = ({ className, children, backgroundColor }: Props) => {
  return (
    <div
      className={`p-2 rounded ${className}`}
      style={{
        backgroundColor,
      }}
    >
      {children}
    </div>
  )
}

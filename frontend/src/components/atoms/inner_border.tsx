import React from 'react'

type Props = {
  text: string
  children: React.ReactNode
  className?: string
  backgroundColor: string
  borderColor: string
  textColor: string
}

export const InnerBorder: React.FC<Props> = ({
  text,
  children,
  className,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <div className={className}>
      <span
        className="inline-block pt-1 px-3 pb-5 rounded"
        style={{
          color: textColor,
          backgroundColor: borderColor,
        }}
      >
        {text}
      </span>
      <div
        className="-mt-5 relative p-2 border-4 rounded-lg"
        style={{
          backgroundColor,
          borderColor,
        }}
      >
        {children}
      </div>
    </div>
  )
}

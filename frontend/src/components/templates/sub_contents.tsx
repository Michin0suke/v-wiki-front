import React from 'react'
import { Colors } from '~/types/colors'

type Props = {
  colors: Colors
  children: React.ReactNode
  className?: string
}

export const SubContents: React.FC<Props> = ({
  colors,
  children,
  className,
}) => {
  return (
    <div
      style={{ backgroundColor: '#fff' }}
      className={`relative h-full min-h-screen flex-1 p-5 rounded-lg ${className}`}
    >
      {children}
    </div>
  )
}

import React from 'react'

type Props = {
  src: string
  className?: string
}

export const SuperEllipseImage = ({ className, src }: Props) => (
  <img
    src={src}
    className={`${className}`}
    style={{
      clipPath: 'url(#super-ellipse)',
    }}
  />
)

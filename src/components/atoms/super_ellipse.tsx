import React from 'react'

type Props = {
  fill: string
  className?: string
}

export const SuperEllipse = ({ className, fill }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 103.758 103.758"
      className={`w-full h-full ${className}`}
    >
      <path
        d="M64.36,13c35.815,0,52.4,15.545,52.4,51.36s-16.583,52.4-52.4,52.4S13,100.175,13,64.36,28.545,13,64.36,13Z"
        transform="translate(-13 -13)"
        fill={fill}
      />
    </svg>
  )
}

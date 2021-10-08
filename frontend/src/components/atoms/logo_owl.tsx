import React from 'react'

export type Props = {
  className?: string
  baseColor: string
  color: string
}

export const LogoOwl: React.FC<Props> = ({
  className,
  baseColor,
  color,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 373.43 462.03"
      className={`${className}`}
    >
      <path
        d="M326,0A181.12,181.12,0,0,1,186.14,65.8,181.06,181.06,0,0,1,47.18,1c-118.35,429,7.71,461.34,139,461h1.16C318.65,462.37,444.8,430,326,0Z"
        style={{ fill: baseColor }}
      />
      <circle cx="269.69" cy="178.67" r="64" style={{ fill: color }} />
      <circle cx="269.69" cy="178.67" r="44" style={{ fill: baseColor }} />
      <circle cx="103.74" cy="178.67" r="64" style={{ fill: color }} />
      <circle cx="103.74" cy="178.67" r="44" style={{ fill: baseColor }} />
      <ellipse
        cx="220.04"
        cy="343.18"
        rx="21.16"
        ry="15.87"
        style={{ fill: color }}
      />
      <ellipse
        cx="220.04"
        cy="322.02"
        rx="29.62"
        ry="21.16"
        style={{ fill: baseColor }}
      />
      <ellipse
        cx="287.75"
        cy="343.18"
        rx="21.16"
        ry="15.87"
        style={{ fill: color }}
      />
      <ellipse
        cx="287.75"
        cy="322.02"
        rx="29.62"
        ry="21.16"
        style={{ fill: baseColor }}
      />
      <ellipse
        cx="256.01"
        cy="406.65"
        rx="21.16"
        ry="15.87"
        style={{ fill: color }}
      />
      <ellipse
        cx="256.01"
        cy="385.49"
        rx="29.62"
        ry="21.16"
        style={{ fill: baseColor }}
      />
      <ellipse
        cx="154.45"
        cy="343.18"
        rx="21.16"
        ry="15.87"
        style={{ fill: color }}
      />
      <ellipse
        cx="154.45"
        cy="322.02"
        rx="29.62"
        ry="21.16"
        style={{ fill: baseColor }}
      />
      <ellipse
        cx="86.74"
        cy="343.18"
        rx="21.16"
        ry="15.87"
        style={{ fill: color }}
      />
      <ellipse
        cx="86.74"
        cy="322.02"
        rx="29.62"
        ry="21.16"
        style={{ fill: baseColor }}
      />
      <ellipse
        cx="118.48"
        cy="406.65"
        rx="21.16"
        ry="15.87"
        style={{ fill: color }}
      />
      <ellipse
        cx="118.48"
        cy="385.49"
        rx="29.62"
        ry="21.16"
        style={{ fill: baseColor }}
      />
      <ellipse
        cx="187.24"
        cy="406.65"
        rx="21.16"
        ry="15.87"
        style={{ fill: color }}
      />
      <ellipse
        cx="187.24"
        cy="385.49"
        rx="29.62"
        ry="21.16"
        style={{ fill: baseColor }}
      />
    </svg>
  )
}

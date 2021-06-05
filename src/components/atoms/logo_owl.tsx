import React, { useContext } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'

export type LogoOwlProps = {
  className?: string
}

export const LogoOwl = ({ className }: LogoOwlProps) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 373.43 462.03"
      className={`${className}`}
    >
      <path
        d="M326,0A181.12,181.12,0,0,1,186.14,65.8,181.06,181.06,0,0,1,47.18,1c-118.35,429,7.71,461.34,139,461h1.16C318.65,462.37,444.8,430,326,0Z"
        style={{ fill: themeColors.base }}
      />
      <circle
        cx="269.69"
        cy="178.67"
        r="64"
        style={{ fill: themeColors.themeAA }}
      />
      <circle
        cx="269.69"
        cy="178.67"
        r="44"
        style={{ fill: themeColors.base }}
      />
      <circle
        cx="103.74"
        cy="178.67"
        r="64"
        style={{ fill: themeColors.themeAA }}
      />
      <circle
        cx="103.74"
        cy="178.67"
        r="44"
        style={{ fill: themeColors.base }}
      />
      <ellipse
        cx="220.04"
        cy="343.18"
        rx="21.16"
        ry="15.87"
        style={{ fill: themeColors.themeAA }}
      />
      <ellipse
        cx="220.04"
        cy="322.02"
        rx="29.62"
        ry="21.16"
        style={{ fill: themeColors.base }}
      />
      <ellipse
        cx="287.75"
        cy="343.18"
        rx="21.16"
        ry="15.87"
        style={{ fill: themeColors.themeAA }}
      />
      <ellipse
        cx="287.75"
        cy="322.02"
        rx="29.62"
        ry="21.16"
        style={{ fill: themeColors.base }}
      />
      <ellipse
        cx="256.01"
        cy="406.65"
        rx="21.16"
        ry="15.87"
        style={{ fill: themeColors.themeAA }}
      />
      <ellipse
        cx="256.01"
        cy="385.49"
        rx="29.62"
        ry="21.16"
        style={{ fill: themeColors.base }}
      />
      <ellipse
        cx="154.45"
        cy="343.18"
        rx="21.16"
        ry="15.87"
        style={{ fill: themeColors.themeAA }}
      />
      <ellipse
        cx="154.45"
        cy="322.02"
        rx="29.62"
        ry="21.16"
        style={{ fill: themeColors.base }}
      />
      <ellipse
        cx="86.74"
        cy="343.18"
        rx="21.16"
        ry="15.87"
        style={{ fill: themeColors.themeAA }}
      />
      <ellipse
        cx="86.74"
        cy="322.02"
        rx="29.62"
        ry="21.16"
        style={{ fill: themeColors.base }}
      />
      <ellipse
        cx="118.48"
        cy="406.65"
        rx="21.16"
        ry="15.87"
        style={{ fill: themeColors.themeAA }}
      />
      <ellipse
        cx="118.48"
        cy="385.49"
        rx="29.62"
        ry="21.16"
        style={{ fill: themeColors.base }}
      />
      <ellipse
        cx="187.24"
        cy="406.65"
        rx="21.16"
        ry="15.87"
        style={{ fill: themeColors.themeAA }}
      />
      <ellipse
        cx="187.24"
        cy="385.49"
        rx="29.62"
        ry="21.16"
        style={{ fill: themeColors.base }}
      />
    </svg>
  )
}

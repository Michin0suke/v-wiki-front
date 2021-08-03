import React from 'react'
import chroma from 'chroma-js'
import { BlockedText } from '~/components/atoms/blocked_text'
import { Block } from '../atoms/block'
//@ts-ignore
import { CircleSlider } from 'react-circle-slider'
import { Colors } from '~/types/colors'

type Props = {
  keyText: string
  value: number
  colors: Colors
  className?: string
  onChange: (value: number) => void
}

export const FormColor: React.FC<Props> = ({
  keyText,
  value,
  colors,
  onChange,
  className,
}) => {
  return (
    <Block className={className} backgroundColor={colors.theme}>
      <div className="flex justify-between">
        <BlockedText backgroundColor={colors.themeAA} textColor={'#fff'}>
          {keyText}
        </BlockedText>
        <span style={{ color: colors.themeAAA }}>
          {chroma(colors.theme).hex()}
        </span>
      </div>

      <div className="flex justify-center">
        <CircleSlider
          value={value}
          min={0}
          max={360}
          showTooltip={true}
          onChange={onChange}
          progressColor={colors.base}
          tooltipColor={colors.themeAAA}
          knobColor={colors.themeAA}
        />
      </div>
    </Block>
  )
}

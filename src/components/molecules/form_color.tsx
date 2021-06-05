import React, { useContext } from 'react'
import chroma from 'chroma-js'
import { BlockedText } from '~/components/atoms/blocked_text'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { Block } from '../atoms/block'
//@ts-ignore
import { CircleSlider } from 'react-circle-slider'

type Props = {
  keyText: string
  value: number
  className?: string
  onChange: (value: number) => void
}

export const FormColor: React.FC<Props> = ({
  keyText,
  value,
  onChange,
  className,
}) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <Block className={className}>
      <div className="flex justify-between">
        <BlockedText>{keyText}</BlockedText>
        <span style={{ color: themeColors.themeAAA }}>
          {chroma(themeColors.theme).hex()}
        </span>
      </div>
      {/* <InputColor {...{ value, onChange }} className="ml-2" /> */}

      <div className="flex justify-center">
        <CircleSlider
          value={value}
          min={0}
          max={360}
          showTooltip={true}
          onChange={onChange}
          progressColor={themeColors.base}
          tooltipColor={themeColors.themeAAA}
          knobColor={themeColors.themeAA}
        />
      </div>
    </Block>
  )
}

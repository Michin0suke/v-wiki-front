import React from 'react'
import { BlockedText } from '~/components/atoms/blocked_text'
import { InputText } from '~/components/atoms/input_text'
import { Colors } from '~/types/colors'
import { Block } from '../atoms/block'
import { WarningText } from '../atoms/warning_text'

type Props = {
  keyText?: string
  value: string
  colors: Colors
  className?: string
  placeholder?: string
  prefix?: string
  suffix?: string | string[]
  textAlign?: 'left' | 'center' | 'right'
  naked?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeSuffix?: (event: React.ChangeEvent<HTMLSelectElement>) => void
  validateFunc?: (text: string) => string | null
}

export const FormText: React.FC<Props> = ({
  keyText,
  placeholder,
  value,
  className,
  prefix,
  suffix,
  textAlign,
  colors,
  onChange,
  onChangeSuffix,
  naked,
  validateFunc,
}) => {
  const contents = (
    <>
      <div className="flex gap-2">
        {keyText && (
          <BlockedText backgroundColor={colors.themeAA} textColor="#fff">
            {keyText}
          </BlockedText>
        )}
        <InputText
          {...{
            colors,
            placeholder,
            value,
            prefix,
            suffix,
            textAlign,
            onChange,
            onChangeSuffix,
          }}
        />
      </div>
      {validateFunc && validateFunc(value) !== null && (
        <WarningText color={colors.themeOppositeAAA} className="ml-2 mt-2">
          ※{validateFunc(value)}
        </WarningText>
      )}
    </>
  )
  return naked ? (
    <div>{contents}</div>
  ) : (
    <Block className={`${className}`} backgroundColor={colors.theme}>
      {contents}
    </Block>
  )
}

import React from 'react'
import { Block } from '../atoms/block'
import { BlockedText } from '../atoms/blocked_text'
import { InnerBorder } from '../atoms/inner_border'
import { Tag } from '../molecules/tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FormText } from '../molecules/form_text'
import { Colors } from '~/types/colors'

type Props = {
  colors: Colors
  className?: string
}

export const Tags: React.FC<Props> = ({ colors, className }) => {
  return (
    <Block className={className} backgroundColor={colors.theme}>
      <BlockedText backgroundColor={colors.themeAA} textColor={'#fff'}>
        タグ
      </BlockedText>
      <InnerBorder
        textColor={'#fff'}
        backgroundColor={'#fff'}
        borderColor={colors.themeAA}
        text="選択済"
        className="mt-3"
      >
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              className="text-xl"
              icon={faTimesCircle}
              style={{ color: colors.themeAA }}
            />
            <Tag colors={colors} text="あ" />
          </div>
        </div>
      </InnerBorder>
      <InnerBorder
        backgroundColor={'#fff'}
        borderColor={colors.themeAA}
        textColor={'#fff'}
        text="追加"
        className="mt-3"
      >
        <FormText colors={colors} prefix="＃" value="" onChange={() => {}} />
        <div className="flex gap-2 items-center mt-2">
          <Tag colors={colors} text="あ" />
        </div>
        <div className="flex gap-2 items-center mt-2">
          <Tag colors={colors} text="あ" />
        </div>
      </InnerBorder>
    </Block>
  )
}

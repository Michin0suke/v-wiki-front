import React from 'react'
import { Block } from '../atoms/block'
import { BlockedText } from '../atoms/blocked_text'
import { InnerBorder } from '../atoms/inner_border'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FormText } from '../molecules/form_text'
import { HashTag } from '../molecules/hashtag'
import { Colors } from '~/types/colors'

type Props = {
  colors: Colors
  className?: string
}

export const HashTags: React.FC<Props> = ({ className, colors }) => {
  return (
    <Block backgroundColor={colors.theme} className={`${className || ''}`}>
      <BlockedText backgroundColor={colors.themeAA} textColor={'#fff'}>
        ハッシュタグ
      </BlockedText>
      <InnerBorder
        text="選択済"
        className="mt-3"
        textColor={'#fff'}
        backgroundColor={'#fff'}
        borderColor={colors.themeAA}
      >
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            className="text-xl"
            icon={faTimesCircle}
            style={{ color: colors.themeAA }}
          />
          <HashTag colors={colors} description={'配信用'} name={'星川観測'} />
        </div>
        <div className="flex gap-2 items-center mt-3">
          <FontAwesomeIcon
            className="text-xl"
            icon={faTimesCircle}
            style={{ color: colors.themeAA }}
          />
          <HashTag colors={colors} description={'配信用'} name={'星川観測'} />
        </div>
      </InnerBorder>
      <InnerBorder
        borderColor={colors.themeAA}
        textColor={'#fff'}
        backgroundColor={'#fff'}
        text="追加"
        className="mt-3"
      >
        <div
          className="p-2 rounded"
          style={{ backgroundColor: colors.themeAA }}
        >
          <FormText
            colors={colors}
            keyText="説明"
            value=""
            onChange={() => {}}
          />
          <FormText
            colors={colors}
            value=""
            className="mt-2"
            prefix="＃"
            onChange={() => {}}
          />
        </div>
        <div className="flex gap-2 items-center mt-2">
          <HashTag colors={colors} description={'配信用'} name={'星川観測'} />
        </div>
        <div className="flex gap-2 items-center mt-2">
          <HashTag colors={colors} description={'配信用'} name={'星川観測'} />
        </div>
      </InnerBorder>
    </Block>
  )
}

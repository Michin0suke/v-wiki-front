import React, { useContext } from 'react'
import { Block } from '../atoms/block'
import { BlockedText } from '../atoms/blocked_text'
import { InnerBorder } from '../atoms/inner_border'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { FormText } from '../molecules/form_text'
import { HashTag } from '../molecules/hashtag'

type Props = {
  className?: string
}

export const HashTags: React.FC<Props> = ({ className }) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <Block className={`${className || ''}`}>
      <BlockedText>ハッシュタグ</BlockedText>
      <InnerBorder text="選択済" className="mt-3">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            className="text-xl"
            icon={faTimesCircle}
            style={{ color: themeColors.themeAA }}
          />
          <HashTag description={'配信用'} name={'星川観測'} />
        </div>
        <div className="flex gap-2 items-center mt-3">
          <FontAwesomeIcon
            className="text-xl"
            icon={faTimesCircle}
            style={{ color: themeColors.themeAA }}
          />
          <HashTag description={'配信用'} name={'星川観測'} />
        </div>
      </InnerBorder>
      <InnerBorder text="追加" className="mt-3">
        <div
          className="p-2 rounded"
          style={{ backgroundColor: themeColors.base }}
        >
          <FormText keyText="説明" value="" onChange={() => {}} />
          <FormText value="" className="mt-2" prefix="＃" onChange={() => {}} />
        </div>
        <div className="flex gap-2 items-center mt-2">
          <HashTag description={'配信用'} name={'星川観測'} />
        </div>
        <div className="flex gap-2 items-center mt-2">
          <HashTag description={'配信用'} name={'星川観測'} />
        </div>
      </InnerBorder>
    </Block>
  )
}

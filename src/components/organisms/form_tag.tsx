import React, { useContext } from 'react'
import { Block } from '../atoms/block'
import { BlockedText } from '../atoms/blocked_text'
import { InnerBorder } from '../atoms/inner_border'
import { Tag } from '../molecules/tag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { FormText } from '../molecules/form_text'
// import { ArtistForm } from '~/types/artist'
import { SetRecoilState } from 'recoil'

type Props = {
  setArtistState: SetRecoilState
  className?: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const FormTag: React.FC<Props> = ({ setArtistState, className }) => {
  const { themeColors } = useContext(ThemeColorContext)

  return (
    <Block className={`${className || ''}`}>
      <BlockedText>タグ</BlockedText>
      <InnerBorder text="選択済" className="mt-3">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              className="text-xl"
              icon={faTimesCircle}
              style={{ color: themeColors.themeAA }}
            />
            <Tag text="あ" />
          </div>
        </div>
      </InnerBorder>
      <InnerBorder text="追加" className="mt-3">
        <FormText prefix="＃" value="" onChange={() => {}} naked />
        <div className="flex gap-2 items-center mt-2">
          <Tag text="あ" />
        </div>
        <div className="flex gap-2 items-center mt-2">
          <Tag text="あ" />
        </div>
      </InnerBorder>
    </Block>
  )
}

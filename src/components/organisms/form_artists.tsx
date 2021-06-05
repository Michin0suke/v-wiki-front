import React, { useContext } from 'react'
import { ArtistCard } from '~/components/molecules/artist_card'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { InnerBorder } from '~/components/atoms/inner_border'
import { Block } from '~/components/atoms/block'
import { BlockedText } from '~/components/atoms/blocked_text'
import { FormTextBlock } from './form_text_block'
import { FormSelect } from '../molecules/form_select'

type Props = {
  className?: string
}

export const FormArtists: React.FC<Props> = ({ className }) => {
  const { themeColors } = useContext(ThemeColorContext)
  return (
    <Block className={`${className}`}>
      <BlockedText>所属グループ</BlockedText>
      <InnerBorder className="mt-3" text="選択済">
        <div className="flex flex-col gap-2">
          {Array(2)
            .fill(0)
            .map((_, key) => (
              <ArtistCard
                key={key}
                profileImageSrc="https://pbs.twimg.com/profile_images/1373651599357177862/aRgLHpGP_400x400.jpg"
                withDelBtn
              />
            ))}
        </div>
      </InnerBorder>
      <InnerBorder className="mt-3" text="追加">
        <div
          className="p-2 rounded"
          style={{
            backgroundColor: themeColors.base,
          }}
        >
          <FormSelect
            keyText="役割"
            values={['作曲', '作詞', 'ギター', '新規作成']}
            onChange={() => {}}
          />
          <FormTextBlock
            keyText="名前"
            className="mt-2"
            value={'花譜'}
            onChange={() => {}}
          />
          <FormTextBlock
            keyText="Twitter ID"
            prefix="@"
            className="mt-2"
            value={'virtual_kaf'}
            onChange={() => {}}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {Array(2)
            .fill(0)
            .map((_, key) => (
              <ArtistCard
                key={key}
                profileImageSrc="https://pbs.twimg.com/profile_images/1373651599357177862/aRgLHpGP_400x400.jpg"
              />
            ))}
        </div>
      </InnerBorder>
    </Block>
  )
}

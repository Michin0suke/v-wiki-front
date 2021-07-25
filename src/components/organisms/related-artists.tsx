import React, { useContext } from 'react'
import { ArtistCard } from '~/components/molecules/artist_card'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { InnerBorder } from '~/components/atoms/inner_border'
import { Block } from '~/components/atoms/block'
import { BlockedText } from '~/components/atoms/blocked_text'
import { FormSelect } from '../molecules/form_select'
import { FormText } from '../molecules/form_text'

type Props = {
  className?: string
}

export const RelatedArtists: React.FC<Props> = ({ className }) => {
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
            keyText="関連の種類"
            values={[
              '→所属グループ（←所属アーティスト）',
              '作詞',
              'ギター',
              '新規作成',
            ]}
            onChange={() => {}}
          />
        </div>
        <div
          className="mt-2 p-2 rounded"
          style={{
            backgroundColor: themeColors.base,
          }}
        >
          <FormText keyText="名前" value={'花譜'} onChange={() => {}} />
          <FormText
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

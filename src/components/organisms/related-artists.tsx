import React from 'react'
import { ArtistCard } from '~/components/molecules/artist_card'
import { InnerBorder } from '~/components/atoms/inner_border'
import { Block } from '~/components/atoms/block'
import { BlockedText } from '~/components/atoms/blocked_text'
import { FormSelect } from '../molecules/form_select'
import { FormText } from '../molecules/form_text'
import { Colors } from '~/types/colors'
import { ArtistCardType } from '~/model/artist/shared/artist-card'

type Props = {
  artists: ArtistCardType[]
  colors: Colors
  className?: string
}

export const RelatedArtists: React.FC<Props> = ({
  artists,
  colors,
  className,
}) => {
  return (
    <Block backgroundColor={colors.themeAA} className={`${className}`}>
      <BlockedText backgroundColor={colors.themeAA} textColor={'#fff'}>
        所属グループ
      </BlockedText>
      <InnerBorder
        textColor={'#fff'}
        backgroundColor={'#fff'}
        borderColor={colors.themeAA}
        className="mt-3"
        text="選択済"
      >
        <div className="flex flex-col gap-2">
          {artists.map((artist, key) => (
            <ArtistCard artist={artist} key={key} withDelBtn />
          ))}
        </div>
      </InnerBorder>
      <InnerBorder
        textColor={'#fff'}
        backgroundColor={'#fff'}
        borderColor={colors.themeAA}
        className="mt-3"
        text="追加"
      >
        <div
          className="p-2 rounded"
          style={{
            backgroundColor: colors.base,
          }}
        >
          <FormSelect
            colors={colors}
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
            backgroundColor: colors.base,
          }}
        >
          <FormText
            colors={colors}
            keyText="名前"
            value={'花譜'}
            onChange={() => {}}
          />
          <FormText
            colors={colors}
            keyText="Twitter ID"
            prefix="@"
            className="mt-2"
            value={'virtual_kaf'}
            onChange={() => {}}
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {artists.map((artist, key) => (
            <ArtistCard artist={artist} key={key} />
          ))}
        </div>
      </InnerBorder>
    </Block>
  )
}

import React, { useState } from 'react'
import { validate } from '~/model/artist/shared/validate'
import { Wrapper } from '~/components/templates/wrapper'
import { MainContents } from '~/components/templates/main_contents'
import { Tags } from '~/components/organisms/form_tag'
import { HashTags } from '~/components/organisms/hashtags'
import { Loading } from '~/components/atoms/loading'
import { HeadingH2 } from '~/components/molecules/heading_h2'
import { FormSelect } from '~/components/molecules/form_select'
import { FormText } from '~/components/molecules/form_text'
import { FormColor } from '~/components/molecules/form_color'
import { Birthday } from '~/components/molecules/form_text_triple'
// import { SubContents } from '~/components/templates/sub_contents'
import {
  ArtistCreateForm,
  artistCreateFormDefault,
} from '~/model/artist/artist-create-form'
import { artistRepository } from '~/infrastructure/artist/repository/artist-repository'
import { useRouter } from 'next/router'
import { HeightUnit, heightUnits } from '~/model/artist/shared/height-unit'
import { WeightUnit, weightUnits } from '~/model/artist/shared/weight-unit'
import { artistCreateFormToArtist } from '~/infrastructure/artist/converter/form/artist-create-form-to-artist'

const ArtistCreate = () => {
  const [artistForm, setArtistForm] = useState<ArtistCreateForm>(
    artistCreateFormDefault
  )
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const sendArtist = async () => {
    const artist = artistCreateFormToArtist(artistForm, (message: string) =>
      setError(message)
    )

    setLoading(true)
    const result = await artistRepository().create(artist)
    setLoading(false)

    if (result.error) {
      setError(result.error)
    } else {
      router.push('/')
    }
  }

  return (
    <Wrapper colors={artistForm.themeColors}>
      {/* <SubContents
        colors={artistForm.themeColors}
        className="my-5 mx-7 hidden lg:block"
      >
        <div
          className="w-full rounded-lg mt-6 p-5"
          style={{
            backgroundColor: artistForm.themeColors.theme,
            color: artistForm.themeColors.themeAAA,
          }}
        >
          <pre>{JSON.stringify(artistForm, null, 2)}</pre>
        </div>
      </SubContents> */}
      <MainContents colors={artistForm.themeColors} className="mx-auto pt-3">
        <div>
          <HeadingH2
            colors={artistForm.themeColors}
            text="アーティスト編集"
            className="-mt-5"
          />
          <div className="flex flex-col gap-7 pt-4">
            <div className="flex flex-col gap-2">
              <FormSelect
                colors={artistForm.themeColors}
                values={
                  artistForm.isV
                    ? ['バーチャルな存在である', 'バーチャルな存在ではない']
                    : ['バーチャルな存在ではない', 'バーチャルな存在である']
                }
                onChange={(e) =>
                  setArtistForm({
                    ...artistForm,
                    isV: e.target.value === 'バーチャルな存在である',
                  })
                }
              />
              {artistForm.isV && (
                <FormText
                  colors={artistForm.themeColors}
                  keyText={'Vの種類'}
                  value={artistForm.vType}
                  onChange={(e) =>
                    setArtistForm({
                      ...artistForm,
                      vType: e.target.value,
                    })
                  }
                  placeholder="Vtuber など"
                />
              )}
              <FormText
                colors={artistForm.themeColors}
                keyText={'名前'}
                value={artistForm.name}
                onChange={(e) =>
                  setArtistForm({
                    ...artistForm,
                    name: e.target.value,
                  })
                }
              />
              <FormText
                colors={artistForm.themeColors}
                keyText={'名前 (ふりがな)'}
                value={artistForm.nameRuby}
                onChange={(e) =>
                  setArtistForm({
                    ...artistForm,
                    nameRuby: e.target.value,
                  })
                }
              />
              <FormText
                colors={artistForm.themeColors}
                keyText="Twitter ID"
                value={artistForm.twitterId}
                onChange={(e) =>
                  setArtistForm({
                    ...artistForm,
                    twitterId: e.target.value,
                  })
                }
                prefix="@"
                validateFunc={validate.twitterId}
              />
              <FormText
                colors={artistForm.themeColors}
                keyText="身長"
                value={artistForm.height}
                onChange={(e) =>
                  setArtistForm({
                    ...artistForm,
                    height: e.target.value,
                  })
                }
                onChangeSuffix={(e) => {
                  setArtistForm({
                    ...artistForm,
                    heightUnit: e.target.value as HeightUnit,
                  })
                }}
                suffix={[artistForm.heightUnit, ...heightUnits].filter(
                  (x, i, self) => self.indexOf(x) === i
                )}
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <FormText
                colors={artistForm.themeColors}
                keyText="体重"
                value={artistForm.weight}
                onChange={(e) =>
                  setArtistForm({
                    ...artistForm,
                    weight: e.target.value,
                  })
                }
                suffix={[artistForm.weightUnit, ...weightUnits].filter(
                  (x, i, self) => self.indexOf(x) === i
                )}
                onChangeSuffix={(e) =>
                  setArtistForm({
                    ...artistForm,
                    weightUnit: e.target.value as WeightUnit,
                  })
                }
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <FormText
                colors={artistForm.themeColors}
                keyText="ジェンダー"
                value={artistForm.gender}
                onChange={(e) =>
                  setArtistForm({
                    ...artistForm,
                    gender: e.target.value,
                  })
                }
              />
              <FormText
                colors={artistForm.themeColors}
                keyText="年齢"
                value={artistForm.age}
                onChange={(e) =>
                  setArtistForm({
                    ...artistForm,
                    age: e.target.value,
                  })
                }
                suffix="歳"
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <Birthday
                colors={artistForm.themeColors}
                values={[
                  artistForm.birthday.year,
                  artistForm.birthday.month,
                  artistForm.birthday.date,
                ]}
                onChanges={[
                  (e) =>
                    setArtistForm({
                      ...artistForm,
                      birthday: {
                        ...artistForm.birthday,
                        year: e.target.value,
                      },
                    }),
                  (e) =>
                    setArtistForm({
                      ...artistForm,
                      birthday: {
                        ...artistForm.birthday,
                        month: e.target.value,
                      },
                    }),
                  (e) =>
                    setArtistForm({
                      ...artistForm,
                      birthday: {
                        ...artistForm.birthday,
                        date: e.target.value,
                      },
                    }),
                ]}
              />
            </div>
            <FormColor
              colors={artistForm.themeColors}
              keyText={'テーマカラー'}
              value={artistForm.themeHue}
              onChange={(value) => {
                setArtistForm({
                  ...artistForm,
                  themeHue: value,
                })
              }}
            />
            {/* <RelatedArtistForms /> */}
            <Tags colors={artistForm.themeColors} />
            <HashTags colors={artistForm.themeColors} />
          </div>
        </div>
        {loading && (
          <Loading
            color={artistForm.themeColors.themeAA}
            className="fixed w-96 m-auto top-0 right-0 bottom-0 left-0"
          />
        )}
        {error && <p onClick={() => setError(null)}>{error}</p>}
      </MainContents>
      <p className="fixed bottom-5 text-center w-full max-w-2xl mx-auto left-0 right-0">
        <button
          onClick={() => sendArtist()}
          className="mx-auto p-2 text-2xl text-white border rounded-md opacity-80 hover:opacity-100"
          style={{
            backgroundColor: artistForm.themeColors.themeOppositeAAA,
          }}
        >
          作成
        </button>
      </p>
      <div className="hidden lg:block xl:hidden w-10"></div>
      {/* <SubContents className="my-5 mx-7 hidden xl:block">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="w-full h-44 rounded-lg mt-6"
              style={{
                backgroundColor: pageState.colors.theme,
                color: pageState.colors.themeAAA,
              }}
            ></div>
          ))}
      </SubContents> */}
    </Wrapper>
  )
}

export default ArtistCreate

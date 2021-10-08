import React, { useEffect, useState } from 'react'
import { HeightUnit, WeightUnit } from '~/model/artist/shared/units'
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
import { SubContents } from '~/components/templates/sub_contents'
import { getColors } from '~/utils/theme_colors'
import { useRouter } from 'next/router'
import { Artist } from '~/model/artist'
import { artistRepository } from '~/infrastructure/artist/repository/artist-repository'

export const getServerSideProps = async ({ params }: { params: any }) => {
  return {
    props: { id: params.id },
  }
}

const ArtistEditPage = ({ id }: { id: string }) => {
  const [artist, setArtist] = useState<ArtistForm | null>(null)
  const router = useRouter()

  const fetchArtist = async () => {
    const fetchedArtist = await artistRepository().findById(id)
    if (fetchedArtist) {
      setArtist(fetchedArtist)
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    fetchArtist()
  }, [])

  if (!artist) {
    return <div></div>
  }

  return (
    <Wrapper colors={artist.themeColors}>
      <SubContents
        colors={artist.themeColors}
        className="my-5 mx-7 hidden lg:block"
      >
        <div
          className="w-full rounded-lg mt-6 p-5"
          style={{
            backgroundColor: artist.themeColors.theme,
            color: artist.themeColors.themeAAA,
          }}
        >
          <pre>{JSON.stringify(artist, null, 2)}</pre>
        </div>
      </SubContents>
      <MainContents colors={artist.themeColors} className="mx-auto pt-3">
        <div>
          <HeadingH2
            colors={artist.themeColors}
            text="アーティスト編集"
            className="-mt-5"
          />
          <div className="flex flex-col gap-7 pt-4">
            <div className="flex flex-col gap-2">
              <FormSelect
                colors={artist.themeColors}
                values={
                  artist.isV
                    ? ['バーチャルな存在である', 'バーチャルな存在ではない']
                    : ['バーチャルな存在ではない', 'バーチャルな存在である']
                }
                onChange={(e) =>
                  setArtist({
                    ...artist,
                    isV: e.target.value === 'バーチャルな存在である',
                  })
                }
              />
              {artist.isV && (
                <FormText
                  colors={artist.themeColors}
                  keyText={'Vの種類'}
                  value={artist.vType}
                  onChange={(e) =>
                    setArtist({
                      ...artist,
                      vType: e.target.value,
                    })
                  }
                  placeholder="Vtuber など"
                />
              )}
              <FormText
                colors={artist.themeColors}
                keyText={'名前'}
                value={artist.name}
                onChange={(e) =>
                  setArtist({
                    ...artist,
                    name: e.target.value,
                  })
                }
                validateFunc={validate.artist.name}
              />
              <FormText
                colors={artist.themeColors}
                keyText={'名前 (ふりがな)'}
                value={artist.nameRuby}
                onChange={(e) =>
                  setArtist({
                    ...artist,
                    nameRuby: e.target.value,
                  })
                }
                validateFunc={validate.artist.nameRuby}
              />
              <FormText
                colors={artist.themeColors}
                keyText="Twitter ID"
                value={artist.twitterId}
                onChange={(e) =>
                  setArtist({
                    ...artist,
                    twitterId: e.target.value,
                  })
                }
                prefix="@"
                validateFunc={validate.twitterId}
              />
              <FormText
                colors={artist.themeColors}
                keyText="身長"
                value={artist.height}
                onChange={(e) =>
                  setArtist({
                    ...artist,
                    height: e.target.value,
                  })
                }
                onChangeSuffix={(e) => {
                  setArtist({
                    ...artist,
                    heightUnit: e.target.value as HeightUnit,
                  })
                }}
                suffix={[artist.heightUnit, ...heightUnits].filter(
                  (x, i, self) => self.indexOf(x) === i
                )}
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <FormText
                colors={artist.themeColors}
                keyText="体重"
                value={artist.weight}
                onChange={(e) =>
                  setArtist({
                    ...artist,
                    weight: e.target.value,
                  })
                }
                suffix={[artist.weightUnit, ...weightUnits].filter(
                  (x, i, self) => self.indexOf(x) === i
                )}
                onChangeSuffix={(e) =>
                  setArtist({
                    ...artist,
                    weightUnit: e.target.value as WeightUnit,
                  })
                }
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <FormText
                colors={artist.themeColors}
                keyText="ジェンダー"
                value={artist.gender}
                onChange={(e) =>
                  setArtist({
                    ...artist,
                    gender: e.target.value,
                  })
                }
                validateFunc={validate.artist.gender}
              />
              <FormText
                colors={artist.themeColors}
                keyText="年齢"
                value={artist.age}
                onChange={(e) =>
                  setArtist({
                    ...artist,
                    age: e.target.value,
                  })
                }
                suffix="歳"
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <Birthday
                colors={artist.themeColors}
                values={[
                  artist.birthday.year,
                  artist.birthday.month,
                  artist.birthday.date,
                ]}
                onChanges={[
                  (e) =>
                    setArtist({
                      ...artist,
                      birthday: {
                        ...artist.birthday,
                        year: e.target.value,
                      },
                    }),
                  (e) =>
                    setArtist({
                      ...artist,
                      birthday: {
                        ...artist.birthday,
                        month: e.target.value,
                      },
                    }),
                  (e) =>
                    setArtist({
                      ...artist,
                      birthday: {
                        ...artist.birthday,
                        date: e.target.value,
                      },
                    }),
                ]}
                validateFunc={validate.artist.birthday}
              />
            </div>
            <FormColor
              colors={artist.themeColors}
              keyText={'テーマカラー'}
              value={artist.themeHue}
              onChange={(value) => {
                setArtist({
                  ...artist,
                  themeHue: value,
                  colors: getColors(value, false),
                })
              }}
            />
            {/* <RelatedArtists /> */}
            <Tags colors={artist.themeColors} />
            <HashTags colors={artist.themeColors} />
          </div>
        </div>
        {(loading || LoadingUpdate) && (
          <Loading
            color={artist.themeColors.themeAA}
            className="fixed w-96 m-auto top-0 right-0 bottom-0 left-0"
          />
        )}
      </MainContents>
      <p className="fixed bottom-5 text-center w-full max-w-2xl mx-auto left-0 right-0">
        <button
          onClick={() =>
            updateArtist({
              variables: artistFormToGraphql(artist),
            })
          }
          className="mx-auto p-2 text-2xl text-white border rounded-md opacity-80 hover:opacity-100"
          style={{
            backgroundColor: artist.themeColors.themeOppositeAAA,
          }}
        >
          アップデート
        </button>

        <button
          onClick={() => refetch()}
          className="mx-auto p-2 text-2xl text-white border rounded-md opacity-80 hover:opacity-100 ml-4"
          style={{
            backgroundColor: artist.themeColors.themeOppositeAAA,
          }}
        >
          リロード
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
                  backgroundColor: pageState.themeColors.theme,
                  color: pageState.themeColors.themeAAA,
                }}
              ></div>
            ))}
        </SubContents> */}
    </Wrapper>
  )
}

export default ArtistEditPage

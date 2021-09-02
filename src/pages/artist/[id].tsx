import React, { useEffect, useState } from 'react'
import { HeightUnit, WeightUnit } from '~/model/artist/shared/units'
import { heightUnits, weightUnits } from '~/utils/units'
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
import { useMutation, useQuery } from '@apollo/client'
import { SubContents } from '~/components/templates/sub_contents'
import { getColors } from '~/utils/theme_colors'
import { artistService } from '~/usecase/artist/artist-service'
import { Artist } from '~/domain/artist/entity/artist'
import { useRouter } from 'next/router'

export const getServerSideProps = async ({ params }: { params: any }) => {
  return {
    props: { id: params.id },
  }
}

const Artist = ({ id }: { id: string }) => {
  const [artist, setArtist] = useState<Artist | null>(null)
  const router = useRouter()

  const fetchArtist = async () => {
    const fetchedArtist = await artistService().findById(id)
    if (fetchedArtist) {
      setArtist(fetchedArtist)
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    fetchArtist()
  }, [])

  return (
    <Wrapper colors={artist?.properties().colors}>
      <SubContents
        colors={artist?.properties().colors}
        className="my-5 mx-7 hidden lg:block"
      >
        <div
          className="w-full rounded-lg mt-6 p-5"
          style={{
            backgroundColor: artist?.properties().colors.theme,
            color: artist?.properties().colors.themeAAA,
          }}
        >
          <pre>{JSON.stringify(artist?.properties(), null, 2)}</pre>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <pre>{JSON.stringify(artist?.properties(), null, 2)}</pre>
        </div>
      </SubContents>
      <MainContents
        colors={artist?.properties().colors}
        className="mx-auto pt-3"
      >
        <div>
          <HeadingH2
            colors={artist?.properties().colors}
            text="アーティスト編集"
            className="-mt-5"
          />
          <div className="flex flex-col gap-7 pt-4">
            <div className="flex flex-col gap-2">
              <FormSelect
                colors={artist?.properties().colors}
                values={
                  artist?.properties().isV
                    ? ['バーチャルな存在である', 'バーチャルな存在ではない']
                    : ['バーチャルな存在ではない', 'バーチャルな存在である']
                }
                onChange={(e) =>
                  setartist?.properties()({
                    ...artist?.properties(),
                    isV: e.target.value === 'バーチャルな存在である',
                  })
                }
              />
              {artist?.properties().isV && (
                <FormText
                  colors={artist?.properties().colors}
                  keyText={'Vの種類'}
                  value={artist?.properties().vType}
                  onChange={(e) =>
                    setartist?.properties()({
                      ...artist?.properties(),
                      vType: e.target.value,
                    })
                  }
                  placeholder="Vtuber など"
                />
              )}
              <FormText
                colors={artist?.properties().colors}
                keyText={'名前'}
                value={artist?.properties().name}
                onChange={(e) =>
                  setartist?.properties()({
                    ...artist?.properties(),
                    name: e.target.value,
                  })
                }
                validateFunc={validate.artist.name}
              />
              <FormText
                colors={artist?.properties().colors}
                keyText={'名前 (ふりがな)'}
                value={artist?.properties().nameRuby}
                onChange={(e) =>
                  setartist?.properties()({
                    ...artist?.properties(),
                    nameRuby: e.target.value,
                  })
                }
                validateFunc={validate.artist.nameRuby}
              />
              <FormText
                colors={artist?.properties().colors}
                keyText="Twitter ID"
                value={artist?.properties().twitterId}
                onChange={(e) =>
                  setartist?.properties()({
                    ...artist?.properties(),
                    twitterId: e.target.value,
                  })
                }
                prefix="@"
                validateFunc={validate.twitterId}
              />
              <FormText
                colors={artist?.properties().colors}
                keyText="身長"
                value={artist?.properties().height}
                onChange={(e) =>
                  setartist?.properties()({
                    ...artist?.properties(),
                    height: e.target.value,
                  })
                }
                onChangeSuffix={(e) => {
                  setartist?.properties()({
                    ...artist?.properties(),
                    heightUnit: e.target.value as HeightUnit,
                  })
                }}
                suffix={[
                  artist?.properties().heightUnit,
                  ...heightUnits,
                ].filter((x, i, self) => self.indexOf(x) === i)}
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <FormText
                colors={artist?.properties().colors}
                keyText="体重"
                value={artist?.properties().weight}
                onChange={(e) =>
                  setartist?.properties()({
                    ...artist?.properties(),
                    weight: e.target.value,
                  })
                }
                suffix={[
                  artist?.properties().weightUnit,
                  ...weightUnits,
                ].filter((x, i, self) => self.indexOf(x) === i)}
                onChangeSuffix={(e) =>
                  setartist?.properties()({
                    ...artist?.properties(),
                    weightUnit: e.target.value as WeightUnit,
                  })
                }
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <FormText
                colors={artist?.properties().colors}
                keyText="ジェンダー"
                value={artist?.properties().gender}
                onChange={(e) =>
                  setartist?.properties()({
                    ...artist?.properties(),
                    gender: e.target.value,
                  })
                }
                validateFunc={validate.artist.gender}
              />
              <FormText
                colors={artist?.properties().colors}
                keyText="年齢"
                value={artist?.properties().age}
                onChange={(e) =>
                  setartist?.properties()({
                    ...artist?.properties(),
                    age: e.target.value,
                  })
                }
                suffix="歳"
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <Birthday
                colors={artist?.properties().colors}
                values={[
                  artist?.properties().birthday.year,
                  artist?.properties().birthday.month,
                  artist?.properties().birthday.date,
                ]}
                onChanges={[
                  (e) =>
                    setartist?.properties()({
                      ...artist?.properties(),
                      birthday: {
                        ...artist?.properties().birthday,
                        year: e.target.value,
                      },
                    }),
                  (e) =>
                    setartist?.properties()({
                      ...artist?.properties(),
                      birthday: {
                        ...artist?.properties().birthday,
                        month: e.target.value,
                      },
                    }),
                  (e) =>
                    setartist?.properties()({
                      ...artist?.properties(),
                      birthday: {
                        ...artist?.properties().birthday,
                        date: e.target.value,
                      },
                    }),
                ]}
                validateFunc={validate.artist.birthday}
              />
            </div>
            <FormColor
              colors={artist?.properties().colors}
              keyText={'テーマカラー'}
              value={artist?.properties().themeHue}
              onChange={(value) => {
                setartist?.properties()({
                  ...artist?.properties(),
                  themeHue: value,
                  colors: getColors(value, false),
                })
              }}
            />
            {/* <RelatedArtists /> */}
            <Tags colors={artist?.properties().colors} />
            <HashTags colors={artist?.properties().colors} />
          </div>
        </div>
        {(loading || LoadingUpdate) && (
          <Loading
            color={artist?.properties().colors.themeAA}
            className="fixed w-96 m-auto top-0 right-0 bottom-0 left-0"
          />
        )}
      </MainContents>
      <p className="fixed bottom-5 text-center w-full max-w-2xl mx-auto left-0 right-0">
        <button
          onClick={() =>
            updateArtist({
              variables: artistFormToGraphql(artist?.properties()),
            })
          }
          className="mx-auto p-2 text-2xl text-white border rounded-md opacity-80 hover:opacity-100"
          style={{
            backgroundColor: artist?.properties().colors.themeOppositeAAA,
          }}
        >
          アップデート
        </button>

        <button
          onClick={() => refetch()}
          className="mx-auto p-2 text-2xl text-white border rounded-md opacity-80 hover:opacity-100 ml-4"
          style={{
            backgroundColor: artist?.properties().colors.themeOppositeAAA,
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
                  backgroundColor: pageState.colors.theme,
                  color: pageState.colors.themeAAA,
                }}
              ></div>
            ))}
        </SubContents> */}
    </Wrapper>
  )
}

export default Artist

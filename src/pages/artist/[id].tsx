import React, { useState } from 'react'
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
import { QueryArtistForUpdate } from '~/model/artist/artist-form/graphql/__generated__/QueryArtistForUpdate'
import { QueryArtistForUpdateGql } from '~/infrastructure/artist/graphql/query-artist'
import { artistGraphqlToForm } from '~/model/artist/artist-form/artist-graphql-to-form'
import { artistFormToGraphql } from '~/model/artist/artist-form/artist-form-to-graphql'
import { ArtistUpdateForm } from '~/model/artist/artist-form/artist-update-form'
import { ArtistUpdateFormDefault } from '~/model/artist/artist-form/artist-update-form-default'
import { UpdateArtistGql } from '~/infrastructure/artist/graphql/update-artist'
import { UpdateArtist } from '~/model/artist/artist-form/graphql/__generated__/UpdateArtist'
import { SubContents } from '~/components/templates/sub_contents'
import { getColors } from '~/utils/theme_colors'

export const getServerSideProps = async ({ params }: { params: any }) => {
  return {
    props: { id: params.id },
  }
}

const Artist = ({ id }: { id: string }) => {
  const [artistFormState, setArtistFormState] = useState<ArtistUpdateForm>(
    ArtistUpdateFormDefault
  )

  const { data, loading, refetch } = useQuery<QueryArtistForUpdate>(
    QueryArtistForUpdateGql,
    {
      variables: {
        id,
      },
      onCompleted: ({ artist }) => {
        artist && setArtistFormState(artistGraphqlToForm(artist))
      },
      notifyOnNetworkStatusChange: true,
    }
  )

  const [updateArtist, { loading: LoadingUpdate }] = useMutation<UpdateArtist>(
    UpdateArtistGql,
    {
      onCompleted: ({ update }) =>
        data?.artist &&
        setArtistFormState(
          artistGraphqlToForm({
            ...update,
            relatedArtists: data.artist.relatedArtists,
          })
        ),
    }
  )

  return (
    <Wrapper colors={artistFormState.colors}>
      <SubContents
        colors={artistFormState.colors}
        className="my-5 mx-7 hidden lg:block"
      >
        <div
          className="w-full rounded-lg mt-6 p-5"
          style={{
            backgroundColor: artistFormState.colors.theme,
            color: artistFormState.colors.themeAAA,
          }}
        >
          <pre>{JSON.stringify(artistFormState, null, 2)}</pre>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <pre>{JSON.stringify(artistFormState, null, 2)}</pre>
        </div>
      </SubContents>
      <MainContents colors={artistFormState.colors} className="mx-auto pt-3">
        <div>
          <HeadingH2
            colors={artistFormState.colors}
            text="アーティスト編集"
            className="-mt-5"
          />
          <div className="flex flex-col gap-7 pt-4">
            <div className="flex flex-col gap-2">
              <FormSelect
                colors={artistFormState.colors}
                values={
                  artistFormState.isV
                    ? ['バーチャルな存在である', 'バーチャルな存在ではない']
                    : ['バーチャルな存在ではない', 'バーチャルな存在である']
                }
                onChange={(e) =>
                  setArtistFormState({
                    ...artistFormState,
                    isV: e.target.value === 'バーチャルな存在である',
                  })
                }
              />
              {artistFormState.isV && (
                <FormText
                  colors={artistFormState.colors}
                  keyText={'Vの種類'}
                  value={artistFormState.vType}
                  onChange={(e) =>
                    setArtistFormState({
                      ...artistFormState,
                      vType: e.target.value,
                    })
                  }
                  placeholder="Vtuber など"
                />
              )}
              <FormText
                colors={artistFormState.colors}
                keyText={'名前'}
                value={artistFormState.name}
                onChange={(e) =>
                  setArtistFormState({
                    ...artistFormState,
                    name: e.target.value,
                  })
                }
                validateFunc={validate.artist.name}
              />
              <FormText
                colors={artistFormState.colors}
                keyText={'名前 (ふりがな)'}
                value={artistFormState.nameRuby}
                onChange={(e) =>
                  setArtistFormState({
                    ...artistFormState,
                    nameRuby: e.target.value,
                  })
                }
                validateFunc={validate.artist.nameRuby}
              />
              <FormText
                colors={artistFormState.colors}
                keyText="Twitter ID"
                value={artistFormState.twitterId}
                onChange={(e) =>
                  setArtistFormState({
                    ...artistFormState,
                    twitterId: e.target.value,
                  })
                }
                prefix="@"
                validateFunc={validate.twitterId}
              />
              <FormText
                colors={artistFormState.colors}
                keyText="身長"
                value={artistFormState.height}
                onChange={(e) =>
                  setArtistFormState({
                    ...artistFormState,
                    height: e.target.value,
                  })
                }
                onChangeSuffix={(e) => {
                  setArtistFormState({
                    ...artistFormState,
                    heightUnit: e.target.value as HeightUnit,
                  })
                }}
                suffix={[artistFormState.heightUnit, ...heightUnits].filter(
                  (x, i, self) => self.indexOf(x) === i
                )}
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <FormText
                colors={artistFormState.colors}
                keyText="体重"
                value={artistFormState.weight}
                onChange={(e) =>
                  setArtistFormState({
                    ...artistFormState,
                    weight: e.target.value,
                  })
                }
                suffix={[artistFormState.weightUnit, ...weightUnits].filter(
                  (x, i, self) => self.indexOf(x) === i
                )}
                onChangeSuffix={(e) =>
                  setArtistFormState({
                    ...artistFormState,
                    weightUnit: e.target.value as WeightUnit,
                  })
                }
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <FormText
                colors={artistFormState.colors}
                keyText="ジェンダー"
                value={artistFormState.gender}
                onChange={(e) =>
                  setArtistFormState({
                    ...artistFormState,
                    gender: e.target.value,
                  })
                }
                validateFunc={validate.artist.gender}
              />
              <FormText
                colors={artistFormState.colors}
                keyText="年齢"
                value={artistFormState.age}
                onChange={(e) =>
                  setArtistFormState({
                    ...artistFormState,
                    age: e.target.value,
                  })
                }
                suffix="歳"
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <Birthday
                colors={artistFormState.colors}
                values={[
                  artistFormState.birthday.year,
                  artistFormState.birthday.month,
                  artistFormState.birthday.date,
                ]}
                onChanges={[
                  (e) =>
                    setArtistFormState({
                      ...artistFormState,
                      birthday: {
                        ...artistFormState.birthday,
                        year: e.target.value,
                      },
                    }),
                  (e) =>
                    setArtistFormState({
                      ...artistFormState,
                      birthday: {
                        ...artistFormState.birthday,
                        month: e.target.value,
                      },
                    }),
                  (e) =>
                    setArtistFormState({
                      ...artistFormState,
                      birthday: {
                        ...artistFormState.birthday,
                        date: e.target.value,
                      },
                    }),
                ]}
                validateFunc={validate.artist.birthday}
              />
            </div>
            <FormColor
              colors={artistFormState.colors}
              keyText={'テーマカラー'}
              value={artistFormState.themeHue}
              onChange={(value) => {
                setArtistFormState({
                  ...artistFormState,
                  themeHue: value,
                  colors: getColors(value, false),
                })
              }}
            />
            {/* <RelatedArtists /> */}
            <Tags colors={artistFormState.colors} />
            <HashTags colors={artistFormState.colors} />
          </div>
        </div>
        {(loading || LoadingUpdate) && (
          <Loading
            color={artistFormState.colors.themeAA}
            className="fixed w-96 m-auto top-0 right-0 bottom-0 left-0"
          />
        )}
      </MainContents>
      <p className="fixed bottom-5 text-center w-full max-w-2xl mx-auto left-0 right-0">
        <button
          onClick={() =>
            updateArtist({
              variables: artistFormToGraphql(artistFormState),
            })
          }
          className="mx-auto p-2 text-2xl text-white border rounded-md opacity-80 hover:opacity-100"
          style={{
            backgroundColor: artistFormState.colors.themeOppositeAAA,
          }}
        >
          アップデート
        </button>

        <button
          onClick={() => refetch()}
          className="mx-auto p-2 text-2xl text-white border rounded-md opacity-80 hover:opacity-100 ml-4"
          style={{
            backgroundColor: artistFormState.colors.themeOppositeAAA,
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

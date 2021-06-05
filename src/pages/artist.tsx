import React, { useState, useEffect, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { HeightUnit, WeightUnit } from '~/types/units'
import { getColors, Colors } from '~/utils/theme_colors'
import { heightUnits, weightUnits } from '~/utils/units'
import { artistFormState } from '~/atoms/artist_form'
import { validate } from '~/utils/validate'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { Wrapper } from '~/components/templates/wrapper'
import { MainContents } from '~/components/templates/main_contents'
import { SubContents } from '~/components/templates/sub_contents'
import { FormTextBlock } from '~/components/organisms/form_text_block'
import { FormColorBlock } from '~/components/organisms/form_color_block'
import { FormBirthday } from '~/components/organisms/form_birthday'
import { HeadingH2Block } from '~/components/organisms/heading_h2_block'
import { FormArtists } from '~/components/organisms/form_artists'
import { FormSelectBlock } from '~/components/organisms/form_select_block'
import { FormTag } from '~/components/organisms/form_tag'
import { FormHashTag } from '~/components/organisms/form_hash_tag'
import { colorsState } from '~/atoms/colors'

const Home = () => {
  const [themeColors, setThemeColor] = useState<Colors>({
    base: '#fff',
    themeHue: 270,
    theme: '#000',
    themeAA: '#000',
    themeAAA: '#000',
    themeOppositeAAA: '#000',
    themeLight: '#fff',
  })
  const [colors, setColors] = useRecoilState(colorsState)
  const [artist, setArtist] = useRecoilState(artistFormState)

  const changeThemeColors = useCallback(
    (hue: number) => {
      setThemeColor(getColors(hue, colors.isA11yMode))
    },
    [colors.isA11yMode]
  )

  useEffect(() => {
    if (themeColors.themeHue % 10 === 0) {
      changeThemeColors(themeColors.themeHue)
    }
  }, [changeThemeColors, themeColors.themeHue])

  useEffect(() => {
    changeThemeColors(themeColors.themeHue)
  }, [changeThemeColors, colors.isA11yMode])

  const changeThemeColorHue = (themeHue: number) => {
    setThemeColor({
      ...themeColors,
      themeHue,
    })
  }

  return (
    <ThemeColorContext.Provider
      value={{
        themeColors,
      }}
    >
      <Wrapper>
        <SubContents className="my-5 mx-7 hidden lg:block">
          <div
            className="w-full rounded-lg mt-6 p-5"
            style={{
              backgroundColor: themeColors.theme,
              color: themeColors.themeAAA,
            }}
          >
            <pre>{JSON.stringify(artist, null, 2)}</pre>
            <pre>{JSON.stringify(colors, null, 2)}</pre>
          </div>
        </SubContents>
        <MainContents className="mx-auto pt-3">
          <HeadingH2Block text="アーティスト編集" className="-mt-5" />
          <div className="flex flex-col gap-7 pt-4">
            <div className="flex flex-col gap-2">
              <FormSelectBlock
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
                <FormTextBlock
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
              <FormTextBlock
                keyText={'名前'}
                value={artist.name}
                onChange={(e) => setArtist({ ...artist, name: e.target.value })}
                validateFunc={validate.artist.name}
              />
              <FormTextBlock
                keyText={'名前 (ふりがな)'}
                value={artist.nameRuby}
                onChange={(e) =>
                  setArtist({ ...artist, nameRuby: e.target.value })
                }
                validateFunc={validate.artist.nameRuby}
              />
              <FormTextBlock
                keyText="Twitter ID"
                value={artist.twitterId}
                onChange={(e) =>
                  setArtist({ ...artist, twitterId: e.target.value })
                }
                prefix="@"
                validateFunc={validate.twitterId}
              />
              <FormTextBlock
                keyText="YouTube ID"
                value={artist.youtubeId}
                onChange={(e) =>
                  setArtist({ ...artist, youtubeId: e.target.value })
                }
                validateFunc={validate.youtubeId}
              />
              <FormTextBlock
                keyText="身長"
                value={artist.height}
                onChange={(e) =>
                  setArtist({ ...artist, height: e.target.value })
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
              <FormTextBlock
                keyText="体重"
                value={artist.weight}
                onChange={(e) =>
                  setArtist({ ...artist, weight: e.target.value })
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
              <FormTextBlock
                keyText="ジェンダー"
                value={artist.gender}
                onChange={(e) =>
                  setArtist({ ...artist, gender: e.target.value })
                }
                validateFunc={validate.artist.gender}
              />
              <FormTextBlock
                keyText="年齢"
                value={artist.age}
                onChange={(e) => setArtist({ ...artist, age: e.target.value })}
                suffix="歳"
                textAlign="right"
                validateFunc={validate.unsignedInt}
              />
              <FormBirthday
                values={[
                  artist.birthday.year,
                  artist.birthday.month,
                  artist.birthday.day,
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
                        day: e.target.value,
                      },
                    }),
                ]}
                validateFunc={validate.artist.birthday}
              />
            </div>
            <FormColorBlock
              keyText={'テーマカラー'}
              value={themeColors.themeHue}
              onChange={(value) => {
                changeThemeColorHue(value)
                setColors({
                  ...colors,
                  themes: {
                    ...colors.themes,
                    themeHue: value,
                  },
                })
              }}
            />
            <FormArtists />
            <FormTag />
            <FormHashTag />
          </div>
        </MainContents>
        <div className="hidden lg:block xl:hidden w-10"></div>
        <SubContents className="my-5 mx-7 hidden xl:block">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-full h-44 rounded-lg mt-6"
                style={{
                  backgroundColor: themeColors.theme,
                  color: themeColors.themeAAA,
                }}
              ></div>
            ))}
        </SubContents>
      </Wrapper>
    </ThemeColorContext.Provider>
  )
}

export default Home

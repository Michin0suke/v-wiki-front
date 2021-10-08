import { getColors } from '~/utils/theme_colors'
import { parse } from 'date-fns'
import { Artist } from '~/model/artist/artist'
import { QueryArtist_findArtistById } from '../../graphql/__generated__/QueryArtist'
import { isHeightUnit } from '~/model/artist/shared/height-unit'
import { isWeightUnit } from '~/model/artist/shared/weight-unit'

const DEFAULT_THEME_HUE = 250

export const artistResponseToArtist = (
  response: QueryArtist_findArtistById
): Artist => {
  let birthday: Date | null = null
  if (response.birthday) {
    if (response.birthday.match(/\d{1,2}\/\d{1,2}/)) {
      birthday = parse(response.birthday, 'M/d', new Date())
    } else {
      birthday = parse(response.birthday, 'Y/M/d', new Date())
    }
  }

  if (!isHeightUnit(response.heightUnit)) {
    throw new Error('Height Unitが不正です。')
  }

  if (!isWeightUnit(response.weightUnit)) {
    throw new Error('Weight Unitが不正です。')
  }

  return {
    id: response.id,
    name: response.name,
    isV: response.isV,
    vType: response.vType,
    nameRuby: response.nameRuby,
    youtubeChannelId: response.youtubeChannelId,
    twitterId: response.twitterId,
    gender: response.gender,
    profile: response.profile,
    birthday: birthday,
    age: response.age,
    themeHue: response.themeHue || DEFAULT_THEME_HUE,
    height: response.height,
    heightUnit: response.heightUnit,
    weight: response.weight,
    weightUnit: response.weightUnit,
    themeColors: getColors(response.themeHue || DEFAULT_THEME_HUE, false),
  }
}

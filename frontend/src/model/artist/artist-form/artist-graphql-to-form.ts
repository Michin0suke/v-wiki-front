import { ArtistUpdateForm } from '~/model/artist/artist-form/artist-update-form'
import { getColors } from '~/utils/theme_colors'
import { isHeightUnit } from '../shared/height-unit'
import { isWeightUnit } from '../shared/weight-unit'
import { QueryArtistForUpdate_artist } from './graphql/__generated__/QueryArtistForUpdate'

// export const validateArtistForm = (
//   artistForm: ArtistForm
// ): string | null => {
//   if (!validate.artist.vType(artistForm.vType)) return 'vTypeに問題があります。'
//   if (!validate.artist.name(artistForm.name)) return '名前に問題があります。'
//   if (!validate.artist.nameRuby(artistForm.nameRuby))
//     return '名前(ふりがな)に問題があります。'
//   if (!validate.twitterId(artistForm.twitterId))
//     return 'TwitterIDに問題があります。'
//   if (!validate.youtubeId(artistForm.youtubeId))
//     return 'YouTubeIDに問題があります。'
//   if (!validate.unsignedInt(artistForm.height)) return '身長に問題があります。'
//   if (!validate.unsignedInt(artistForm.weight)) return '体重に問題があります。'
//   if (!validate.artist.gender(artistForm.gender))
//     return '性別に問題があります。'
//   if (!validate.unsignedInt(artistForm.age)) return '年齢に問題があります。'
//   if (
//     !validate.artist.birthday([
//       artistForm.birthday.year,
//       artistForm.birthday.month,
//       artistForm.birthdaydate,
//     ])
//   ) {
//     return '誕生日に問題があります。'
//   }
//   // if (!validate.hue(artistForm.themeHue)) return false
//   return null
// }

export const artistGraphqlToForm = (
  artist: QueryArtistForUpdate_artist
): ArtistUpdateForm => {
  if (!isHeightUnit(artist.heightUnit)) {
    throw new Error('heightUnitはHeightUnit型である必要があります。')
  }

  if (!isWeightUnit(artist.weightUnit)) {
    throw new Error('weightUnitはWeightUnit型である必要があります。')
  }

  return {
    id: artist.id,
    isV: artist.isV,
    vType: artist.vType,
    name: artist.name ?? '',
    nameRuby: artist.nameRuby ?? '',
    twitterId: artist.twitterId ?? '',
    youtubeChannelId: artist.youtubeChannelId ?? '',
    youtubeChannelUrl: '',
    height: artist.height ? artist.height.toString() : '',
    heightUnit: artist.heightUnit,
    weight: artist.weight ? artist.weight.toString() : '',
    weightUnit: artist.weightUnit,
    gender: artist.gender ?? '',
    age: artist.age ? artist.age.toString() : '',
    themeHue: artist.themeHue ?? 270,
    birthday: {
      year: artist.birthday ? artist.birthday.split('/')[0] : '',
      month: artist.birthday ? artist.birthday.split('/')[1] : '',
      date: artist.birthday ? artist.birthday.split('/')[2] : '',
    },
    relatedArtists: [],
    tags: [],
    tagsForm: {
      role: '',
      name: '',
      suggest: [],
      twitterId: '',
    },
    HashTags: [],
    colors: getColors(artist.themeHue ?? 250, false),
  }
}

import { Artist } from '~/model/artist/artist'
import { UpdateArtistVariables } from '../../graphql/__generated__/UpdateArtist'

export const artistToUpdateArtistVariables = (
  artist: Artist
): UpdateArtistVariables => {
  if (artist.id === null) {
    throw new Error(
      '[システムエラー] UpdateArtistにはIDが必須。バグなのでDMください！'
    )
  }

  return {
    id: artist.id,
    name: artist.name !== '' ? artist.name : null,
    isV: artist.isV,
    vType: artist.vType !== '' ? artist.vType : null,
    nameRuby: artist.nameRuby !== '' ? artist.nameRuby : null,
    youtubeChannelId:
      artist.youtubeChannelId !== '' ? artist.youtubeChannelId : null,
    twitterId: artist.twitterId !== '' ? artist.twitterId : null,
    gender: artist.gender !== '' ? artist.gender : null,
    birthday: artist.birthday
      ? artist.birthday?.getFullYear() +
        '/' +
        (artist.birthday.getMonth() + 1) +
        '/' +
        artist.birthday.getDate()
      : null,
    age: artist.age,
    themeHue: artist.themeHue,
    height: artist.height,
    heightUnit: artist.heightUnit,
    weight: artist.weight,
    weightUnit: artist.weightUnit,
  }
}

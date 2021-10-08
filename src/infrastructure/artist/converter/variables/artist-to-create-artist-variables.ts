import { Artist } from '~/model/artist/artist'
import { CreateArtistVariables } from '../../graphql/__generated__/CreateArtist'

export const artistToCreateArtistVariables = (
  artist: Artist
): CreateArtistVariables | null => {
  return {
    name: artist.name,
    isV: artist.isV,
    vType: artist.vType,
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

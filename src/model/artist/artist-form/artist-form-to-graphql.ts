import { ArtistUpdateForm } from './artist-update-form'
import { UpdateArtistVariables } from './graphql/__generated__/UpdateArtist'

export const artistFormToGraphql = (
  artistUpdateForm: ArtistUpdateForm
): UpdateArtistVariables => {
  if (!artistUpdateForm.id) {
    throw new Error('artistUpdateForm.idがnullです。')
  }

  const age = parseInt(artistUpdateForm.age, 10)
  if (!age) {
    throw new Error('ageは整数である必要があります。')
  }

  const height = parseInt(artistUpdateForm.height, 10)
  if (!height) {
    throw new Error('heightは整数である必要があります。')
  }

  const weight = parseInt(artistUpdateForm.weight, 10)
  if (!weight) {
    throw new Error('weightは整数である必要があります。')
  }

  return {
    id: artistUpdateForm.id,
    name: artistUpdateForm.name !== '' ? artistUpdateForm.name : null,
    isV: artistUpdateForm.isV,
    vType: artistUpdateForm.vType !== '' ? artistUpdateForm.vType : null,
    nameRuby:
      artistUpdateForm.nameRuby !== '' ? artistUpdateForm.nameRuby : null,
    youtubeChannelId:
      artistUpdateForm.youtubeChannelId !== ''
        ? artistUpdateForm.youtubeChannelId
        : null,
    twitterId:
      artistUpdateForm.twitterId !== '' ? artistUpdateForm.twitterId : null,
    gender: artistUpdateForm.gender !== '' ? artistUpdateForm.gender : null,
    birthday: `${artistUpdateForm.birthday.year}/${artistUpdateForm.birthday.month}/${artistUpdateForm.birthday.date}`,
    age,
    themeHue: artistUpdateForm.themeHue,
    height,
    heightUnit: artistUpdateForm.heightUnit,
    weight,
    weightUnit: artistUpdateForm.weightUnit,
    annualIncome: null,
  }
}

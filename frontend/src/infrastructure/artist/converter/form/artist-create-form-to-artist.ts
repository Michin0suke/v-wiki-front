import { parse } from 'date-fns'
import { zenkakuToHankaku } from '~/infrastructure/shared/zenkaku-to-hankaku'
import { Artist } from '~/model/artist'
import { ArtistCreateForm } from '~/model/artist/artist-create-form'
import { getColors } from '~/utils/theme_colors'

const DEFAULT_THEME_HUE = 250

export const artistCreateFormToArtist = (
  artistForm: ArtistCreateForm,
  sendError: (message: string) => void
): Artist | null => {
  const age = parseInt(artistForm.age, 10)
  if (!age) {
    sendError('ageは整数である必要があります。')
    return null
  }

  const height = parseInt(artistForm.height, 10)
  if (!height) {
    sendError('heightは整数である必要があります。')
    return null
  }

  const weight = parseInt(artistForm.weight, 10)
  if (!weight) {
    sendError('weightは整数である必要があります。')
    return null
  }

  const bd = {
    year: zenkakuToHankaku(artistForm.birthday.year),
    month: zenkakuToHankaku(artistForm.birthday.month),
    date: zenkakuToHankaku(artistForm.birthday.date),
  }
  let birthday: Date | null = null
  if (bd.year !== '' || bd.month !== '' || bd.date !== '') {
    bd.year = bd.year === '' ? '8888' : bd.year
    const birthday = parse(
      `${bd.year}-${bd.month}-${bd.date}`,
      'y-M-d',
      new Date()
    )
    if (birthday.toString() === 'Invalid Date') {
      sendError('誕生日の形式に問題があります。')
      return null
    }
  }

  return {
    id: null,
    name: artistForm.name,
    isV: artistForm.isV,
    vType: artistForm.vType,
    nameRuby: artistForm.nameRuby,
    youtubeChannelId: artistForm.youtubeChannelId,
    twitterId: artistForm.twitterId,
    gender: artistForm.gender,
    profile: '',
    birthday: birthday,
    age,
    themeHue: artistForm.themeHue,
    height,
    heightUnit: artistForm.heightUnit,
    weight,
    weightUnit: artistForm.weightUnit,
    themeColors: getColors(artistForm.themeHue || DEFAULT_THEME_HUE, false),
  }
}

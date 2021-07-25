import { ArtistUpdateForm } from './artist-update-form'

export const ArtistUpdateFormDefault: ArtistUpdateForm = {
  id: null,
  isV: true,
  vType: '',
  name: '',
  nameRuby: '',
  twitterId: '',
  youtubeChannelId: '',
  youtubeChannelUrl: '',
  height: '',
  heightUnit: 'cm',
  weight: '',
  weightUnit: 'kg',
  gender: '',
  age: '',
  themeHue: 250,
  birthday: {
    year: '',
    month: '',
    date: '',
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
}

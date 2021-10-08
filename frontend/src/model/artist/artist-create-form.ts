import { Artist } from './artist'
import { HashTags } from './shared/hash-tags'
import { HeightUnit } from './shared/height-unit'
import { WeightUnit } from './shared/weight-unit'

export type ArtistCreateForm = {
  id: string | null
  isV: boolean
  vType: string
  name: string
  nameRuby: string
  twitterId: string
  youtubeChannelId: string
  youtubeChannelUrl: string
  height: string
  heightUnit: HeightUnit
  weight: string
  weightUnit: WeightUnit
  gender: string
  age: string
  themeHue: number
  birthday: {
    year: string
    month: string
    date: string
  }
  relatedArtists: Artist[]
  tags: string[]
  tagsForm: {
    role: string
    name: string
    twitterId: string
    suggest: Artist[]
  }
  HashTags: HashTags[]
  themeColors: {
    theme: string
    themeAA: string
    themeAAA: string
    themeOppositeAAA: string
    themeLight: string
  }
}

export const artistCreateFormDefault: ArtistCreateForm = {
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
  themeColors: {
    theme: '#f0e5fa',
    themeAA: '#c49bed',
    themeAAA: '#755298',
    themeOppositeAAA: '#526a39',
    themeLight: '#faf7fc',
  },
}

import { HeightUnit, WeightUnit } from '~/model/artist/shared/units'
import { Colors } from '~/types/colors'
import { ArtistCardType } from '../shared/artist-card'
import { HashTags } from '../shared/hash-tags'

export type ArtistUpdateForm = {
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
  relatedArtists: ArtistCardType[]
  tags: string[]
  tagsForm: {
    role: string
    name: string
    twitterId: string
    suggest: ArtistCardType[]
  }
  HashTags: HashTags[]
  colors: Colors
}

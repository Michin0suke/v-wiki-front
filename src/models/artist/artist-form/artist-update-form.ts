import { HeightUnit, WeightUnit } from '~/models/artist/util/units'
import { ArtistCard } from '../util/artist-card'
import { HashTags } from '../util/hash-tags'

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
  relatedArtists: ArtistCard[]
  tags: string[]
  tagsForm: {
    role: string
    name: string
    twitterId: string
    suggest: ArtistCard[]
  }
  HashTags: HashTags[]
}

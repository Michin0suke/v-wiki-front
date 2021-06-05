import { HeightUnit, WeightUnit } from './units'

type HashTag = {
  name: string
  description: string
}

export type ArtistForm = {
  isV: boolean
  vType: string
  name: string
  nameRuby: string
  twitterId: string
  youtubeId: string
  youtubeChannelUrl: string
  height: string
  heightUnit: HeightUnit
  weight: string
  weightUnit: WeightUnit
  gender: string
  age: string
  birthday: {
    year: string
    month: string
    day: string
  }
  belongs: ArtistCard[]
  tags: string[]
  tagsForm: {
    role: string
    name: string
    twitterId: string
    suggest: ArtistCard[]
  }
  hashTags: HashTag[]
}

export type ArtistCard = {
  id: string
  isV: boolean
  name: string
  nameRuby: string
  vType: string | null
  role: string | null
  belongs: string[] | null
  twitterId: string | null
}

export type Artist = {
  isV: boolean
  vType: string
  name: string
  nameRuby: string
  twitterId: string
  youtubeId: string
  height: number
  heightUnit: HeightUnit
  weight: number
  weightUnit: WeightUnit
  gender: string
  age: number
  birthday: {
    year: number
    month: number
    day: number
  }
}

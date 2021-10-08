import { HeightUnit } from './shared/height-unit'
import { WeightUnit } from './shared/weight-unit'

export type Artist = {
  id: string | null
  name: string
  isV: boolean
  vType: string
  nameRuby: string | null
  youtubeChannelId: string | null
  twitterId: string | null
  gender: string | null
  profile: string | null
  birthday: Date | null
  age: number | null
  themeHue: number | null
  height: number | null
  heightUnit: HeightUnit
  weight: number | null
  weightUnit: WeightUnit
  themeColors: {
    theme: string
    themeAA: string
    themeAAA: string
    themeOppositeAAA: string
    themeLight: string
  }
}

import { ArtistId } from '../value-object/artist-id'
import { HeightUnit } from '../value-object/height-unit'
import { WeightUnit } from '../value-object/weight-unit'

export interface ArtistInit {
  readonly id: string
  readonly name: string
  readonly isV: boolean
  readonly vType: string | null
  readonly nameRuby: string | null
  readonly youtubeChannelId: string | null
  readonly twitterId: string | null
  readonly gender: string | null
  readonly profile: string | null
  readonly birthday: Date | null
  readonly age: number | null
  readonly themeHue: number | null
  readonly height: number | null
  readonly heightUnit: HeightUnit | null
  readonly weight: number | null
  readonly weightUnit: WeightUnit | null
  readonly annualIncome: number | null
}

export interface ArtistProperties {
  readonly id: string
  readonly name: string
  readonly isV: boolean
  readonly vType: string | null
  readonly nameRuby: string | null
  readonly youtubeChannelId: string | null
  readonly twitterId: string | null
  readonly gender: string | null
  readonly profile: string | null
  readonly birthday: Date | null
  readonly age: number | null
  readonly themeHue: number | null
  readonly height: number | null
  readonly heightUnit: HeightUnit | null
  readonly weight: number | null
  readonly weightUnit: WeightUnit | null
  readonly annualIncome: number | null
}

export class Artist {
  private id: string | null
  private isV: boolean
  private vType: string
  private name: string
  private nameRuby: string
  private twitterId: string
  private youtubeChannelId: string
  private youtubeChannelUrl: string
  private height: string
  private heightUnit: HeightUnit
  private weight: string
  private weightUnit: WeightUnit
  private gender: string
  private age: string
  private themeHue: number
  private birthday: {
    year: string
    month: string
    date: string
  }
  private relatedArtists: ArtistCardType[]
  private tags: string[]
  private tagsForm: {
    role: string
    name: string
    twitterId: string
    suggest: ArtistCardType[]
  }
  private HashTags: HashTags[]
  private colors: Colors

  constructor(properties: ArtistInit) {
    this.id = new ArtistId(properties.id)

    if (properties.name === '')
      throw new Error('名前に空文字を指定することはできません。')
    if (properties.name.length > 30)
      throw new Error('名前の長さは1文字以上30以下である必要があります。')
    this.name = properties.name

    this.isV = properties.isV

    if (properties.vType) {
      if (properties.vType.length > 30)
        throw new Error('vTypeの文字列は30以下である必要があります。')
      this.vType = properties.vType
    }

    if (properties.nameRuby) {
      if (properties.nameRuby.length > 30)
        throw new Error(
          '名前（ふりがな）の長さは1文字以上30以下である必要があります。'
        )
      this.nameRuby = properties.nameRuby
    }

    if (properties.youtubeChannelId) {
      if (
        properties.youtubeChannelId !== '' &&
        properties.youtubeChannelId.length > 100
      )
        throw new Error(
          'YouTubeチャンネルIDの文字列は100以下である必要があります。'
        )
      this.youtubeChannelId = properties.youtubeChannelId
    }

    if (properties.twitterId) {
      if (
        properties.twitterId !== '' &&
        properties.twitterId.match(/^\w{1,15}$/) === null
      )
        throw new Error('「TwitterID」の形式に問題があります。')
      this.twitterId = properties.twitterId
    }

    if (properties.gender) this.gender = properties.gender
    if (properties.profile) this.profile = properties.profile
    if (properties.birthday) this.birthday = properties.birthday
    if (properties.age) this.age = properties.age

    if (properties.themeHue) {
      if (
        properties.themeHue !== null &&
        (properties.themeHue < 0 || 360 < properties.themeHue)
      ) {
        throw new Error('themeHueは0以上360以下の数値である必要があります。')
      }
      this.themeHue = properties.themeHue
    }

    if (properties.height) this.height = properties.height
    this.heightUnit = properties.heightUnit ?? 'cm'
    if (properties.weight) this.weight = properties.weight
    this.weightUnit = properties.weightUnit ?? 'kg'
    if (properties.annualIncome) this.annualIncome = properties.annualIncome
  }

  properties(): ArtistProperties {
    return {
      id: this.id.toString(),
      name: this.name,
      isV: this.isV,
      vType: this.vType,
      nameRuby: this.nameRuby,
      youtubeChannelId: this.youtubeChannelId,
      twitterId: this.twitterId,
      gender: this.gender,
      profile: this.profile,
      birthday: this.birthday,
      age: this.age,
      themeHue: this.themeHue,
      height: this.height,
      heightUnit: this.heightUnit,
      weight: this.weight,
      weightUnit: this.weightUnit,
      annualIncome: this.annualIncome,
    }
  }
}

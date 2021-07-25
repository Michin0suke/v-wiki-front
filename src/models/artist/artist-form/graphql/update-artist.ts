import { gql } from '@apollo/client'

export const UpdateArtistGql = gql`
  mutation UpdateArtist(
    $id: ID!
    $name: String
    $isV: Boolean
    $vType: String
    $nameRuby: String
    $youtubeChannelId: String
    $twitterId: String
    $gender: String
    $profile: String
    $birthday: DateWithoutTime
    $age: Int
    $themeHue: Int
    $height: Int
    $heightUnit: String
    $weight: Int
    $weightUnit: String
    $annualIncome: Int
  ) {
    update(
      updateArtistData: {
        id: $id
        name: $name
        isV: $isV
        vType: $vType
        nameRuby: $nameRuby
        youtubeChannelId: $youtubeChannelId
        twitterId: $twitterId
        gender: $gender
        profile: $profile
        birthday: $birthday
        age: $age
        themeHue: $themeHue
        height: $height
        heightUnit: $heightUnit
        weight: $weight
        weightUnit: $weightUnit
        annualIncome: $annualIncome
      }
    ) {
      id
      name
      isV
      vType
      nameRuby
      youtubeChannelId
      twitterId
      gender
      profile
      birthday
      age
      themeHue
      height
      heightUnit
      weight
      weightUnit
      annualIncome
    }
  }
`

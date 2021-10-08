import { gql } from '@apollo/client'

export const CREATE_ARTIST = gql`
  mutation CreateArtist(
    $name: String
    $isV: Boolean
    $vType: String
    $nameRuby: String
    $youtubeChannelId: String
    $twitterId: String
    $gender: String
    $profile: String
    $birthday: String
    $age: Int
    $themeHue: Int
    $height: Int
    $heightUnit: String
    $weight: Int
    $weightUnit: String
  ) {
    createArtist(
      data: {
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
      relatedArtists {
        relatedArtist {
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
          height
          heightUnit
          weight
          weightUnit
        }
        artistRelationType {
          positiveDirectionName
          negativeDirectionName
        }
        isPositiveDirection
      }
    }
  }
`

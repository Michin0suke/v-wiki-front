import { gql } from '@apollo/client'

export const QueryArtistsGql = gql`
  query QueryArtists {
    artists {
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
          annualIncome
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

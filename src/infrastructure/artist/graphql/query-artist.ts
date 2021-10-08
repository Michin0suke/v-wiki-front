import { gql } from '@apollo/client'

export const QUERY_ARTIST = gql`
  query QueryArtist($id: String!) {
    findArtistById(id: $id) {
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

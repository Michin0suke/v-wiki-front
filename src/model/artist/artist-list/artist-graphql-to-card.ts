import { getColors } from '~/utils/theme_colors'
import { ArtistCardType } from '../shared/artist-card'
import { QueryArtists_artists } from './graphql/__generated__/QueryArtists'

export const artistGraphqlToCard = (
  artist: QueryArtists_artists
): ArtistCardType => {
  return {
    id: artist.id,
    isV: artist.isV,
    name: artist.name,
    nameRuby: artist.nameRuby,
    vType: artist.vType,
    role: null,
    twitterId: artist.twitterId,
    color: getColors(artist.themeHue ?? 250, false),
  }
}

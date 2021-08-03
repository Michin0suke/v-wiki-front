import { Artist } from '~/domain/artist/entity/artist'
import { heightUnits } from '~/domain/artist/value-object/height-unit'
import { client } from '~/infrastructure/shared/client'
import { QUERY_ARTIST } from '../graphql/query-artist'
import { QueryArtist } from '../graphql/__generated__/QueryArtist'

export const artistRepository = () => {
  const findById = async (id: string): Artist | null => {
    const {
      data: { artist },
    } = await client.query<QueryArtist>({
      query: QUERY_ARTIST,
      variables: { id },
    })
    if (!artist) return null
    return artistData.data.artist && new Artist()
  }

  return {
    findById,
  }
}

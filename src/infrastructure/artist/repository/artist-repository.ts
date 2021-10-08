import { client } from '~/infrastructure/shared/client'
import { QUERY_ARTIST } from '../graphql/query-artist'
import {
  QueryArtist,
  QueryArtistVariables,
} from '../graphql/__generated__/QueryArtist'
import { UpdateArtist } from '../graphql/__generated__/UpdateArtist'
import { UPDATE_ARTIST } from '../graphql/update-artist'
import { UpdateArtistVariables } from '../graphql/__generated__/UpdateArtist'
import { artistResponseToArtist } from '../converter/response/artist-response-to-artist'
import {
  CreateArtist,
  CreateArtistVariables,
} from '../graphql/__generated__/CreateArtist'
import { CREATE_ARTIST } from '../graphql/create-artist'
import { Artist } from '~/model/artist/artist'

type MutationResult =
  | {
      error: null
      artist: Artist
    }
  | {
      error: string
      artist: null
    }

export const artistRepository = (): {
  findById: (id: string) => Promise<Artist | null>
  update: (variables: UpdateArtistVariables) => Promise<MutationResult>
  create: (variables: CreateArtistVariables) => Promise<MutationResult>
} => {
  const findById = async (id: string): Promise<Artist | null> => {
    const {
      data: { findArtistById },
    } = await client.query<QueryArtist, QueryArtistVariables>({
      query: QUERY_ARTIST,
      variables: { id },
    })

    return findArtistById ? artistResponseToArtist(findArtistById) : null
  }

  const update = async (
    variables: UpdateArtistVariables
  ): Promise<MutationResult> => {
    const { errors, data } = await client.mutate<
      UpdateArtist,
      UpdateArtistVariables
    >({
      mutation: UPDATE_ARTIST,
      variables,
    })
    if (errors) {
      return {
        error: errors.join(', '),
        artist: null,
      }
    }
    if (!data) {
      throw new Error('レスポンスを取得できませんでした。')
    }
    return {
      error: null,
      artist: artistResponseToArtist(data.updateArtist),
    }
  }

  const create = async (
    variables: CreateArtistVariables
  ): Promise<MutationResult> => {
    console.log(JSON.stringify(variables, null, 4))
    const { errors, data } = await client.mutate<
      CreateArtist,
      CreateArtistVariables
    >({
      mutation: CREATE_ARTIST,
      variables,
    })
    if (errors) {
      return {
        error: errors.join(', '),
        artist: null,
      }
    }
    if (!data) {
      throw new Error('レスポンスを取得できませんでした。')
    }
    return {
      error: null,
      artist: artistResponseToArtist(data.createArtist),
    }
  }

  return {
    findById,
    update,
    create,
  }
}

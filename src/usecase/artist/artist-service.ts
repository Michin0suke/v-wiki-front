import { Artist } from '~/domain/artist/entity/artist'
import { artistRepository } from '~/infrastructure/artist/repository/artist-repository'

export const artistService = (): {
  findById: (id: string) => Promise<Artist | null>
} => {
  const findById = async (id: string): Promise<Artist | null> => {
    return artistRepository().findById(id)
  }
  return { findById }
}

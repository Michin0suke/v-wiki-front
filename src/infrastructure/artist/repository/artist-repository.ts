import { Artist, ArtistProperties } from '~/domain/artist/entity/artist'
import { isHeightUnit } from '~/domain/artist/value-object/height-unit'
import { client } from '~/infrastructure/shared/client'
import { QUERY_ARTIST } from '../graphql/query-artist'
import { QueryArtist } from '../graphql/__generated__/QueryArtist'
import { parse } from 'date-fns'
import { isWeightUnit } from '~/model/artist/shared/weight-unit'

export const artistRepository = (): {
  findById: (id: string) => Promise<Artist | null>
} => {
  const findById = async (id: string): Promise<Artist | null> => {
    const {
      data: { artist: fetchedArtist },
    } = await client.query<QueryArtist>({
      query: QUERY_ARTIST,
      variables: { id },
    })
    if (!fetchedArtist) return null

    let birthday: Date | null = null
    if (fetchedArtist.birthday) {
      if (fetchedArtist.birthday.match(/\d{1,2}\/\d{1,2}/)) {
        birthday = parse(fetchedArtist.birthday, 'M/d', new Date())
      } else {
        birthday = parse(fetchedArtist.birthday, 'Y/M/d', new Date())
      }
    }

    const artistProperties: ArtistProperties = {
      id: fetchedArtist.id,
      name: fetchedArtist.name,
      isV: fetchedArtist.isV,
      vType: fetchedArtist.vType,
      nameRuby: fetchedArtist.nameRuby,
      youtubeChannelId: fetchedArtist.youtubeChannelId,
      twitterId: fetchedArtist.twitterId,
      gender: fetchedArtist.gender,
      profile: fetchedArtist.profile,
      birthday: birthday,
      age: fetchedArtist.age,
      themeHue: fetchedArtist.themeHue,
      height: fetchedArtist.height,
      heightUnit: isHeightUnit(fetchedArtist.heightUnit)
        ? fetchedArtist.heightUnit
        : null,
      weight: fetchedArtist.weight,
      weightUnit: isWeightUnit(fetchedArtist.weightUnit)
        ? fetchedArtist.weightUnit
        : null,
      annualIncome: fetchedArtist.annualIncome,
    }
    return new Artist(artistProperties)
  }

  return {
    findById,
  }
}

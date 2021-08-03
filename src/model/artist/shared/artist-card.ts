import { Colors } from '~/types/colors'

export type ArtistCardType = {
  id: string
  isV: boolean
  name: string
  nameRuby: string | null
  vType: string | null
  role: string | null
  twitterId: string | null
  color: Colors
}

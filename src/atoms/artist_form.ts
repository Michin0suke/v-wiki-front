import { atom, AtomOptions, RecoilState } from 'recoil'
import { ArtistForm } from '~/models/artist/components/artist'

const atomOptions: AtomOptions<ArtistForm> = {
  key: 'artist_form',
  default: {
    id: null,
    isV: true,
    vType: 'Vtuber',
    name: '',
    nameRuby: '',
    twitterId: '',
    youtubeId: '',
    youtubeChannelUrl: '',
    height: '',
    heightUnit: 'cm',
    weight: '',
    weightUnit: 'kg',
    gender: '',
    age: '',
    themeHue: 270,
    birthday: {
      year: '',
      month: '',
      day: '',
    },
    relatedArtists: [],
    tags: [],
    tagsForm: {
      role: '',
      name: '',
      suggest: [],
      twitterId: '',
    },
    HashTagss: [],
  },
}

export const artistFormState: RecoilState<ArtistForm> = atom(atomOptions)

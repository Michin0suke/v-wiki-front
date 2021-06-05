import { atom, AtomOptions, RecoilState } from 'recoil'
import { ArtistForm } from '~/types/artist'

const atomOptions: AtomOptions<ArtistForm> = {
  key: 'artist_form',
  default: {
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
    birthday: {
      year: '',
      month: '',
      day: '',
    },
    belongsName: [''],
  },
}

export const artistFormState: RecoilState<ArtistForm> = atom(atomOptions)

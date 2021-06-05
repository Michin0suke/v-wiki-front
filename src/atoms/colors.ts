import { atom, AtomOptions, RecoilState } from 'recoil'
import { Colors } from '~/types/colors'

const atomOptions: AtomOptions<Colors> = {
  key: 'colors',
  default: {
    isA11yMode: false,
    themes: {
      base: '#fff',
      themeHue: 270,
      theme: '#000',
      themeAA: '#000',
      themeAAA: '#000',
      themeOppositeAAA: '#000',
      themeLight: '#fff',
    },
  },
}

export const colorsState: RecoilState<Colors> = atom(atomOptions)

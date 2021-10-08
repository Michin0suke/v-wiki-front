import { atom, AtomOptions, RecoilState } from 'recoil'
import { UserSetting } from '~/types/user-setting'

const atomOptions: AtomOptions<UserSetting> = {
  key: 'userSetting',
  default: {
    isA11yMode: false,
  },
}

export const userSettingState: RecoilState<UserSetting> = atom(atomOptions)

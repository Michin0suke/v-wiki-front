import { createContext } from 'react'

export const ThemeColorContext = createContext({
  themeColors: {
    base: '#111',
    theme: '#f77',
    themeAA: '#f55',
    themeAAA: '#f33',
    themeOppositeAAA: '#f33',
    themeLight: '#f55',
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // changeThemeColor: (key: string, color: string) => {},
})

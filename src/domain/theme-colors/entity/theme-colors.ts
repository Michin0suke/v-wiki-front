import { Color } from '~/domain/color/entity/color'
import { getColors } from '~/utils/theme_colors'

type Properties = {
  base: string
  theme: string
  themeAA: string
  themeAAA: string
  themeOppositeAAA: string
  themeLight: string
}

export class ThemeColors {
  private readonly base: Color
  private readonly theme: Color
  private readonly themeAA: Color
  private readonly themeAAA: Color
  private readonly themeOppositeAAA: Color
  private readonly themeLight: Color

  constructor(hue: number) {
    const colors = getColors(hue, false)
    this.base = new Color(colors.base)
    this.theme = new Color(colors.theme)
    this.themeAA = new Color(colors.themeAA)
    this.themeAAA = new Color(colors.themeAAA)
    this.themeOppositeAAA = new Color(colors.themeOppositeAAA)
    this.themeLight = new Color(colors.themeLight)
  }

  public properties(): Properties {
    return {
      base: this.base.toString(),
      theme: this.theme.toString(),
      themeAA: this.themeAA.toString(),
      themeAAA: this.themeAAA.toString(),
      themeOppositeAAA: this.themeOppositeAAA.toString(),
      themeLight: this.themeLight.toString(),
    }
  }
}

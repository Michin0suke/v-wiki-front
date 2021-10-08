import chroma from 'chroma-js'
import { Colors } from '~/types/colors'

// 背景色、色相、彩度、満たしたいコントラスト比を渡すと、それを満たす色(16進数)を返す
const getChromaFromHue = (
  baseColor: string,
  hue: number,
  saturation: number,
  minContrast: number
): chroma.Color => {
  const BC = chroma(baseColor)
  let left = 0
  let right = 1
  let count = 0

  while (right - left > 0.01) {
    const middle = Math.floor(((left + right) / 2) * 100) / 100
    const color = chroma(hue, saturation, middle, 'hsl')
    if (chroma.contrast(BC, color) > minContrast) {
      left = middle
    } else {
      right = middle
    }
    if (count > 5) break
    count += 1
  }

  return chroma(hue, saturation, left, 'hsl')
}

export const getColors = (hue: number, isA11yMode: boolean): Colors => {
  if (isA11yMode) {
    return {
      base: '#fff',
      theme: getChromaFromHue('#fff', hue, 0.7, 1.7).hex(),
      themeAA: getChromaFromHue('#fff', hue, 0.5, 4.5).hex(),
      themeAAA: getChromaFromHue('#fff', hue, 0.4, 7).hex(),
      themeOppositeAAA: getChromaFromHue(
        '#fff',
        (hue + 180) % 360,
        0.4,
        7
      ).hex(),
      themeLight: getChromaFromHue('#fff', hue, 0.5, 1.05).hex(),
    }
  }
  return {
    base: '#fff',
    theme: getChromaFromHue('#fff', hue, 0.7, 1.2).hex(),
    themeAA: getChromaFromHue('#fff', hue, 0.7, 2.2).hex(),
    themeAAA: getChromaFromHue('#fff', hue, 0.3, 6).hex(),
    themeOppositeAAA: getChromaFromHue('#fff', (hue + 180) % 360, 0.3, 6).hex(),
    themeLight: getChromaFromHue('#fff', hue, 0.5, 1.05).hex(),
  }
}

export type HeightUnit =
  | 'Ym'
  | 'Zm'
  | 'Em'
  | 'Pm'
  | 'Tm'
  | 'Gm'
  | 'Mm'
  | 'km'
  | 'hm'
  | 'dam'
  | 'dm'
  | 'cm'
  | 'mm'
  | 'µm'
  | 'nm'
  | 'pm'
  | 'fm'
  | 'am'
  | 'zm'
  | 'ym'

export const heightUnits: HeightUnit[] = [
  'Ym',
  'Zm',
  'Em',
  'Pm',
  'Tm',
  'Gm',
  'Mm',
  'km',
  'hm',
  'dam',
  'dm',
  'cm',
  'mm',
  'µm',
  'nm',
  'pm',
  'fm',
  'am',
  'zm',
  'ym',
]

export const isHeightUnit = (str: string): str is HeightUnit => {
  return heightUnits.includes(<HeightUnit>str)
}

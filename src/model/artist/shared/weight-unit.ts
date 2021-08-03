export type WeightUnit =
  | 't'
  | 'kg'
  | 'g'
  | 'mg'
  | 'µg'
  | 'ng'
  | 'pg'
  | 'fg'
  | 'ag'
  | 'zg'
  | 'yg'

export const weightUnits = [
  't',
  'kg',
  'g',
  'mg',
  'µg',
  'ng',
  'pg',
  'fg',
  'ag',
  'zg',
  'yg',
]

export const isWeightUnit = (str: string): str is WeightUnit => {
  return weightUnits.includes(<WeightUnit>str)
}

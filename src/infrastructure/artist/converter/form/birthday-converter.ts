// Shared between front-end and back-end

import { parse } from 'date-fns'

export const birthdayStringToDate = (bd: string): Date => {
  if (bd.match(/^\d{1,4}\/\d{1,2}\/\d{1,2}$/)) {
    const parsedBd = parse(bd, 'y/M/d', new Date())
    if (parsedBd.toString() === 'Invalid Date') {
      throw new Error('誕生日の形式に問題があります。')
    }
    return parsedBd
  }

  if (bd.match(/^\d{1,2}\/\d{1,2}$/)) {
    const parsedBd = parse(`8888/${bd}`, 'y/M/d', new Date())
    if (parsedBd.toString() === 'Invalid Date') {
      throw new Error('誕生日の形式に問題があります。')
    }
    return parsedBd
  } else {
    throw new Error(
      '誕生日の形式に問題があります。指定できる形式は、Y/M/dかM/dのいずれかです。'
    )
  }
}

export const birthdayDateToString = (
  bd: Date | undefined
): string | undefined => {
  if (bd === undefined) return undefined

  return bd.getFullYear() === 8888
    ? `${bd.getMonth() + 1}/${bd.getDate()}`
    : `${bd.getFullYear()}/${bd.getMonth() + 1}/${bd.getDate()}`
}

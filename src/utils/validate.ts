import { parse } from 'date-fns'

const hankaku2Zenkaku = (str: string): string => {
  return str
    .toString()
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    )
}

export const validate = {
  unsignedInt: (text: string): string | null => {
    if (text === '') return null

    const convertedText = hankaku2Zenkaku(text)
    const int: number = parseInt(convertedText, 10)

    if (isNaN(int)) return 'この項目は数値である必要があります。'
    if (int < 0) return 'この項目をマイナスにすることはできません。'
    if (int >= 1000000000)
      return 'この項目を1000000000以上にすることはできません。'
    return null
  },

  text:
    (length: number) =>
    (text: string): string | null =>
      text.length > length
        ? `文字数は${length}以下である必要があります。`
        : null,

  twitterId: (text: string): string | null => {
    if (text !== '' && text.match(/^\w{1,15}$/) === null)
      return '「TwitterID」の形式に問題があります。'
    else return null
  },

  youtubeId: (text: string): string | null => {
    if (text === '') return null

    const url: string = encodeURI(text)
    const pattern_normal: RegExp = /youtube.com\/channel\/([\w-]+)/
    const pattern_old: RegExp = /youtube.com\/user\/([\w-%]+)/
    const pattern_new: RegExp = /youtube.com\/(c\/)?([\w-%]+)/

    const pattern_match_normal = url.match(pattern_normal)
    const pattern_match_old = url.match(pattern_old)
    const pattern_match_new = url.match(pattern_new)

    if (pattern_match_normal !== null) {
      if (pattern_match_normal[1].length !== 24)
        return '「YouTubeID」の形式に問題があります。'
      else return null
    }

    if (pattern_match_old) {
      return null
    }

    if (pattern_match_new) {
      if (pattern_match_new[2] === 'watch')
        return '「YouTubeID」の形式に問題があります。'
      else return null
    }

    return null
  },

  artist: {
    vType: (text: string): string | null => validate.text(15)(text),
    name: (text: string): string | null => validate.text(30)(text),
    nameRuby: (text: string): string | null => validate.text(50)(text),
    gender: (text: string): string | null => validate.text(30)(text),

    birthday: (values: string[]): string | null => {
      let [year, month, day] = values.map((value) => hankaku2Zenkaku(value))
      if (year === '' && month === '' && day === '') return null
      year = year === '' ? '8888' : year
      const parsedDate = parse(`${year}-${month}-${day}`, 'y-M-d', new Date())
      return parsedDate.toString() === 'Invalid Date' ? '問題があります' : null
    },
  },
}

export const zenkakuToHankaku = (str: string): string => {
  return str
    .toString()
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
      String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    )
}

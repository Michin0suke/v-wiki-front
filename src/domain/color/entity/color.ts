export class Color {
  private color: string
  constructor(str: string) {
    if (!str.match(/#[0-9a-zA-Z]{6}/)) {
      throw new Error(
        `コンストラクタ引数は#AAAAAAの形式である必要があります。(${str})`
      )
    }
    this.color = str
  }
  public toString(): string {
    return this.color
  }
}

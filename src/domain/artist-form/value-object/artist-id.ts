export class ArtistId {
  private readonly id: string

  constructor(id: string) {
    if (!id.match(/^[\w-]{4}$/))
      throw new Error('ArtistIDは長さ４の文字列である必要があります。')
    this.id = id
  }

  public toString(): string {
    return this.id
  }
}

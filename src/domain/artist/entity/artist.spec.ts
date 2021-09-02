import { Artist, ArtistInit } from './artist'

describe('ドメインのartistエンティティのテスト', () => {
  describe('生成', () => {
    const expectedArtistInit: ArtistInit = {
      id: 'ABCD',
      name: 'Alice',
      isV: true,
      vType: 'Vtuber',
      nameRuby: 'あ'.repeat(30),
      youtubeChannelId: 'JgqnEjnUz_I',
      twitterId: 'alice',
      gender: '女',
      profile: '適当なアーティスト\nいろいろいる',
      birthday: new Date('1998-09-10'),
      age: 23,
      themeHue: 100,
      height: 10,
      heightUnit: 'cm',
      weight: 30,
      weightUnit: 'kg',
      annualIncome: 1000000000,
    }

    const wrongArtistInit: {
      [param: string]: {
        [wrongCase: string]: ArtistInit
      }
    } = {
      id: {
        tooShort: {
          ...expectedArtistInit,
          id: '123',
        },
        tooLong: {
          ...expectedArtistInit,
          id: '12345',
        },
      },
      name: {
        empty: {
          ...expectedArtistInit,
          name: '',
        },
        tooLong: {
          ...expectedArtistInit,
          name: 'あ'.repeat(31),
        },
      },
      nameRuby: {
        tooLong: {
          ...expectedArtistInit,
          nameRuby: 'あ'.repeat(31),
        },
      },
      vType: {
        tooLong: {
          ...expectedArtistInit,
          vType: 'あ'.repeat(31),
        },
        empty: {
          ...expectedArtistInit,
          vType: '',
        },
      },
      youtubeChannelId: {
        empty: {
          ...expectedArtistInit,
          youtubeChannelId: '',
        },
        tooLong: {
          ...expectedArtistInit,
          youtubeChannelId: 'あ'.repeat(101),
        },
      },
      twitterId: {
        empty: {
          ...expectedArtistInit,
          twitterId: '',
        },
        tooLong: {
          ...expectedArtistInit,
          twitterId: 'i'.repeat(16),
        },
        invalidFormat: {
          ...expectedArtistInit,
          twitterId: 'あ',
        },
      },
      gender: {
        tooLong: {
          ...expectedArtistInit,
          gender: 'あ'.repeat(30),
        },
      },
    }

    const artist = new Artist(expectedArtistInit)

    it('作成したアーティストのプロパティが取得できる', () => {
      expect(artist.properties()).toEqual(expectedArtistInit)
    })
    describe('id', () => {
      it('短すぎるIDには例外を投げる', () => {
        expect(
          () => new Artist(wrongArtistInit['id']['tooShort'])
        ).toThrowError('ArtistIDは長さ４の文字列である必要があります。')
      })
      it('長すぎるIDには例外を投げる', () => {
        expect(() => new Artist(wrongArtistInit['id']['tooLong'])).toThrowError(
          'ArtistIDは長さ４の文字列である必要があります。'
        )
      })
    })
    describe('名前', () => {
      it('名前に空文字が渡されたら例外を投げる', () => {
        expect(() => new Artist(wrongArtistInit['name']['empty'])).toThrowError(
          '名前に空文字を指定することはできません。'
        )
      })
      it('名前に長すぎる文字列が渡されたら例外を投げる', () => {
        expect(
          () => new Artist(wrongArtistInit['name']['tooLong'])
        ).toThrowError('名前の長さは1文字以上30以下である必要があります。')
      })
    })
    describe('名前(ふりがな)', () => {
      it('30文字以上が渡されたら例外を投げる', () => {
        expect(
          () => new Artist(wrongArtistInit['nameRuby']['tooLong'])
        ).toThrowError(
          '名前（ふりがな）の長さは1文字以上30以下である必要があります。'
        )
      })
    })
    describe('vType', () => {
      it('30文字以上が渡されたら例外を投げる', () => {
        expect(
          () => new Artist(wrongArtistInit['vType']['tooLong'])
        ).toThrowError('vTypeの文字列は30以下である必要があります。')
      })
      it('空文字が渡されたら例外を投げる', () => {
        expect(
          () => new Artist(wrongArtistInit['vType']['empty'])
        ).toThrowError('vTypeに空文字を設定することはできません。')
      })
    })
    describe('YouTubeChannelId', () => {
      it('100文字以上が渡されたら例外を投げる', () => {
        expect(
          () => new Artist(wrongArtistInit['youtubeChannelId']['tooLong'])
        ).toThrowError(
          'YouTubeチャンネルIDの文字列は100以下である必要があります。'
        )
      })
      it('空文字が渡されたらundefinedを設定する', () => {
        const artist = new Artist(wrongArtistInit['youtubeChannelId']['empty'])
        expect(artist.properties().youtubeChannelId).toEqual(undefined)
      })
    })
    describe('twitterId', () => {
      it('長すぎる文字列を渡されると例外を投げる', () => {
        expect(
          () => new Artist(wrongArtistInit['twitterId']['tooLong'])
        ).toThrowError('「TwitterID」の形式に問題があります。')
      })
      it('空文字が渡されたらundefinedに設定する', () => {
        const artist = new Artist(wrongArtistInit['twitterId']['empty'])
        expect(artist.properties().twitterId).toEqual(undefined)
      })
      it('有効でない文字を渡されると例外を投げる', () => {
        expect(
          () => new Artist(wrongArtistInit['twitterId']['invalidFormat'])
        ).toThrowError('「TwitterID」の形式に問題があります。')
      })
    })
  })
})

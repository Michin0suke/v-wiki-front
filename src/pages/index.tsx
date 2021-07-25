import React from 'react'
import { useState } from 'react'
import { ThemeColorContext } from '~/contexts/theme_colors'
import { Wrapper } from '~/components/templates/wrapper'
import { MainContents } from '~/components/templates/main_contents'
import { ArtistCard } from '~/components/molecules/artist_card'
import { getColors } from '~/utils/theme_colors'
import { HeadingH2 } from '~/components/molecules/heading_h2'
import { useQuery } from '@apollo/client'
import {
  QueryArtists,
  QueryArtists_artists,
} from '~/models/artist/artist-list/graphql/__generated__/QueryArtists'
import { Loading } from '~/components/atoms/loading'
import { artistGraphqlToForm } from '~/models/artist/artist-form/artist-graphql-to-form'
import { ArtistUpdateForm } from '~/models/artist/artist-form/artist-update-form'
import { QueryArtistsGql } from '~/models/artist/artist-list/graphql/query-artists'

const Home = () => {
  const [artists, setArtists] = useState<ArtistUpdateForm[]>()
  const { loading } = useQuery<QueryArtists>(QueryArtistsGql, {
    onCompleted: ({ artists }) => {
      const artistForms = artists.map((artist: QueryArtists_artists) =>
        artistGraphqlToForm(artist)
      )
      setArtists(artistForms)
    },
  })
  return (
    <ThemeColorContext.Provider
      value={{
        themeColors: {
          base: '#fff',
          theme: '#f0e5fa',
          themeAA: '#c49bed',
          themeAAA: '#755298',
          themeOppositeAAA: '#526a39',
          themeLight: '#faf7fc',
        },
      }}
    >
      <Wrapper>
        <MainContents>
          <div className="bg-white">
            <HeadingH2 text="アーティスト一覧" className="mt-0" />
            <div className="mt-5">
              {artists?.map((artist, key) => (
                <ArtistCard
                  key={key}
                  className="mt-5"
                  profileImageSrc="https://pbs.twimg.com/profile_images/1373651599357177862/aRgLHpGP_400x400.jpg"
                  artistThemeColors={getColors(artist.themeHue ?? 250, false)}
                  artist={artist}
                  href={`/artist/${artist.id}`}
                />
              ))}
            </div>
          </div>

          {loading && (
            <div className="absolute top-0 left-0 w-full h-32 text-center">
              <Loading className="absolute top-0 w-full h-32 text-center" />
            </div>
          )}
        </MainContents>
      </Wrapper>
    </ThemeColorContext.Provider>
  )
}

export default Home

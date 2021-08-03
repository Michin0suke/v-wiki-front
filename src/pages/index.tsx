import React from 'react'
import { useState } from 'react'
import { Wrapper } from '~/components/templates/wrapper'
import { MainContents } from '~/components/templates/main_contents'
import { ArtistCard } from '~/components/molecules/artist_card'
import { HeadingH2 } from '~/components/molecules/heading_h2'
import { useQuery } from '@apollo/client'
import {
  QueryArtists,
  QueryArtists_artists,
} from '~/model/artist/artist-list/graphql/__generated__/QueryArtists'
import { Loading } from '~/components/atoms/loading'
import { QueryArtistsGql } from '~/model/artist/artist-list/graphql/query-artists'
import { artistGraphqlToCard } from '~/model/artist/artist-list/artist-graphql-to-card'
import { ArtistCardType } from '~/model/artist/shared/artist-card'
import { Colors } from '~/types/colors'

const defaultColors: Colors = {
  base: '#fff',
  theme: '#f0e5fa',
  themeAA: '#c49bed',
  themeAAA: '#755298',
  themeOppositeAAA: '#526a39',
  themeLight: '#faf7fc',
}

const urls = [
  'https://pbs.twimg.com/profile_images/1373651599357177862/aRgLHpGP_400x400.jpg',
  'https://sound-treatment.tokyo/wp-content/uploads/2019/11/ema-300x300.jpg',
  'https://pbs.twimg.com/profile_images/1317062991284588544/kDPQYANH_400x400.jpg',
]

const Home = () => {
  const [artists, setArtists] = useState<ArtistCardType[]>()
  const { loading } = useQuery<QueryArtists>(QueryArtistsGql, {
    onCompleted: ({ artists }) => {
      const artistCards = artists.map((artist: QueryArtists_artists) =>
        artistGraphqlToCard(artist)
      )
      setArtists(artistCards)
    },
  })
  return (
    <Wrapper colors={defaultColors}>
      <MainContents colors={defaultColors}>
        <div className="bg-white">
          <HeadingH2
            colors={defaultColors}
            text="アーティスト一覧"
            className="mt-0"
          />
          <div className="mt-5">
            {artists?.map((artist, key) => (
              <ArtistCard
                key={key}
                className="mt-5"
                artist={artist}
                href={`/artist/${artist.id}`}
                url={urls[key]}
              />
            ))}
          </div>
        </div>

        {loading && (
          <div className="absolute top-0 left-0 w-full h-32 text-center">
            <Loading
              className="absolute top-0 w-full h-32 text-center"
              color={'#755298'}
            />
          </div>
        )}
      </MainContents>
    </Wrapper>
  )
}

export default Home

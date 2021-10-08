import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Loading } from '~/components/atoms/loading'
import { MainContents } from '~/components/templates/main_contents'
import { SubContents } from '~/components/templates/sub_contents'
import { Wrapper } from '~/components/templates/wrapper'
import { artistRepository } from '~/infrastructure/artist/repository/artist-repository'
import { Artist } from '~/model/artist/artist'

export const getServerSideProps = async ({ params }: { params: any }) => {
  return {
    props: { id: params.id },
  }
}

const ArtistPage = ({ id }: { id: string }) => {
  const [artist, setArtist] = useState<Artist | null>(null)
  const router = useRouter()

  const fetchArtist = async () => {
    const fetchedArtist = await artistRepository().findById(id)
    if (fetchedArtist) {
      setArtist(fetchedArtist)
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    fetchArtist()
  }, [])

  if (!artist) {
    return <div></div>
  }

  return (
    <Wrapper colors={artist.themeColors}>
      <SubContents
        colors={artist.themeColors}
        className="my-5 mx-7 hidden lg:block"
      >
        <div></div>
      </SubContents>

      <MainContents colors={artist.themeColors} className="mx-auto pt-3">
        <pre>{JSON.stringify(artist, null, 4)}</pre>
        {artist === null && (
          <Loading
            color={'#abc'}
            className="fixed w-96 m-auto top-0 right-0 bottom-0 left-0"
          />
        )}
      </MainContents>

      <SubContents
        colors={artist.themeColors}
        className="my-5 mx-7 hidden lg:block"
      >
        <div></div>
      </SubContents>
    </Wrapper>
  )
}

export default ArtistPage

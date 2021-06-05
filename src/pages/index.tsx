import React from 'react'
import Link from 'next/link'
import { MainContents } from '~/components/templates/main_contents'
import { Wrapper } from '~/components/templates/wrapper'

const Home = () => {
  return (
    <Wrapper>
      <MainContents>
        <Link href="artist">アーティスト編集</Link>
      </MainContents>
    </Wrapper>
  )
}

export default Home

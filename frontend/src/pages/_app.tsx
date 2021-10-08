import React from 'react'
import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '~/infrastructure/shared/client'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ApolloProvider>
    </React.StrictMode>
  )
}

export default App

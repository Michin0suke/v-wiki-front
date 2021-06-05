import React from 'react'
import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </React.StrictMode>
  )
}

export default App

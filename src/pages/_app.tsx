import '#components/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import {SessionProvider} from 'next-auth/react'
import { client } from '../bootstrap/ApolloClient';

export default function App({ Component, pageProps: {session ,...pageProps} }: AppProps) {

  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  )
}

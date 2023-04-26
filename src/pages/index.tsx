import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from 'next-auth/react'
import SearchBar from '#components/components/Search'
import UsersList from '#components/components/UsersList'
import RepoList from '#components/components/RepoList'

import styles from '#components/styles/Home.module.css'
import React from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const session = useSession()
  const { push } = useRouter()

  React.useEffect(() => {
    if (session.status === "unauthenticated") {
      signIn()
    }

    if (session.data?.user?.name) {
      push(`/?search=${session.data?.user?.name}`, undefined)
    }
  }, [])


  return (
    <>
      <Head>
        <title>User/Repo search App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <div className={styles.container}>

          <SearchBar />

          <section className={styles.section}>
            <h2>Users</h2>
            <div className={styles.grid}>
              <UsersList />
            </div>
          </section>

          <section className={styles.section}>
            <h2>Repositories</h2>
            <div className={styles.grid}>
              <RepoList />
            </div>
          </section>

        </div>
      </main>
    </>
  )
}

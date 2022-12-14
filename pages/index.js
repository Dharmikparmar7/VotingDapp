import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-Voting</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">E-Voting!</a>
        </h1>

        <p className={styles.description}>
          Participate in this 
          <code className={styles.code}>Election</code>from your place of convenience.
        </p>

        <div className={styles.grid}>
          <Link href="voter" className={styles.card}>
            <h2>Voter &rarr;</h2>
            <p>Cast your precious Vote now!</p>
          </Link>

          <Link href="candidate" className={styles.card}>
            <h2>Candidate &rarr;</h2>
            <p>Take a stand for welfare of people!</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.svg" alt="ADITHS Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

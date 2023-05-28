import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import { Title } from '../components/title/title';
import { Rule } from '../components/rule/rule';
import { Checker } from '../components/checker/checker';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>第9回パパママ杯</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title />

        <Rule />

        <Checker />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by {'ふー'}
        </a>
      </footer>
    </div>
  )
}

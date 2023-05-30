import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Title } from '../components/title/title'
import { Rule } from '../components/rule/rule'
import { Checker } from '../components/checker/checker'
import { Result } from '../components/result/result'
import { Grid, Box } from '@mui/material'

export default function Home() {
  const [visible, setVisible] = useState(0)
  const handleUpdateVisible = (num: number) => {
    setVisible(num)
  }
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
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item md={4} xs={12}>
            <Box pt={3}>
              <Checker updateVisible={handleUpdateVisible} />
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box pt={3}>
              <Result visible={visible} />
            </Box>
          </Grid>
        </Grid>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by {'〇〇'}
        </a>
      </footer>
    </div>
  )
}

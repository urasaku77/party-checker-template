import React from 'react'
import Head from 'next/head'
import { Grid, Box } from '@mui/material'
import styles from '../styles/Home.module.css'
import { Title } from '../components/title/title'
import { Rule } from '../components/rule/rule'
import { Step } from '../components/step'
import { Checker } from '../components/checker'
import { Caution } from '../components/caution/caution'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>第◯回〇〇杯</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Title />
        <Rule />
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={6} xs={12}>
            <Box pt={3}>
              <Step />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box pt={3}>
              <Checker />
            </Box>
          </Grid>
        </Grid>
        <Caution />
      </main>

      <footer className={styles.footer}>Developed by {'ふー'}</footer>
    </div>
  )
}

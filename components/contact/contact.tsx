import React from 'react'
import styles from './Contact.module.css'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Grid from '@mui/material/Grid'

export function Contact(): JSX.Element {
  return (
    <div className={styles.grid}>
      <Grid container alignItems="center" justifyContent="center" direction="column">
        <Grid item xs={12}>
          <Alert severity="warning">
            <AlertTitle>不具合が出た場合</AlertTitle>
            以下の場合はX（旧Twitter）で
            <a href="https://twitter.com/Fooooooo628" target="_blank" rel="noopener noreferrer">
              開発者（ふー）
            </a>
            へDMもしくは告知ツイートへのリプライでご連絡ください
            <ul>
              <li>ルールを守っているにも関わらず、チェッカーが通らない</li>
              <li>自分の使いたいポケモンが選択肢にない（検索しても出てこない）</li>
              <li>その他システムの不具合を発見した</li>
            </ul>
            開発者をブロックしている等、開発者へのDMもしくは告知ツイートへのリプライが難しい場合を除き、
            <p>システムに関する問い合わせは基本的に主催者には連絡しないでください</p>
          </Alert>{' '}
        </Grid>
      </Grid>
    </div>
  )
}

import React from 'react'
import styles from './Caution.module.css'
import { Box, Grid, AlertTitle, Alert } from '@mui/material'
import { Menu } from '../menu/menu'

export function Caution(): JSX.Element {
  return (
    <div className={styles.grid}>
      <Grid container alignItems="center" justifyContent="center" direction="column">
        <Grid item xs={12}>
          <Box pt={3} p={2}>
            <Menu title="注意事項" image="/mark_chuui.png" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pt={3} p={1}>
            <Alert severity="warning">
              <AlertTitle>不具合に関して</AlertTitle>
              以下の場合はX（旧Twitter）で 開発者 へDMもしくは 告知ツイート へのリプライでご連絡ください。
              <ul>
                <li>ルールを守っているにも関わらず、チェッカーが通らない</li>
                <li>自分の使いたいポケモンが選択肢にない（検索しても出てこない）</li>
                <li>その他システムの不具合を発見した</li>
              </ul>
              開発者をブロックしている等、開発者へのDMもしくは告知ツイートへのリプライが難しい場合を除き、
              <p>システムに関する問い合わせは基本的に主催者には連絡しないでください。</p>
            </Alert>
          </Box>
          <Box pt={3} p={1}>
            <Alert severity="error">
              <AlertTitle>ルール違反に関して</AlertTitle>
              チェッカーを通して大会に参加したにも関わらず、パーティのルール違反が発覚した場合、該当者は荒らしとみなします。
              <br />
              <p>悪質な場合は今後の大会に参加することができなくなる可能性があります。</p>
            </Alert>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

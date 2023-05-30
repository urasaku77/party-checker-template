import { Menu } from '../menu/menu'
import styles from './Result.module.css'
import { Grid, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'

type Props = {
  visible: number
}

export function Result(props: Props) {
  const [value, setValue] = useState(['', ''])
  useEffect(() => {
    if (props.visible == 1) {
      setValue(['OK', 'あいことば：hogehoge'])
    } else if (props.visible == 2) {
      setValue(['NG', '制限に引っかかっています'])
    } else {
      setValue(['ここに結果が', '表示されます'])
    }
  }, [props.visible])

  return (
    <div>
      <Grid container alignItems="center" justifyContent="center" direction="column">
        <Grid item xs={12}>
          <Box pt={3}>
            <Menu title="結果" image="/EmHlzzLXEAAgVLq.jpg" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pt={3}>
            <a className={styles.text}>{value[0]}</a>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pt={3}>
            <a className={styles.text}>{value[1]}</a>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

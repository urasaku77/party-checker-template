import React, { useState, useEffect } from 'react'
import {
  Grid,
  Box,
  Button,
  Alert,
  AlertColor,
  AlertTitle,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material'

type Value = {
  color: AlertColor
  title: string
  message: string
}

type Props = {
  check: boolean
  open: boolean
  onClose: () => void
}

const password = '『02502580』'

export function Result(props: Props) {
  const [value, setValue] = useState<Value>({ color: 'info', title: 'info', message: '' })
  useEffect(() => {
    if (props.check) {
      setValue({ color: 'success', title: 'OK', message: 'チェック成功しました' })
    } else {
      setValue({ color: 'error', title: 'NG', message: '制限に引っかかっています。やり直してください' })
    }
  }, [props.check])

  return (
    <Dialog fullScreen open={props.open} onClose={props.onClose}>
      <DialogTitle>結果</DialogTitle>
      <DialogContent>
        <Grid container alignItems="center" justifyContent="center" direction="column">
          <Grid item xs={12}>
            <Alert severity={value.color}>
              <AlertTitle>{value.title}</AlertTitle>
              <Box pt={0}>{value.message}</Box>
            </Alert>
          </Grid>
          <Grid item xs={12} display={value.color == 'success' ? 'block' : 'none'}>
            <Box pt={5} textAlign={'center'} fontSize="1.5rem">
              あいことば
            </Box>
            <Box pt={1} fontSize="2rem">
              <strong>{password}</strong>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  )
}

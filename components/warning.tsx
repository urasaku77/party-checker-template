import React from 'react'
import {
  Grid,
  Box,
  Button,
  Checkbox,
  Alert,
  AlertTitle,
  Dialog,
  DialogContent,
  DialogActions,
  FormGroup,
  FormControlLabel,
} from '@mui/material'

export interface Props {
  message: string
  open: boolean
  onClose: () => void
}

export function Warning(props: Props): JSX.Element {
  const handleButton = () => {
    props.onClose()
    setChecked(false)
  }

  const handleClose = (_event: unknown, reason: string) => {
    if (reason && reason == 'backdropClick') return
    props.onClose()
    setChecked(false)
  }

  const [checked, setChecked] = React.useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogContent>
        <Grid container alignItems="center" justifyContent="center" direction="column">
          <Grid item xs={12}>
            <Alert severity="warning">
              <AlertTitle>警告</AlertTitle>
              <Box pt={1}>{props.message}</Box>
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label="はい、ルールを理解しました"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleButton} disabled={!checked}>
          理解した上で閉じる
        </Button>
      </DialogActions>
    </Dialog>
  )
}

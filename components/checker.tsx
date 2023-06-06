import React, { useState } from 'react'
import { Button, Grid, Box } from '@mui/material'
import { Menu } from './menu/menu'
import { Input } from './input'
import { Result } from './result'
import { Pokemon } from '../data/pokemon'

export function Checker() {
  const [check, setCheck] = useState(false)

  //TODO:ここをなんとかしたい
  const [error1, setError1] = useState(false)
  const handleInputChange1 = (bool: boolean) => {
    setError1(bool)
  }
  const [value1, setValue1] = useState('')
  const handleUpdateValue1 = (val: string) => {
    setValue1(val)
  }
  const [error2, setError2] = useState(false)
  const handleInputChange2 = (bool: boolean) => {
    setError2(bool)
  }
  const [value2, setValue2] = useState('')
  const handleUpdateValue2 = (val: string) => {
    setValue2(val)
  }
  const [error3, setError3] = useState(false)
  const handleInputChange3 = (bool: boolean) => {
    setError3(bool)
  }
  const [value3, setValue3] = useState('')
  const handleUpdateValue3 = (val: string) => {
    setValue3(val)
  }
  const [error4, setError4] = useState(false)
  const handleInputChange4 = (bool: boolean) => {
    setError4(bool)
  }
  const [value4, setValue4] = useState('')
  const handleUpdateValue4 = (val: string) => {
    setValue4(val)
  }
  const [error5, setError5] = useState(false)
  const handleInputChange5 = (bool: boolean) => {
    setError5(bool)
  }
  const [value5, setValue5] = useState('')
  const handleUpdateValue5 = (val: string) => {
    setValue5(val)
  }
  const [error6, setError6] = useState(false)
  const handleInputChange6 = (bool: boolean) => {
    setError6(bool)
  }
  const [value6, setValue6] = useState('')
  const handleUpdateValue6 = (val: string) => {
    setValue6(val)
  }

  function onclick() {
    let count = [0, 0]
    const party = [value1, value2, value3, value4, value5, value6]
    const limited = new Pokemon().limited
    party.forEach((element) => {
      //TODO:まとめて判定できそう
      if (limited[0].includes(element)) {
        count[0]++
      } else if (limited[1].includes(element)) {
        count[1]++
      }
    })
    if (count[0] > 1 || count[1] > 1) {
      setCheck(false)
    } else {
      setCheck(true)
    }
    setOpen(true)
  }

  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Grid container alignItems="center" justifyContent="center" direction="column">
      <Grid item xs={12}>
        <Box pt={3}>
          <Menu title="パーティチェック" image="/EmHlzzLXEAAgVLq.jpg" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={3}>
          <Input num={1} value={value1} updateValue={handleUpdateValue1} updateValidation={handleInputChange1} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={3}>
          <Input num={2} value={value2} updateValue={handleUpdateValue2} updateValidation={handleInputChange2} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={3}>
          <Input num={3} value={value3} updateValue={handleUpdateValue3} updateValidation={handleInputChange3} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={3}>
          <Input num={4} value={value4} updateValue={handleUpdateValue4} updateValidation={handleInputChange4} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={3}>
          <Input num={5} value={value5} updateValue={handleUpdateValue5} updateValidation={handleInputChange5} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={3}>
          <Input num={6} value={value6} updateValue={handleUpdateValue6} updateValidation={handleInputChange6} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={3}>
          <Button
            variant="contained"
            onClick={onclick}
            disabled={[error1, error2, error3, error4, error5, error6].includes(false)}
          >
            チェック
          </Button>
          <Result check={check} open={open} onClose={handleClose} />
        </Box>
      </Grid>
    </Grid>
  )
}

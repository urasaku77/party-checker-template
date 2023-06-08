import React, { useEffect, useState } from 'react'
import { Button, Grid, Box } from '@mui/material'
import { Menu } from './menu/menu'
import { Input } from './input'
import { Result } from './result'
import { Pokemon } from '../data/pokemon'

const CHECK_NUM = 6
const LIMITED = new Pokemon().limited

type Input = {
  isError: boolean
  value: string
}

export function Checker() {
  var checkList: JSX.Element[] = []
  var countList: number[] = new Array(LIMITED.length)

  const [isCheck, setIsCheck] = useState(false)
  const [isButton, setIsButton] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }

  const [inputs, setInputs] = useState<Input[]>(Array(CHECK_NUM).fill({ input: false, value: '' }))
  const handleInputChange = (num: number, bool: boolean, str: string) => {
    setInputs(inputs.map((input, index) => (index === num ? { isError: bool, value: str } : input)))
  }

  useEffect(() => {
    if (!inputs.map((input) => input.isError).includes(false) && !inputs.map((input) => input.value).includes('')) {
      setIsButton(true)
    } else {
      setIsButton(false)
    }
  }, [inputs])

  function onclick() {
    const values = inputs.map((input) => input.value)
    countList.fill(0)
    values.forEach((element) => {
      for (let i = 0; i < LIMITED.length; i++) {
        if (LIMITED[i].name.includes(element)) {
          countList[i] = countList[i] + 1
        }
      }
    })
    if (countList.filter((value, index) => value > LIMITED[index].num).length) {
      setIsCheck(false)
    } else {
      setIsCheck(true)
    }
    setIsOpen(true)
  }

  for (var i = 0; i < CHECK_NUM; i++) {
    checkList.push(
      <Grid item xs={12}>
        <Box pt={3}>
          <Input num={i} index={i + 1} value={inputs[i].value} update={handleInputChange} />
        </Box>
      </Grid>
    )
  }

  return (
    <Grid container alignItems="center" justifyContent="center" direction="column">
      <Grid item xs={12}>
        <Box pt={3}>
          <Menu title="パーティチェック" image="/EmHlzzLXEAAgVLq.jpg" />
        </Box>
      </Grid>
      {checkList}
      <Grid item xs={12}>
        <Box pt={3}>
          <Button variant="contained" onClick={onclick} disabled={!isButton}>
            チェック
          </Button>
          <Result check={isCheck} open={isOpen} onClose={handleClose} />
        </Box>
      </Grid>
    </Grid>
  )
}

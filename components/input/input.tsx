import React, { useState, useEffect } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import { Pokemon } from '../../data/pokemon'

function hiraToKata(str: string): string {
  return str.replace(/[\u3041-\u3096]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) + 0x60))
}

const styles = makeStyles((theme) =>
  createStyles({
    root: {},

    warningStyles: {
      '& .MuiFormLabel-root': {
        color: 'orange !important',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'orange !important',
        },
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'orange !important',
      },
      '& .MuiFormHelperText-root': {
        color: 'orange !important',
      },
    },
  })
)

type Props = {
  num: number
  value: string
  updateValue: (val: string) => void
  updateValidation: (bool: boolean) => void
}

export function Input(props: Props) {
  const data = new Pokemon()
  const classes = styles()

  const [value, setValue] = useState()
  const [errorMessage, setErrorMessage] = useState([''])

  useEffect(() => {
    if (value) {
      if (data.baned.includes(value)) {
        setErrorMessage(['その' + data.type + 'は使用禁止です'])
        props.updateValidation(false)
      } else if (data.limited.includes(value)) {
        setErrorMessage(['その' + data.type + 'は制限されています'])
        props.updateValidation(true)
      } else {
        setErrorMessage([''])
        props.updateValidation(true)
      }
      props.updateValue(value)
    } else {
      setErrorMessage([''])
      props.updateValidation(false)
      props.updateValue('')
    }
  }, [value])

  return (
    <Autocomplete
      value={value}
      options={data.list}
      onChange={(event: any, newValue: any) => {
        setValue(newValue != null ? newValue.label : '')
      }}
      filterOptions={(options, { inputValue }) =>
        options.filter((option) => option.label.includes(hiraToKata(inputValue)))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.num.toString() + data.label}
          error={errorMessage[0].includes('禁止')}
          className={errorMessage[0].includes('制限') ? classes.warningStyles : undefined}
          helperText={errorMessage[0]}
        />
      )}
      sx={{ width: 300 }}
    />
  )
}

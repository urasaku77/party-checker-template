import React, { useState, useEffect } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import { Pokemon } from '../data/pokemon'
import { Warning } from './warning'

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
  index: number
  value: string
  update: (num: number, bool: boolean, str: string) => void
}

export function Input(props: Props) {
  const data = new Pokemon()
  const classes = styles()

  const [value, setValue] = useState<any>()
  const [errorMessage, setErrorMessage] = useState([''])

  useEffect(() => {
    if (value) {
      if (data.warning.has(value)) {
        setWarning(data.warning.get(value)!)
        setOpen(true)
      }
      if (data.baned.includes(value)) {
        setErrorMessage(['その' + data.type + 'は使用禁止です'])
        props.update(props.num, false, value)
      } else if (data.limited.some((v) => v.name.includes(value))) {
        setErrorMessage(['その' + data.type + 'は制限されています'])
        props.update(props.num, true, value)
      } else {
        setErrorMessage([''])
        props.update(props.num, true, value)
      }
    } else {
      setErrorMessage([''])
      props.update(props.num, false, '')
    }
  }, [value])

  const [warning, setWarning] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
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
            label={props.index.toString() + data.label}
            error={errorMessage[0].includes('禁止')}
            className={errorMessage[0].includes('制限') ? classes.warningStyles : undefined}
            helperText={errorMessage[0]}
          />
        )}
        sx={{ width: 300 }}
      />
      <Warning message={warning} open={open} onClose={handleClose} />
    </div>
  )
}

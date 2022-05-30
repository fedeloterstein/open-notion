import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
  IconButton,
} from '@mui/material'
import React, { ChangeEvent, useState, useMemo } from 'react'
import { Layout } from '../../components/layouts'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import { EntryStatus } from '../../interfaces'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'


const validStatus: EntryStatus[] = ['next-up', 'in-progress', 'completed']

const EntryPage = () => {

    const [inputValue, setinputValue] = useState('')
    const [status, setstatus] = useState<EntryStatus>('next-up')
    const [touched, settouched] = useState(false)

    const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

    const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setinputValue(event.target.value)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setstatus(event.target.value as EntryStatus)
    }

    const onSave = () => {

    }

  return (
    <Layout title="... .... ... .. ">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${inputValue}`}
              subheader={`Creeda hace: ... minutos`}
            />
            <CardContent>
              <TextField
                sx={{ margintop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label="Nueva entradas"
                value={inputValue}
                onBlur={() => settouched(true)}
                onChange={onInputValueChange}
                helperText={isNotValid && 'Ingrese un valor'}
                error={isNotValid}
              />
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup 
                row
                value={status}
                onChange={onStatusChange}
                >
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
      sx={{
          position: 'fixed',
        bottom: 30,
        right: 30,
        backgroundColor: 'error.dark'
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </Layout>
  )
}

export default EntryPage

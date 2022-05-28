import { Box, Button, TextField } from '@mui/material'
import React, { ChangeEvent, useState, useContext } from 'react'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UiContext } from '../../context';

export const NewEntry = () => {

  const [inputValue, setinputValue] = useState('')
  const [touched, settouched] = useState(false)

  const {addNewEntry} = useContext(EntriesContext)
  const {setIsAddingEntry, isAddingEntry} = useContext(UiContext)
  const onTextFielChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setinputValue(event.target.value)
  }

const onSave = () => {
  if(inputValue.length === 0) return;
  addNewEntry(inputValue);
  setIsAddingEntry(false)
  settouched(false)
  setinputValue('')
    
}

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            sx={{ marginTop: 2, marginBottom: 1 }}
            fullWidth
            placeholder="New task"
            autoFocus
            multiline
            label="New task"
            helperText={inputValue.length <= 0 && touched && "Please enter a value"}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFielChanged}
            onBlur={() => settouched(true)}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Add Task
        </Button>
      )}
    </Box>
  )
}

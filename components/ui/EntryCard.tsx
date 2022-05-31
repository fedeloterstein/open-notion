import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import React, { DragEvent, FC, useContext } from 'react'
import { Entry } from '../../interfaces'
import { UiContext } from '../../context'
import { useRouter } from 'next/router'

interface Props {
  entry: Entry
}
export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UiContext)

  const router = useRouter()

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id)
    startDragging()
  }

  const onDragEnd = () => {
    endDragging()
  }

  const onClick = () => {
    router.push(`/entries/${entry._id}`)
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onClick}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}
        >
          <Typography variant="body2">hace 30 min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

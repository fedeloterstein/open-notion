import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { UiContext } from '../../context'
import { useContext } from 'react'

export const Navbar = () => {
  const { openSideMenu } = useContext(UiContext)
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">Open Notion</Typography>
      </Toolbar>
    </AppBar>
  )
}

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { UiContext } from '../../context'
import { useContext } from 'react'
import NextLink from 'next/link'

export const Navbar = () => {
  const { openSideMenu } = useContext(UiContext)
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href='/' passHref>
          <Link underline='none' color='white'>
            <Typography variant="h6">Open Notion</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}

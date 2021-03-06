import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import { useContext } from 'react'
import { UiContext } from '../../context'

const menuItems: string[] = [
  'By Status',
  'My Tasks',
  'By Priority',
  'All Tasks',
  'Due Dates',
]
export const Sidebar = () => {

  const {sideMenuOpen, closeSideMenu} = useContext(UiContext)

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box sx={{width: 250}}>
      <Box sx={{ padding: '5px 10px' }}>
      </Box>
      <List>
        {menuItems.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <ListAltOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      </Box>
    </Drawer>
  )
}

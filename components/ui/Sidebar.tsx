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

const menuItems: string[] = [
  'By Status',
  'My Tasks',
  'By Priority',
  'All Tasks',
  'Due Dates',
]
export const Sidebar = () => {
  return (
    <Drawer anchor="left" open={true} onClose={() => console.log('cerrado')}>
      <Box sx={{width: 250}}>
      <Box sx={{ padding: '5px 10px' }}>
        <Typography variant="h4">Menu</Typography>
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

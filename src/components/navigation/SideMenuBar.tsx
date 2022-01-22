import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import SideMenuBarItem from './SideMenuBarItem';

export default () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <SideMenuBarItem />
    </Drawer>
  );
};

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <ListItemIcon>
          <GradingOutlinedIcon sx={{ color: 'white', fontSize: 33 }} />
        </ListItemIcon>
        <ListItemText
          sx={{ my: 0 }}
          primary="Feedback Portal"
          primaryTypographyProps={{
            fontSize: 27,
            fontWeight: 'medium',
            letterSpacing: 1.5,
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

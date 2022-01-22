import React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import routes from 'constants/routes';

export default () => {
  const history = useHistory();

  return (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {routes.map(({ label, path, icon, shownOnNavBar }) =>
          shownOnNavBar ? (
            <ListItemButton
              key={`itemButton-${label}`}
              onClick={() => {
                history.push(path);
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          ) : (
            <></>
          ),
        )}
      </List>
    </Box>
  );
};

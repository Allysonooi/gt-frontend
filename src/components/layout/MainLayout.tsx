import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import TopBar from 'components/navigation/TopBar';
import SideMenuBar from 'components/navigation/SideMenuBar';

export default ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBar />
      <SideMenuBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
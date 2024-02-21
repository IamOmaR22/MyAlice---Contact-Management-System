import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline } from '@mui/material';



const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          My Material-UI App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
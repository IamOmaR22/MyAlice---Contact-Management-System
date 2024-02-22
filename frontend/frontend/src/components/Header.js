import React from 'react';
import { AppBar, Toolbar, Typography, Link as MuiLink, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0} style={{ backgroundColor: '#1976D2', color: '#ffff' }}>
      <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Contact Management System
          </RouterLink>
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <MuiLink
            component={RouterLink}
            to="/"
            variant="button"
            color="inherit"
            style={{ margin: '0 10px', textDecoration: 'none' }}
          >
            Home
          </MuiLink>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            color="primary"
            style={{ margin: '0 10px', textDecoration: 'none' }}
          >
            Register
          </Button>
          <Button
            component={RouterLink}
            to="/login"
            color="primary"
            variant="contained"
            style={{ margin: '0 10px' }}
          >
            Login
          </Button>
          <Button
            component={RouterLink}
            to="/logout"
            color="error"
            variant="contained"
            style={{ margin: '0 10px' }}
          >
            Logout
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

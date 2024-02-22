import React from 'react';
import { Typography, Link } from '@mui/material';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1976d2', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body1" gutterBottom>
        &copy; {new Date().getFullYear()} Contact Management System
      </Typography>
      <Typography variant="body2" gutterBottom>
        Created with ❤️ by Md. Omar Faruk
      </Typography>
    </footer>
  );
}

export default Footer;

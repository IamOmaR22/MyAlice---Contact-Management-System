import React from 'react';
import { Typography, Link } from '@mui/material';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1976d2', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      <Typography variant="body1" gutterBottom>
        &copy; {new Date().getFullYear()} Your Contact Management App
      </Typography>
      <Typography variant="body2" gutterBottom>
        Created with ❤️ by Your Name
      </Typography>
      <Typography variant="body2">
        <Link href="https://www.example.com" target="_blank" rel="noopener" color="inherit">
          Visit our website
        </Link>
      </Typography>
    </footer>
  );
}

export default Footer;

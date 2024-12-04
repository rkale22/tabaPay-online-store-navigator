import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Box
          component="img"
          src="/ecommlogo.jpg" // 
          alt="Logo"
          sx={{ height: 40, mr: 2 }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Online Store Navigator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

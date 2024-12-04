import React from 'react';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
    </Box>
  );
}

export default App;

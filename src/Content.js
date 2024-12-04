import React from 'react';
import { Typography, Box } from '@mui/material';

function Content({ selectedCategory }) {
    if (!selectedCategory) {
      return (
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Online Store Navigator
          </Typography>
          <Typography variant="body1">
            Select a category from the menu to view products.
          </Typography>
        </Box>
      );
    }
  
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {selectedCategory.name}
        </Typography>
      </Box>
    );
  }
  
  export default Content;
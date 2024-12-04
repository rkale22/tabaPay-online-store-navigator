import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar onCategorySelect={handleCategorySelect} />

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Category Selected</DialogTitle>
        <DialogContent>
          You clicked on: <strong>{selectedCategory?.name}</strong>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default App;

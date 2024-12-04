import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Content from './Content';
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
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        <Box sx={{ width: '250px', borderRight: '1px solid #ccc' }}>
          <Sidebar onCategorySelect={handleCategorySelect} />
        </Box>
        {/* Content Area */}
        <Box sx={{ flexGrow: 1 }}>
          <Content selectedCategory={selectedCategory} />
        </Box>
      </Box>
      <Footer />

  

      {/* Modal Dialog */}
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

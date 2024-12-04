import React from 'react';
import {
    Typography,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  

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
    const categoryData = [
        {
          id: '1',
          title: 'Introduction',
          content:
            'This section provides an introduction to the selected category. It contains lots of text describing the category in detail.',
        },
        {
          id: '2',
          title: 'Features',
          content:
            'This section lists the features of the products within the selected category. It includes extensive descriptions and specifications.',
        },
        {
          id: '3',
          title: 'Specifications',
          content:
            'Detailed technical specifications of the products are provided in this section. It contains technical data and charts.',
        },
        {
          id: '4',
          title: 'Reviews',
          content:
            'User reviews and testimonials are presented here. This section may contain a large number of reviews.',
        },
      ];

    return (
      <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {selectedCategory.name}
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {categoryData.map((section) => (
        <Accordion key={section.id} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{section.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
    );
  }
  
  export default Content;
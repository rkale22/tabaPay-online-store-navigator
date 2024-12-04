import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3E2723', 
    },
    secondary: {
      main: '#616161', 
    },
    background: {
      default: '#FAFAFA', 
    },
    text: {
      primary: '#212121', 
      secondary: '#757575', 
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;

import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#814583',
      light: 'rgba(201,159,210,0.41)',
      dark: '#723772',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d0cbd0',
      dark: '#3b3b3b',
      light: '#fff',
    },
    text: {
      secondary: '#fff',
    },
  },
  typography: {
    navLink: {
      fontSize: '16px',
    },
  },
});

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B755E', // Ana koyu yeşil renk
    },
    secondary: {
      main: '#FFBE40', // İkincil sarı renk
    },
    info: {
      main: '#F0F0F0', // Arka plan rengi (açık gri)
    },
    text: {
      primary: '#000000', // Siyah yazı rengi
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
});

export default theme;
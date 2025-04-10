import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { SizeConverter } from './components/SizeConverter';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#ff6d00',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      color: '#4a148c',
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '12px 16px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <header style={{ textAlign: 'center', padding: '48px 0' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            marginBottom: '24px',
            background: 'linear-gradient(45deg, #4a148c 30%, #ff6d00 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Find Your Perfect Shoe Fit
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            maxWidth: 700, 
            margin: '0 auto',
            color: '#616161'
          }}>
            Convert between international shoe sizes and find your ideal fit across all major brands.
          </p>
        </header>
        <div style={{ 
          background: '#ffffff', 
          borderRadius: 16, 
          padding: '40px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
        }}>
          <SizeConverter />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
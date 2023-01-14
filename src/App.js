
import { Container, ThemeProvider } from '@mui/material';
import './App.css';
import Routes from './Routes/Routes';
import { theme } from './Theme/Theme';

function App() {

  return (

    <ThemeProvider theme={theme}>
      <Container>
        <Routes></Routes>
      </Container>
    </ThemeProvider>

  );
}

export default App;

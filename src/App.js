import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Main from './components/Main/Index';
import Navbar from './components/Navbar/Index';
import Sidebar from './components/Sidebar/Index';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);
  const [activeMobile, setActiveMobile] = useState(true);
  const [mode, setMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light'
    },
    breakpoints: {
      values: {
        xs: 0,
        xm: 400, // Ajout du breakpoint xm avec la valeur 400
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  return (
    <ThemeProvider theme={theme} >
      <Box>
        <Navbar activeMobile={activeMobile} setActiveMobile={setActiveMobile} />
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <Sidebar activeMobile={activeMobile} active={active} />
          <Main activeMobile={activeMobile} active={active} setActive={setActive} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

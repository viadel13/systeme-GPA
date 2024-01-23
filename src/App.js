import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import Root from './components/Root';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {
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
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Root />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette:{
      primary:{
        main:'#5d7e62'
      },
      secondary:{
        main:'#1b1c26'
      },
      info:{
        main:'#f8f8d6'
      }
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



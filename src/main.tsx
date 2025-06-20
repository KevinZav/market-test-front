import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'

import { RouterProvider } from 'react-router-dom';
import { appRoutes } from './presentation/routes';
import { ThemeProvider } from '@emotion/react';
import { marketTheme } from './presentation/shared';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './presentation/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={marketTheme}>
        <CssBaseline></CssBaseline>
        <RouterProvider router={appRoutes} future={{ v7_startTransition: true }}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)

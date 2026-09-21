import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router';

import { GlobalProvider } from './context/GlobalContext.tsx';

import App from './App.tsx';

import './styles/global.scss';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <BrowserRouter>
         <GlobalProvider>
            <App />
         </GlobalProvider>
      </BrowserRouter>
   </StrictMode>,
);

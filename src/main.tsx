import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { CountProvider } from './context/CounterContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CountProvider>
        <App />
      </CountProvider>
    </BrowserRouter>
  </StrictMode>,
)

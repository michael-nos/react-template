import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '@/components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

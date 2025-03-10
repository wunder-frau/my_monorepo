import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app.js';
import './app/index.css';
import React from 'react';
const root = createRoot(document.getElementById('root') as HTMLElement);
console.log('React version books:', React.version);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

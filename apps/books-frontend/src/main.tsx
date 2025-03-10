import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Single import for createRoot
// import { BrowserRouter } from 'react-router-dom';
import App from './app/app.js';
import './app/index.css';
import React from 'react';
const root = createRoot(document.getElementById('root') as HTMLElement);
console.log('React version books:', React.version);
root.render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </StrictMode>,
);

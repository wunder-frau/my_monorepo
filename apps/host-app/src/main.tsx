import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app.js';
import './app/index.css';

console.log('React version remote::', React.version);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

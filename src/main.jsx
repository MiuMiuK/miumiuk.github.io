import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeAnalytics } from './lib/analytics';
import { initializeFigmaCapture } from './lib/figmaCapture';

initializeAnalytics();
initializeFigmaCapture();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

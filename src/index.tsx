import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';

const container = document.getElementById('root') as HTMLElement;

// Check if the page was pre-rendered by react-snap
const hasChildNodes = container.hasChildNodes();

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

if (hasChildNodes) {
  // Hydrate pre-rendered content
  ReactDOM.hydrateRoot(container, app);
} else {
  // Normal render for development
  const root = ReactDOM.createRoot(container);
  root.render(app);
}

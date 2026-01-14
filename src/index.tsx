import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

// Self-hosted fonts (eliminates Google Fonts external requests)
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/dancing-script/400.css';
import '@fontsource/dancing-script/500.css';
import '@fontsource/dancing-script/600.css';
import '@fontsource/dancing-script/700.css';

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

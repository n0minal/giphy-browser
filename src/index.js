import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import Router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Router />
    </App>
  </React.StrictMode>
);

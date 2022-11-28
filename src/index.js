import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  
  <HashRouter>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </HashRouter>,
  document.getElementById('root')
);


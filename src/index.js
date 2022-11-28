import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  
  <BrowserRouter>
    <HelmetProvider> {/*For indexing seo */}
    <App />
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


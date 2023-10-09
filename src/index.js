import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LogoLoader from './routes/LogoLoader';

ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter basename="/">
      <HelmetProvider> {/*For indexing seo <forceRefresh={true}>*/}
      <LogoLoader />
      <App />
      </HelmetProvider>
    </BrowserRouter>


    </React.StrictMode>,
  
  document.getElementById('root')
);


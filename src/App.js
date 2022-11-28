import React from 'react';
import { Routes, Route, useLocation, } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import PrivacyPolicy from './components/PAGES/Aboutus/PrivacyPolicy';
import TermsnConditions from './components/PAGES/Aboutus/TermsnConditions';
import Disclaimer from './components/PAGES/Aboutus/Disclaimer';
import Sitemaps from './components/Tools/sitemaps';
import Error404 from './components/Tools/Error404';

import Home from './routes/HOME';


import Services from './routes/SERVICES';
import Technologies from './routes/TECHNOLOGIES';

import Clients from './routes/Clients';
import Reviews from './routes/Reviews';

import GetQuotation from './routes/GetQuotation';

import Aboutus from './routes/Aboutus';
import Contactus from './routes/CONTACTUS';

import Reactblog from './components/PAGES/Technologies/Blogpages/Reactblog';


import { AnimatePresence } from 'framer-motion';

export function App() {
  const location= useLocation();
  window.scrollTo(0, 0); /*---ResetPagelocation---*/

  return (
  <>
  <Navbar />
    <AnimatePresence>
      <Routes location ={location} key={location.pathname}>
        
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Error404 />} />


          <Route path='/services' element={<Services />} />

          <Route path='/technologies' element={<Technologies />} />
            <Route path='/reactblog' element={<Reactblog />} />
        
          <Route path='/clients' element={<Clients />} />
          <Route path='/reviews' element={<Reviews />} />

          <Route path='/getquotation' element={<GetQuotation />} />

          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} /> 
          <Route path='/privacypolicy' element={<PrivacyPolicy />} /> 
          <Route path='/terms&conditions' element={<TermsnConditions />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/sitemaps' element={<Sitemaps/>} />
         


      </Routes>
    </AnimatePresence>

  <Footer />   
</>
    
  );

}

export default App;
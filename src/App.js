import React from 'react';import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './routes/HOME'
import Error404 from './components/Tools/Error404';

import Services from './routes/SERVICES';
import Technologies from './routes/TECHNOLOGIES';

import Clients from './routes/Clients';
import Reviews from './routes/Reviews';

import GetQuotation from './routes/GetQuotation';

import Aboutus from './routes/Aboutus';
import Contactus from './routes/CONTACTUS';

import Reactblog from './components/PAGES/Technologies/Blogpages/Reactblog';


function App() {
  return (
    <>
      
      <Navbar />
      
      <>
  
      <Routes>
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
        </Routes>
      
        </>
        <Footer />
        
        
    </>
  );
}

export default App;
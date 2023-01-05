import React, { useState } from "react";
import {  Routes, Route, useLocation  } from 'react-router-dom';


import {Navbar,Footer,PrivacyPolicy,TermsnConditions,Disclaimer,Sitemaps,Error404,Home,
        Services,Technologies,Clients,Reviews,GetQuotation,Aboutus,Contactus,
        Reactblog,} from './routes/Routesmap';


export function App() {
  const location= useLocation();
  window.scrollTo(0, 0); /*---ResetPagelocation---*/

  const [setLoading] = useState(true);
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 5000);
  }

  return (
  <>
  <Navbar />
      
      <Routes location ={location} key={location.pathname}>
        
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Error404 />} />


          <Route path='/services' element={<Services />} />

          <Route path='/technologies' element={<Technologies />} />
            <Route path='/technologies/blog/reactblog' element={<Reactblog />} />
        
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


  <Footer />   
</>
    
  );

}

export default App;
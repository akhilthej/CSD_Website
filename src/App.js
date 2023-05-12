import React, { useState, useEffect } from "react";
import {  Routes, Route, useLocation  } from 'react-router-dom';
import OneSignal from 'react-onesignal';


import {Navbar,Footer,Sitemap,PrivacyPolicy,TermsnConditions,Disclaimer,ShippingandDelivery,ReturnPolicy,Error404,Home,
        Services,Technologies,Clients,Reviews,GetQuotation,Aboutus,Contactus,
        Reactblog,Payment,} from './routes/Routesmap';

import Notification from "./components/Tools/Notifications";        
        
export function App() {
  useEffect(() => {
    OneSignal.init({ appId: "0360b886-1a9d-4204-bd34-af4aba2203f9" });
  }, []); /*---Onesignal---*/

  const location= useLocation();
  window.scrollTo(0, 0); /*---ResetPagelocation---*/

  /*---LogoPreLoager
  const [setLoading] = useState(true);
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 5000);
  };---*/

  
  return (
  <>
  <Navbar />
      <Notification/>
      <Routes location ={location} key={location.pathname}>
        
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Error404 />} />
          <Route path='/sitemap' element={<Sitemap />} />


          <Route path='/services' element={<Services />} />

          <Route path='/technologies' element={<Technologies />} />
            <Route path='/technologies/reactblog' element={<Reactblog />} />
        
          <Route path='/clients' element={<Clients />} />
          
          <Route path='/reviews' element={<Reviews />} />

          <Route path='/getquotation' element={<GetQuotation />} />

          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} /> 

          <Route path='/privacypolicy' element={<PrivacyPolicy />} /> 
          <Route path='/terms&conditions' element={<TermsnConditions />} />
          <Route path='/returnpolicy' element={<ReturnPolicy />} />
          <Route path='/shipping&delivery' element={<ShippingandDelivery />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
         


      </Routes>


  <Footer />   
</>
    
  );

}

export default App;
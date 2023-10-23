import React from "react";
import {  Routes, Route, useLocation  } from 'react-router-dom';



import {Navbar,Footer,PrivacyPolicy,TermsnConditions,Disclaimer,ShippingandDelivery,ReturnPolicy,Error404,Home,
        Services,Blogs,Clients,Reviews,GetQuotation,Aboutus,Contactus,} from './routes/Routesmap';


import {WebDevelopment} from './routes/Routesmap'

import Notification from "./components/Tools/Notifications";        
        
export function App() {

  const location= useLocation();
  window.scrollTo(0, 0); /*---ResetPagelocation---*/

  
  return (
  <>
  <Navbar />
      <Notification/>
      <Routes location ={location} key={location.pathname}>
        
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Error404 />} />
         

          <Route path='/services' element={<Services />} />

          <Route path='/best-web-developement-company' element={<WebDevelopment/>} />
          <Route path="/web-developement-company-in-vizag" element={<WebDevelopment/>} />
          <Route path="/best-web-developement-company-in-vizag" element={<WebDevelopment/>} />
          
          
          <Route path='/blogs' element={<Blogs />} />
        
          <Route path='/clients' element={<Clients />} />
          
          <Route path='/reviews' element={<Reviews />} />

          <Route path='/getquotation' element={<GetQuotation />} />

          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} /> 

          <Route path='/privacypolicy' element={<PrivacyPolicy />} /> 
          <Route path='/termsconditions' element={<TermsnConditions />} />
          <Route path='/returnpolicy' element={<ReturnPolicy />} />
          <Route path='/shippingdelivery' element={<ShippingandDelivery />} />
          <Route path='/disclaimer' element={<Disclaimer />} />

         


      </Routes>


  <Footer />   
</>
    
  );

}

export default App;
import React from "react";
import {  Routes, Route, useLocation  } from 'react-router-dom';



import {Navbar,Footer,PrivacyPolicy,TermsnConditions,Disclaimer,ShippingandDelivery,ReturnPolicy,Error404,Home,
        Services,Blogs,Clients,Reviews,Aboutus,Contactus,} from './routes/Routesmap';


import {WebDevelopment,MobileAppDevelopment,GraphicDesigning,DigitalMarketing,BrandServices,Advertising,} from './routes/Routesmap'

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

          <Route path='/best-mobile-app-development-company' element={<MobileAppDevelopment/>} />
          <Route path="/mobile-app-development-in-vizag" element={<MobileAppDevelopment/>} />
          <Route path="/best-mobile-app-development-in-vizag" element={<MobileAppDevelopment/>} />

          <Route path='/best-graphic-designing-company' element={<GraphicDesigning/>} />
          <Route path="/graphic-designing-company-in-vizag" element={<GraphicDesigning/>} />
          <Route path="/best-graphic-designing-in-vizag" element={<GraphicDesigning/>} />
          <Route path="/best-poster-designing-company" element={<GraphicDesigning/>} />

          <Route path='/best-digital-marketing-company' element={<DigitalMarketing/>} />
          <Route path="/digital-marketing-company-in-vizag" element={<DigitalMarketing/>} />
          <Route path="/best-digital-marketing-company-in-vizag" element={<DigitalMarketing/>} />
          <Route path="/social-media-marketing-company" element={<DigitalMarketing/>} />
          
          <Route path='/best-brand-services-company' element={<BrandServices/>} />
          <Route path="/brand-services-company-in-vizag" element={<BrandServices/>} />
          <Route path="/best-brand-services-company-in-vizag" element={<BrandServices/>} />

          <Route path='/best-advertising-company' element={<Advertising/>} />
          <Route path="/advertising-company-in-vizag" element={<Advertising/>} />
          <Route path="/best-advertising-company-in-vizag" element={<Advertising/>} />
          
          
          <Route path='/blogs' element={<Blogs />} />
        
          <Route path='/clients' element={<Clients />} />
          
          <Route path='/reviews' element={<Reviews />} />

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
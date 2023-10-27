import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, Home, Aboutus, Contactus, Services, Blogs, Clients, Reviews } from './routes/Routesmap';
import NavbarMobile from './components/Navbar/NavbarMobile';
import Notification from "./components/Tools/Notifications";
import {
  WebDevelopment,BusinessWebsite,EcommerceWebsite,WebRevap,CRMERP,
  MobileAppDevelopment,
  GraphicDesigning,
  DigitalMarketing,
  BrandServices,
  Advertising
} from './routes/Routesmap';

const routes = [
  { path: '/', element: <Home /> },

  { path: '/services', element: <Services /> },

        /*---------WebDevelopment---------*/
  { path: '/best-web-developement-company', element: <WebDevelopment /> },
  { path: '/web-developement-company-in-vizag', element: <WebDevelopment /> },
  { path: '/best-web-developement-company-in-vizag', element: <WebDevelopment /> },

  { path: '/build-business-website', element: <BusinessWebsite /> },
  { path: '/best-website-for-business', element: <BusinessWebsite /> },
  { path: '/build-a-business-website', element: <BusinessWebsite /> },

  { path: '/build-ecommerce-website', element: <EcommerceWebsite /> },
  { path: '/ecommerce-website-india', element: <EcommerceWebsite /> },

  { path: '/customize-your-website', element: <WebRevap /> },
  { path: '/website-rebuild', element: <WebRevap /> },
  { path: '/customize-your-website', element: <WebRevap /> },

  { path: '/control-center-for-business', element: <CRMERP /> },
        /*---------WebDevelopment End---------*/

  { path: '/best-mobile-app-development-company', element: <MobileAppDevelopment /> },
  { path: '/mobile-app-development-in-vizag', element: <MobileAppDevelopment /> },
  { path: '/best-mobile-app-development-in-vizag', element: <MobileAppDevelopment /> },
  { path: '/best-graphic-designing-company', element: <GraphicDesigning /> },
  { path: '/graphic-designing-company-in-vizag', element: <GraphicDesigning /> },
  { path: '/best-graphic-designing-in-vizag', element: <GraphicDesigning /> },
  { path: '/best-poster-designing-company', element: <GraphicDesigning /> },
  { path: '/best-digital-marketing-company', element: <DigitalMarketing /> },
  { path: '/digital-marketing-company-in-vizag', element: <DigitalMarketing /> },
  { path: '/best-digital-marketing-company-in-vizag', element: <DigitalMarketing /> },
  { path: '/social-media-marketing-company', element: <DigitalMarketing /> },
  { path: '/best-brand-services-company', element: <BrandServices /> },
  { path: '/brand-services-company-in-vizag', element: <BrandServices /> },
  { path: '/best-brand-services-company-in-vizag', element: <BrandServices /> },
  { path: '/best-advertising-company', element: <Advertising /> },
  { path: '/advertising-company-in-vizag', element: <Advertising /> },
  { path: '/best-advertising-company-in-vizag', element: <Advertising /> },


  { path: '/*', element: <Error404 /> },
  { path: '/blogs', element: <Blogs /> },
  { path: '/clients', element: <Clients /> },
  { path: '/reviews', element: <Reviews /> },
  { path: '/aboutus', element: <Aboutus /> },
  { path: '/contactus', element: <Contactus /> },
  { path: '/privacypolicy', element: <PrivacyPolicy /> },
  { path: '/termsconditions', element: <TermsnConditions /> },
  { path: '/returnpolicy', element: <ReturnPolicy /> },
  { path: '/shippingdelivery', element: <ShippingandDelivery /> },
  { path: '/disclaimer', element: <Disclaimer /> },
];

export function App() {
  const location = useLocation();
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Notification />
      <Routes location={location} key={location.pathname}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

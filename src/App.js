import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, Home, Aboutus, Contactus, Services, Blogs, Clients, Reviews } from './routes/Routes';
import NavbarMobile from './components/Navbar/NavbarMobile';
import Notification from "./components/Tools/Notifications";

import {
/*Web Development */
WebDevelopment,BusinessWebsite,EcommerceWebsite,WebRevap,CRMERP,

/*Digital marketing */
 DigitalMarketing,SearchEngineOptimization,ContentMarketing,SocialMediaMarketing,EmailMarketing,
    PayPerClickAdvertising,AffiliateMarketing,AnalyticsandDataAnalysis,ConversionRateOptimization,
    MobileMarketing,VideoMarketing,LocalSEOandMarketing,EcommerceMarketing,MarketingAutomation,RemarketingRetargeting,InfluencerMarketing,

    /*Graphic Designing */
    GraphicDesigning,LogoDesign,BrandIdentityDesign,PrintDesign,WebDesign,UserInterfaceDesign,UserExperienceDesign,PackagingDesign,
    PosterandFlyerDesign,BrochureDesign,BannerDesign,IllustrationServices,InfographicDesign,SocialMediaGraphics,eBookandPrintBookCoverDesign,
    TshirtandMerchandiseDesign,SignageandBillboardDesign,BusinessCardandStationeryDesign,RenderingandVisualization,
    MotionGraphicsandAnimation,PhotoEditingandRetouching,
    
/*Advertising*/
    Advertising,DisplayAdvertising,VideoAdvertising,NativeAdvertising,ProgrammaticAdvertising,
    OutdoorAdvertising,PrintAdvertising,RadioAdvertising,TVAdvertising,IngameAdvertising,
    TheaterAdvertising,

    /*Branding*/
    BrandServices,
    BrandIdentityDesignExclusive,BrandLogoDesign,BrandGuidelines,BrandPositioning,BrandStorytelling,
    BrandNaming,VisualIdentityDesign,BrandMessaging,BrandExperienceDesign,BrandAwarenessCampaigns,
    RebrandingServices,BrandResearchandAnalysis,BrandTrackingandPerformanceEvaluation,

      /*MobileApp*/
      MobileAppDevelopment,
      MobileAppDesign, iOSAppDevelopment, AndroidAppDevelopment, CrossPlatformAppDevelopment, AppPrototyping,
       AppTestingandQualityAssurance, AppMaintenanceandSupport, AppSecurity, AppMonetizationStrategy, AppStoreOptimization, 
       EcommerceAppDevelopment
} from './routes/Routes';

const routes = [
  { path: '/', element: <Home /> },
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

        /*---------MobileAppDevelopment---------*/
  { path: '/best-mobile-app-development-company', element: <MobileAppDevelopment /> },
  { path: '/mobile-app-development-in-vizag', element: <MobileAppDevelopment /> },
  { path: '/best-mobile-app-development-in-vizag', element: <MobileAppDevelopment /> },
        /*---------WebDevelopment End---------*/

        /*---------GraphicDesigning---------*/
  { path: '/best-graphic-designing-company', element: <GraphicDesigning /> },
  { path: '/graphic-designing-company-in-vizag', element: <GraphicDesigning /> },
  { path: '/best-graphic-designing-in-vizag', element: <GraphicDesigning /> },
  { path: '/best-poster-designing-company', element: <GraphicDesigning /> },
        /*---------GraphicDesigning End---------*/

        /*---------DigitalMarketing---------*/
  { path: '/best-digital-marketing-company', element: <DigitalMarketing /> },
  { path: '/digital-marketing-company-in-vizag', element: <DigitalMarketing /> },
  { path: '/best-digital-marketing-company-in-vizag', element: <DigitalMarketing /> },
  { path: '/social-media-marketing-company', element: <DigitalMarketing /> },
        /*---------DigitalMarketing End---------*/

        /*---------BrandServices---------*/
  { path: '/best-brand-services-company', element: <BrandServices /> },
  { path: '/brand-services-company-in-vizag', element: <BrandServices /> },
  { path: '/best-brand-services-company-in-vizag', element: <BrandServices /> },
        /*---------BrandServices End---------*/

        /*---------Advertising---------*/
  { path: '/best-advertising-company', element: <Advertising /> },
  { path: '/advertising-company-in-vizag', element: <Advertising /> },
  { path: '/best-advertising-company-in-vizag', element: <Advertising /> },
        /*---------Advertising End---------*/

  
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

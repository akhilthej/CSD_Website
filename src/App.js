import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, PrivacyPolicy, TermsnConditions, Disclaimer, ShippingandDelivery, ReturnPolicy, Error404, Home, Aboutus, Contactus, Services, Blogs, Clients} from './routes/Routes';
import Notification from "./components/Tools/Notifications";

import GoogleSignIn from './components/config/GoogleSignIn'


import {
/*Web Development */
WebDevelopment,BusinessWebsite,EcommerceWebsite,WebRevap,CRMERP,

/*Digital marketing */
 DigitalMarketing,SearchEngineOptimization,ContentMarketing,SocialMediaMarketing,EmailMarketing,
    PayPerClickAdvertising,AffiliateMarketing,AnalyticsandDataAnalysis,ConversionRateOptimization,
    MobileMarketing,VideoMarketing,LocalSEOandMarketing,EcommerceMarketing,MarketingAutomation,RemarketingRetargeting,InfluencerMarketing,

    /*MultiMedia */
    MultiMedia,LogoDesign,BrandIdentityDesign,PrintDesign,WebDesign,UserInterfaceDesign,UserExperienceDesign,PackagingDesign,
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
      MobileAppDesign, IOSAppDevelopment, AndroidAppDevelopment, CrossPlatformAppDevelopment, AppPrototyping,
       AppTestingandQualityAssurance, AppMaintenanceandSupport, AppSecurity, AppMonetizationStrategy, AppStoreOptimization, 
       EcommerceAppDevelopment
} from './routes/Routes';




const routes = [
  { path: '/', element: <Home /> },
  { path: '/*', element: <Error404 /> },
  { path: '/blogs', element: <Blogs /> },
  { path: '/clients', element: <Clients /> },
  { path: '/aboutus', element: <Aboutus /> },
  { path: '/contactus', element: <Contactus /> },
  { path: '/privacypolicy', element: <PrivacyPolicy /> },
  { path: '/termsconditions', element: <TermsnConditions /> },
  { path: '/returnpolicy', element: <ReturnPolicy /> },
  { path: '/shippingdelivery', element: <ShippingandDelivery /> },
  { path: '/disclaimer', element: <Disclaimer /> },

  { path: '/services', element: <Services /> },
  { path: '/login', element: <GoogleSignIn /> },

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

  { path: '/mobile-app-design', element: <MobileAppDesign /> },
  { path: '/ios-application-development', element: <IOSAppDevelopment /> },
  { path: '/android-app-development', element: <AndroidAppDevelopment /> },
  { path: '/cross-platform-app-development', element: <CrossPlatformAppDevelopment /> },
  { path: '/app-prototyping', element: <AppPrototyping /> },
  { path: '/app-testing-and-quality-assurance', element: <AppTestingandQualityAssurance /> },
  { path: '/app-maintenance-and-support', element: <AppMaintenanceandSupport /> },
  { path: '/app-security', element: <AppSecurity /> },
  { path: '/app-monetization-strategy', element: <AppMonetizationStrategy /> },
  { path: '/app-store-optimization', element: <AppStoreOptimization /> },
  { path: '/ecommerce-app-development', element: <EcommerceAppDevelopment /> },
        /*---------MobileAppDevelopment End---------*/

        /*---------Multimedia---------*/
  { path: '/best-graphic-designing-company', element: <MultiMedia /> },
  { path: '/graphic-designing-company-in-vizag', element: <MultiMedia /> },
  { path: '/best-graphic-designing-in-vizag', element: <MultiMedia /> },
  { path: '/best-poster-designing-company', element: <MultiMedia /> },

  { path: '/logo-design', element: <LogoDesign /> },
  { path: '/logo-design-company-in-vizag', element: <LogoDesign /> },
  { path: '/brand-identity-design', element: <BrandIdentityDesign /> },
  { path: '/print-design', element: <PrintDesign /> },
  { path: '/web-design', element: <WebDesign /> },
  { path: '/user-interface-design', element: <UserInterfaceDesign /> },
  { path: '/user-experience-design', element: <UserExperienceDesign /> },
  { path: '/packaging-design', element: <PackagingDesign /> },
  { path: '/poster-and-flyer-design', element: <PosterandFlyerDesign /> },
  { path: '/brochure-design', element: <BrochureDesign /> },
  { path: '/banner-design', element: <BannerDesign /> },
  { path: '/illustration-services', element: <IllustrationServices /> },
  { path: '/infographic-design', element: <InfographicDesign /> },
  { path: '/social-media-graphics', element: <SocialMediaGraphics /> },
  { path: '/ebook-and-print-book-cover-design', element: <eBookandPrintBookCoverDesign /> },
  { path: '/t-shirt-and-merchandise-design', element: <TshirtandMerchandiseDesign /> },
  { path: '/signage-and-billboard-design', element: <SignageandBillboardDesign /> },
  { path: '/business-card-and-stationery-design', element: <BusinessCardandStationeryDesign /> },
  { path: '/rendering-and-visualization', element: <RenderingandVisualization /> },
  { path: '/motion-graphics-and-animation', element: <MotionGraphicsandAnimation /> },
  { path: '/photo-editing-and-retouching', element: <PhotoEditingandRetouching /> },
        /*---------Multimedia End---------*/

        /*---------DigitalMarketing---------*/
  { path: '/best-digital-marketing-company', element: <DigitalMarketing /> },
  { path: '/digital-marketing-company-in-vizag', element: <DigitalMarketing /> },
  { path: '/best-digital-marketing-company-in-vizag', element: <DigitalMarketing /> },
  { path: '/social-media-marketing-company', element: <DigitalMarketing /> },

  { path: '/search-engine-optimization', element: <SearchEngineOptimization /> },
  { path: '/content-marketing', element: <ContentMarketing /> },
  { path: '/social-media-marketing', element: <SocialMediaMarketing /> },
  { path: '/email-marketing', element: <EmailMarketing /> },
  { path: '/pay-per-click-advertising', element: <PayPerClickAdvertising /> },
  { path: '/affiliate-marketing', element: <AffiliateMarketing /> },
  { path: '/analytics-and-data-analysis', element: <AnalyticsandDataAnalysis /> },
  { path: '/conversion-rate-optimization', element: <ConversionRateOptimization /> },
  { path: '/mobile-marketing', element: <MobileMarketing /> },
  { path: '/video-marketing', element: <VideoMarketing /> },
  { path: '/local-seo-and-marketing', element: <LocalSEOandMarketing /> },
  { path: '/ecommerce-marketing', element: <EcommerceMarketing /> },
  { path: '/marketing-automation', element: <MarketingAutomation /> },
  { path: '/remarketing-retargeting', element: <RemarketingRetargeting /> },
  { path: '/influencer-marketing', element: <InfluencerMarketing /> },
        /*---------DigitalMarketing End---------*/

        /*---------BrandServices---------*/
  { path: '/best-brand-services-company', element: <BrandServices /> },
  { path: '/brand-services-company-in-vizag', element: <BrandServices /> },
  { path: '/best-brand-services-company-in-vizag', element: <BrandServices /> },

  { path: '/brand-identity-design-exclusive', element: <BrandIdentityDesignExclusive /> },
  { path: '/brand-logo-design', element: <BrandLogoDesign /> },
  { path: '/brand-guidelines', element: <BrandGuidelines /> },
  { path: '/brand-positioning', element: <BrandPositioning /> },
  { path: '/brand-storytelling', element: <BrandStorytelling /> },
  { path: '/brand-naming', element: <BrandNaming /> },
  { path: '/visual-identity-design', element: <VisualIdentityDesign /> },
  { path: '/brand-messaging', element: <BrandMessaging /> },
  { path: '/brand-experience-design', element: <BrandExperienceDesign /> },
  { path: '/brand-awareness-campaigns', element: <BrandAwarenessCampaigns /> },
  { path: '/rebranding-services', element: <RebrandingServices /> },
  { path: '/brand-research-and-analysis', element: <BrandResearchandAnalysis /> },
  { path: '/brand-tracking-and-performance-evaluation', element: <BrandTrackingandPerformanceEvaluation /> },
        /*---------BrandServices End---------*/

        /*---------Advertising---------*/
  { path: '/best-advertising-company', element: <Advertising /> },
  { path: '/advertising-company-in-vizag', element: <Advertising /> },
  { path: '/best-advertising-company-in-vizag', element: <Advertising /> },

  { path: '/display-advertising', element: <DisplayAdvertising /> },
  { path: '/video-advertising', element: <VideoAdvertising /> },
  { path: '/native-advertising', element: <NativeAdvertising /> },
  { path: '/programmatic-advertising', element: <ProgrammaticAdvertising /> },
  { path: '/outdoor-advertising', element: <OutdoorAdvertising /> },
  { path: '/print-advertising', element: <PrintAdvertising /> },
  { path: '/radio-advertising', element: <RadioAdvertising /> },
  { path: '/tv-advertising', element: <TVAdvertising /> },
  { path: '/ingame-advertising', element: <IngameAdvertising /> },
  { path: '/theater-advertising', element: <TheaterAdvertising /> },
        /*---------Advertising End---------*/

  
];

export function App() {
  const location = useLocation();
  window.scrollTo(0, 0);


  return (
    <>
      <Navbar />
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

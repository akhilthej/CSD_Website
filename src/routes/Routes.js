import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';

import PrivacyPolicy from '../components/PAGES/Documents/PrivacyPolicy';
import TermsnConditions from '../components/PAGES/Documents/TermsnConditions';
import ReturnPolicy from '../components/PAGES/Documents/ReturnsPolicy';
import ShippingandDelivery from '../components/PAGES/Documents/ShippingandDelivery';
import Disclaimer from '../components/PAGES/Documents/Disclaimer';

import Error404 from '../components/Tools/Error404';
import Home from './HOME';
import Blogs from './BLOGS';
import Clients from './Clients';
import Reviews from './Reviews';
import Aboutus from './Aboutus';
import Contactus from './CONTACTUS';


import Services from './Services/SERVICES';

/*Web Development */
import {WebDevelopment,BusinessWebsite,EcommerceWebsite,WebRevap,CRMERP} from './Services/WebDevelopment/routes_web'


/*Digital marketing */
import {DigitalMarketing,SearchEngineOptimization,ContentMarketing,SocialMediaMarketing,EmailMarketing,
    PayPerClickAdvertising,AffiliateMarketing,AnalyticsandDataAnalysis,ConversionRateOptimization,
    MobileMarketing,VideoMarketing,LocalSEOandMarketing,EcommerceMarketing,MarketingAutomation,RemarketingRetargeting,InfluencerMarketing,} from './Services/DigitalMarketing/routes_digitalmarketing';


/*Mobile App Development */
import {MobileAppDevelopment,
    MobileAppDesign, iOSAppDevelopment, AndroidAppDevelopment, CrossPlatformAppDevelopment, AppPrototyping,
     AppTestingandQualityAssurance, AppMaintenanceandSupport, AppSecurity, AppMonetizationStrategy, AppStoreOptimization, 
     EcommerceAppDevelopment} from './Services/MobileAppDevelopment/routes_mobileapp';


/*Graphic Design */
import {GraphicDesigning,LogoDesign,BrandIdentityDesign,PrintDesign,WebDesign,UserInterfaceDesign,UserExperienceDesign,PackagingDesign,
    PosterandFlyerDesign,BrochureDesign,BannerDesign,IllustrationServices,InfographicDesign,SocialMediaGraphics,eBookandPrintBookCoverDesign,
    TshirtandMerchandiseDesign,SignageandBillboardDesign,BusinessCardandStationeryDesign,RenderingandVisualization,
    MotionGraphicsandAnimation,PhotoEditingandRetouching,} from './Services/GraphicDesigning/routes_graphic';

/*Brand Services*/
import {BrandServices,
    BrandIdentityDesignExclusive,BrandLogoDesign,BrandGuidelines,BrandPositioning,BrandStorytelling,
    BrandNaming,VisualIdentityDesign,BrandMessaging,BrandExperienceDesign,BrandAwarenessCampaigns,
    RebrandingServices,BrandResearchandAnalysis,BrandTrackingandPerformanceEvaluation} from './Services/BrandServices/routes_brand';

/*Advertising */
import {Advertising,DisplayAdvertising,VideoAdvertising,NativeAdvertising,ProgrammaticAdvertising,
    OutdoorAdvertising,PrintAdvertising,RadioAdvertising,TVAdvertising,IngameAdvertising,
    TheaterAdvertising} from './Services/Advertising/routes_ads';





export {
/*Fixed */

Navbar,Footer,
PrivacyPolicy,TermsnConditions,Disclaimer,ShippingandDelivery,
Error404,Home,

Blogs,Clients,Reviews,Aboutus,Contactus,
ReturnPolicy,

/*Services */
Services,

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
};
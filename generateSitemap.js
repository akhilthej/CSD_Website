const fs = require("fs");
const xmlbuilder = require("xmlbuilder");

/*run this code to generate sitemap: node generateSitemap.js */
const websiteURL = "https://cyberspacedigital.in";

const urls = [
  "/",
  "/aboutus",
  "/contactus",
  "/privacypolicy",
  "/termsconditions",
  "/returnpolicy",
  "/shippingdelivery",
  "/disclaimer",

  "/services",

  /*---------WebDevelopment---------*/
  "/services/best-web-developement-company",
  "/services/web-developement-company-in-vizag",

  "/services/best-web-developement-company/build-business-website",

  "/services/best-web-developement-company/build-business-website/build-ecommerce-website",

  "/services/best-web-developement-company/website-rebuild",

  "/services/best-web-developement-company/control-center-for-business",
  /*---------WebDevelopment---------*/

  /*---------MobileAppDevelopment---------*/
  "/services/best-mobile-app-development-company",
  "/services/mobile-app-development-in-vizag",

  "/mobile-app-design",
  "/ios-application-development",
  "/android-app-development",
  "/cross-platform-app-development",
  "/app-prototyping",
  "/app-testing-and-quality-assurance",
  "/app-maintenance-and-support",
  "/app-security",
  "/app-monetization-strategy",
  "/app-store-optimization",
  "/ecommerce-app-development",

  /*---------MobileAppDevelopment---------*/

  "/best-graphic-designing-company",
  "/graphic-designing-company-in-vizag",
  "/best-graphic-designing-in-vizag",
  "/best-poster-designing-company",
  "/logo-design",
  "/logo-design-company-in-vizag",
  "/brand-identity-design",
  "/print-design",
  "/web-design",
  "/user-interface-design",
  "/user-experience-design",
  "/packaging-design",
  "/poster-and-flyer-design",
  "/brochure-design",
  "/banner-design",
  "/illustration-services",
  "/infographic-design",
  "/social-media-graphics",
  "/ebook-and-print-book-cover-design",
  "/t-shirt-and-merchandise-design",
  "/signage-and-billboard-design",
  "/business-card-and-stationery-design",
  "/rendering-and-visualization",
  "/motion-graphics-and-animation",
  "/photo-editing-and-retouching",
  "/best-digital-marketing-company",
  "/digital-marketing-company-in-vizag",
  "/best-digital-marketing-company-in-vizag",
  "/social-media-marketing-company",
  "/search-engine-optimization",
  "/content-marketing",
  "/social-media-marketing",
  "/email-marketing",
  "/pay-per-click-advertising",
  "/affiliate-marketing",
  "/analytics-and-data-analysis",
  "/conversion-rate-optimization",
  "/mobile-marketing",
  "/video-marketing",
  "/local-seo-and-marketing",
  "/ecommerce-marketing",
  "/marketing-automation",
  "/remarketing-retargeting",
  "/influencer-marketing",
  "/best-brand-services-company",
  "/brand-services-company-in-vizag",
  "/best-brand-services-company-in-vizag",
  "/brand-identity-design-exclusive",
  "/brand-logo-design",
  "/brand-guidelines",
  "/brand-positioning",
  "/brand-storytelling",
  "/brand-naming",
  "/visual-identity-design",
  "/brand-messaging",
  "/brand-experience-design",
  "/brand-awareness-campaigns",
  "/rebranding-services",
  "/brand-research-and-analysis",
  "/brand-tracking-and-performance-evaluation",
  "/best-advertising-company",
  "/advertising-company-in-vizag",
  "/best-advertising-company-in-vizag",
  "/display-advertising",
  "/video-advertising",
  "/native-advertising",
  "/programmatic-advertising",
  "/outdoor-advertising",
  "/print-advertising",
  "/radio-advertising",
  "/tv-advertising",
  "/ingame-advertising",
  "/theater-advertising",

  " /blog",
  " /blog/unleashingthepower-of-web-development-for-business-growth",
];

const root = xmlbuilder.create("urlset", { version: "1.0", encoding: "UTF-8" });
root.att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

urls.forEach((url) => {
  root.ele("url").ele("loc", {}, websiteURL + url);
});

const sitemapXML = root.end({ pretty: true });

fs.writeFileSync("sitemap.xml", sitemapXML, "utf8");

console.log("Sitemap generated successfully.");

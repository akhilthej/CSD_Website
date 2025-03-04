import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {DigitalmarketingIcon,Advertisingicon,Graphicdesignicon,Webdevelopmenticon,Mobileappicon,Brandingicon} from '../../assets2/icon_data'
import {
  faBuilding,
  faSearch,
  faPencil,
  faNetworkWired,
  faPhone,
  faEnvelope,faBlog,faInfoCircle,
  faAd,
  faHandHoldingUsd,
  faChartLine,
  faBullhorn,
  faMobile,
  faVideo,
  faMapMarkerAlt,
  faShoppingCart,
  faCog,
  faRetweet,
  faUserCheck,
  faCartShopping,
  faGlobe,
  faColumns,
  faChartBar,
  faPalette,
  faPrint,
  faLaptop,
  faUser,
  faBox,
  faFileAlt,
  faFlag,
  faImage,
  faBook,
  faTshirt,
  faMapSigns,
  faIdCard,
  faShapes,
  faFilm,
  faCamera,
  faFileSignature,
  faMapMarker,
  faBookOpen,
  faSignature,
  faCommentAlt,
  faHandHoldingHeart,
  faSyncAlt,
  faChartPie,
  faDesktop,
  faCogs,
  faTree,
  faMicrophone,
  faTv,
  faGamepad,
  faDraftingCompass,
  faCheckCircle,
  faWrench,
  faShieldAlt,
  faDollarSign,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

import NavbarLogo from "./csdv2Logonavbar.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpen]);

  const currentYear = new Date().getFullYear();

  const NavImages = {
    link1:Webdevelopmenticon,
    link2:DigitalmarketingIcon,
    link3:Brandingicon,
    link4:Advertisingicon,
    link5: Mobileappicon,
  };

  const webDevelopmentLinks = [
    {
      path: "/build-business-website",
      title: "Business Websites",
      description:
        "Our business website solutions are designed to drive growth, enhance visibility, and boost profitability in the digital landscape.",
      icon: faBuilding,
    },
    {
      path: "/build-ecommerce-website",
      title: "E-commerce",
      description:
        "Elevate your online retail with our bespoke e-commerce solutions. Boost sales, engage customers, and thrive online.",
      icon: faCartShopping,
    },
    {
      path: "/customize-your-website",
      title: "Web Revamp",
      description:
        "Transform and modernize your existing website with our web revamp services. Stay ahead and impress your audience.",
      icon: faGlobe,
    },
    {
      path: "/control-center-for-business",
      title: "CRM/ERP Panels",
      description:
        "Enhance business operations with our CRM/ERM panels. Streamline processes, manage data, and boost productivity effectively.",
      icon: faColumns,
    },
  ];

  const digitalMarketingLinks = [
    {
      path: "/search-engine-optimization",
      title: "Search Engine Optimization",
      description: "Optimize your website for search engines.",
      icon: faSearch,
    },
    {
      path: "/content-marketing",
      title: "Content Marketing",
      description: "Create and distribute valuable content.",
      icon: faPencil,
    },
    {
      path: "/social-media-marketing",
      title: "Social Media Marketing",
      description: "Promote your brand on social platforms.",
      icon: faNetworkWired,
    },
    {
      path: "/email-marketing",
      title: "Email Marketing",
      description: "Engage your audience with email campaigns.",
      icon: faEnvelope,
    },
    {
      path: "/pay-per-click-advertising",
      title: "Pay-Per-Click Advertising",
      description: "Drive traffic with targeted ads.",
      icon: faAd,
    },
    {
      path: "/affiliate-marketing",
      title: "Affiliate Marketing",
      description: "Boost sales through affiliate programs.",
      icon: faHandHoldingUsd,
    },
    {
      path: "/analytics-and-data-analysis",
      title: "Analytics and Data Analysis",
      description: "Gain insights from data for better strategies.",
      icon: faChartLine,
    },
    {
      path: "/conversion-rate-optimization",
      title: "Conversion Rate Optimization",
      description: "Improve website conversion rates.",
      icon: faBullhorn,
    },
    {
      path: "/mobile-marketing",
      title: "Mobile Marketing",
      description: "Target users on mobile devices.",
      icon: faMobile,
    },
    {
      path: "/video-marketing",
      title: "Video Marketing",
      description: "Use videos for effective marketing.",
      icon: faVideo,
    },
    {
      path: "/local-seo-and-marketing",
      title: "Local SEO and Marketing",
      description: "Enhance local online visibility.",
      icon: faMapMarkerAlt,
    },
    {
      path: "/ecommerce-marketing",
      title: "Ecommerce Marketing",
      description: "Promote products in online stores.",
      icon: faShoppingCart,
    },
    {
      path: "/marketing-automation",
      title: "Marketing Automation",
      description: "Automate marketing tasks for efficiency.",
      icon: faCog,
    },
    {
      path: "/remarketing-retargeting",
      title: "Remarketing and Retargeting",
      description: "Re-engage potential customers.",
      icon: faRetweet,
    },
    {
      path: "/influencer-marketing",
      title: "Influencer Marketing",
      description: "Collaborate with influencers for promotion.",
      icon: faUserCheck,
    },
  ];

  const multimediaLinks = [
    {
      path: "/logo-design",
      title: "Logo Design",
      description: "Create a unique logo for your brand.",
      icon: faGlobe,
    },
    {
      path: "/brand-identity-design",
      title: "Brand Identity Design",
      description: "Build a strong brand identity.",
      icon: faGlobe,
    },
    {
      path: "/print-design",
      title: "Print Design",
      description: "Design materials for print.",
      icon: faPrint,
    },
    {
      path: "/web-design",
      title: "Web Design",
      description: "Create stunning websites.",
      icon: faLaptop,
    },
    {
      path: "/user-interface-design",
      title: "User Interface Design",
      description: "Design user-friendly interfaces.",
      icon: faUser,
    },
    {
      path: "/user-experience-design",
      title: "User Experience Design",
      description: "Enhance user satisfaction.",
      icon: faUser,
    },
    {
      path: "/packaging-design",
      title: "Packaging Design",
      description: "Create attractive packaging.",
      icon: faBox,
    },
    {
      path: "/poster-and-flyer-design",
      title: "Poster and Flyer Design",
      description: "Design promotional materials.",
      icon: faFileAlt,
    },
    {
      path: "/brochure-design",
      title: "Brochure Design",
      description: "Design informative brochures.",
      icon: faFileAlt,
    },
    {
      path: "/banner-design",
      title: "Banner Design",
      description: "Design eye-catching banners.",
      icon: faFlag,
    },
    {
      path: "/illustration-services",
      title: "Illustration Services",
      description: "Get custom illustrations.",
      icon: faPalette,
    },
    {
      path: "/infographic-design",
      title: "Infographic Design",
      description: "Create informative infographics.",
      icon: faChartBar,
    },
    {
      path: "/social-media-graphics",
      title: "Social Media Graphics",
      description: "Design graphics for social media.",
      icon: faImage,
    },
    {
      path: "/ebook-and-print-book-cover-design",
      title: "eBook and Print Book Cover Design",
      description: "Design book covers.",
      icon: faBook,
    },
    {
      path: "/t-shirt-and-merchandise-design",
      title: "T-shirt and Merchandise Design",
      description: "Design for apparel and merchandise.",
      icon: faTshirt,
    },
    {
      path: "/signage-and-billboard-design",
      title: "Signage and Billboard Design",
      description: "Create signage and billboards.",
      icon: faMapSigns,
    },
    {
      path: "/business-card-and-stationery-design",
      title: "Business Card and Stationery Design",
      description: "Design business cards and stationery.",
      icon: faIdCard,
    },
    {
      path: "/rendering-and-visualization",
      title: "Rendering and Visualization",
      description: "Create 3D renderings and visualizations.",
      icon: faShapes,
    },
    {
      path: "/motion-graphics-and-animation",
      title: "Motion Graphics and Animation",
      description: "Design motion graphics and animations.",
      icon: faFilm,
    },
    {
      path: "/photo-editing-and-retouching",
      title: "Photo Editing and Retouching",
      description: "Edit and retouch photos.",
      icon: faCamera,
    },
  ];

  const brandingLinks = [
    {
      path: "/brand-identity-design-exclusive",
      title: "Brand Identity Design Exclusive",
      description: "Exclusive brand identity design services.",
      icon: faGlobe,
    },
    {
      path: "/brand-logo-design",
      title: "Brand Logo Design",
      description: "Design a unique logo for your brand.",
      icon: faGlobe,
    },
    {
      path: "/brand-guidelines",
      title: "Brand Guidelines",
      description: "Create brand guidelines for consistency.",
      icon: faFileSignature,
    },
    {
      path: "/brand-positioning",
      title: "Brand Positioning",
      description: "Strategically position your brand.",
      icon: faMapMarker,
    },
    {
      path: "/brand-storytelling",
      title: "Brand Storytelling",
      description: "Craft compelling brand stories.",
      icon: faBookOpen,
    },
    {
      path: "/brand-naming",
      title: "Brand Naming",
      description: "Find the perfect name for your brand.",
      icon: faSignature,
    },
    {
      path: "/visual-identity-design",
      title: "Visual Identity Design",
      description: "Design a strong visual identity.",
      icon: faPalette,
    },
    {
      path: "/brand-messaging",
      title: "Brand Messaging",
      description: "Create effective brand messaging.",
      icon: faCommentAlt,
    },
    {
      path: "/brand-experience-design",
      title: "Brand Experience Design",
      description: "Enhance the brand experience.",
      icon: faHandHoldingHeart,
    },
    {
      path: "/brand-awareness-campaigns",
      title: "Brand Awareness Campaigns",
      description: "Run brand awareness campaigns.",
      icon: faBullhorn,
    },
    {
      path: "/rebranding-services",
      title: "Rebranding Services",
      description: "Rebrand your business effectively.",
      icon: faSyncAlt,
    },
    {
      path: "/brand-research-and-analysis",
      title: "Brand Research and Analysis",
      description: "Conduct brand research and analysis.",
      icon: faChartPie,
    },
    {
      path: "/brand-tracking-and-performance-evaluation",
      title: "Brand Tracking and Performance Evaluation",
      description: "Track and evaluate brand performance.",
      icon: faChartLine,
    },
  ];

  const advertisingLinks = [
    {
      path: "/display-advertising",
      title: "Display Advertising",
      description: "Effective display advertising solutions.",
      icon: faDesktop,
    },
    {
      path: "/video-advertising",
      title: "Video Advertising",
      description: "Engage with video advertising campaigns.",
      icon: faVideo,
    },
    {
      path: "/native-advertising",
      title: "Native Advertising",
      description: "Discover native advertising strategies.",
      icon: faGlobe,
    },
    {
      path: "/programmatic-advertising",
      title: "Programmatic Advertising",
      description: "Efficient programmatic advertising.",
      icon: faCogs,
    },
    {
      path: "/outdoor-advertising",
      title: "Outdoor Advertising",
      description: "Outdoor advertising solutions.",
      icon: faTree,
    },
    {
      path: "/print-advertising",
      title: "Print Advertising",
      description: "Effective print advertising services.",
      icon: faFileAlt,
    },
    {
      path: "/radio-advertising",
      title: "Radio Advertising",
      description: "Reach audiences through radio ads.",
      icon: faMicrophone,
    },
    {
      path: "/tv-advertising",
      title: "TV Advertising",
      description: "Impactful TV advertising campaigns.",
      icon: faTv,
    },
    {
      path: "/ingame-advertising",
      title: "In-Game Advertising",
      description: "Advertise within video games.",
      icon: faGamepad,
    },
    {
      path: "/theater-advertising",
      title: "Theater Advertising",
      description: "Promote in theaters and cinemas.",
      icon: faFilm,
    },
  ];

  const mobileappLinks = [
    {
      path: "/mobile-app-design",
      title: "Mobile App Design",
      description: "Creative and user-friendly app design.",
      icon: faPalette,
    },
    {
      path: "/ios-application-development",
      title: "iOS App Development",
      description: "Developing apps for iOS devices.",
      icon: faGlobe,
    },
    {
      path: "/android-app-development",
      title: "Android App Development",
      description: "Building apps for Android platforms.",
      icon: faGlobe,
    },
    {
      path: "/cross-platform-app-development",
      title: "Cross-Platform App Development",
      description: "Create apps compatible with multiple platforms.",
      icon: faGlobe,
    },
    {
      path: "/app-prototyping",
      title: "App Prototyping",
      description: "Prototyping app concepts for validation.",
      icon: faDraftingCompass,
    },
    {
      path: "/app-testing-and-quality-assurance",
      title: "App Testing and Quality Assurance",
      description: "Ensure app quality with rigorous testing.",
      icon: faCheckCircle,
    },
    {
      path: "/app-maintenance-and-support",
      title: "App Maintenance and Support",
      description: "Ongoing maintenance and support services.",
      icon: faWrench,
    },
    {
      path: "/app-security",
      title: "App Security",
      description: "Enhance app security and data protection.",
      icon: faShieldAlt,
    },
    {
      path: "/app-monetization-strategy",
      title: "App Monetization Strategy",
      description: "Strategies for app revenue generation.",
      icon: faDollarSign,
    },
    {
      path: "/app-store-optimization",
      title: "App Store Optimization",
      description: "Optimize apps for better visibility in stores.",
      icon: faSearch,
    },
    {
      path: "/ecommerce-app-development",
      title: "E-commerce App Development",
      description: "Developing apps for e-commerce businesses.",
      icon: faShoppingBag,
    },
  ];

  return (
    <section class="sticky top-0 z-50 bg-white/90 drop-shadow-lg  ">
      <div className="flex px-2 gap-2 justify-between bg-black text-white">
        <div className="flex items-center text-[12px] ">
          <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
          mail@cyberspacedigital.in
        </div>
        <div className="flex items-center text-[12px]">
          <FontAwesomeIcon icon={faPhone} className="mr-1" />
          +91-8143407758
        </div>
      </div>

      <div className=" sm:px-2 w-full h-17 flex justify-between items-center text-black ">
        <Link to="/">
          <img
            class="pl-2 h-auto w-44 lg:w-52"
            src={NavbarLogo}
            alt="csd_logo"
            width="52"
            height="auto"
          />
        </Link>
        <div class=" justify-end ">
          <ul className="flex items-center">
            {/* Web Development */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-sm text-black hover:bg-yellow-500 focus:outline-none">
                  <Link to="/services/best-web-developement-company">
                    Web Development
                  </Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 mt-0.5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right fixed right-0 mt-4 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 focus:outline-none z-50">
                  <div className="flex">
                    <div className="w-1/3 p-4">
                      {webDevelopmentLinks.slice(0, 2).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/3 p-4">
                      {webDevelopmentLinks.slice(2, 4).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/3 p-4">
                      {/* Place your image and additional content here */}
                      <img
                        className="w-[30rem] h-[10rem] object-contain"
                        src={NavImages.link1}
                        alt=""
                      />
                      <Link to="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-xs">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-xs text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Digital Marketing */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-sm text-black hover:bg-yellow-500 focus:outline-none">
                  <Link to="/services/best-digital-marketing-company-in-vizag">
                    Digital Marketing
                  </Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 mt-0.5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right fixed right-0 mt-4 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 focus:outline-none z-50">
                  <div className="flex">
                    {/* Create 4 columns */}
                    <div className="Column w-1/4 p-4">
                      {digitalMarketingLinks.slice(0, 5).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  {/* Replace with your respective icons */}
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="Column w-1/4 p-4">
                      {digitalMarketingLinks.slice(5, 10).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="Column w-1/4 p-4">
                      {digitalMarketingLinks.slice(10, 15).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="Column w-1/4 p-4">
                      {/* Place your image and additional content here */}
                      <img
                        className="w-[30rem] h-[15rem] object-contain"
                        src={NavImages.link2}
                        alt=""
                      />
                      <Link to="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-xs">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-xs text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                  {/* Add the remaining columns as needed */}
                </Menu.Items>
              </Transition>
            </Menu>

            {/*Multimedia */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-sm text-black hover:bg-yellow-500 focus:outline-none">
                  <Link to="/services/best-graphic-designing-company">
                    Multimedia
                  </Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 mt-0.5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right fixed right-0 mt-4 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 focus:outline-none z-50">
                  <div className="flex">
                    <div className="w-1/4 p-4">
                      {multimediaLinks.slice(0, 5).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {multimediaLinks.slice(5, 10).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {multimediaLinks.slice(10, 15).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {multimediaLinks.slice(15, 20).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* Branding*/}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-sm text-black hover:bg-yellow-500 focus:outline-none">
                  <Link to="/services/best-brand-services-company">
                    Branding
                  </Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 mt-0.5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right fixed right-0 mt-4 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 focus:outline-none z-50">
                  <div className="flex">
                    {/* Create 4 columns */}
                    <div className="Column w-1/4 p-4">
                      {brandingLinks.slice(0, 5).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  {/* Replace with your respective icons */}
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="Column w-1/4 p-4">
                      {brandingLinks.slice(5, 10).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="Column w-1/4 p-4">
                      {brandingLinks.slice(10, 15).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="Column w-1/4 p-4">
                      {/* Place your image and additional content here */}
                      <img
                        className="w-[30rem] h-[15rem] object-contain"
                        src={NavImages.link3}
                        alt=""
                      />
                      <Link to="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-xs">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-xs text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                  {/* Add the remaining columns as needed */}
                </Menu.Items>
              </Transition>
            </Menu>

            {/*Advertising */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-sm text-black hover:bg-yellow-500 focus:outline-none">
                  <Link to="/services/best-advertising-company">
                    Advertising
                  </Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 mt-0.5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right fixed right-0 mt-4 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 focus:outline-none z-50">
                  <div className="flex">
                    <div className="w-1/4 p-4">
                      {advertisingLinks.slice(0, 5).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {advertisingLinks.slice(5, 10).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {advertisingLinks.slice(10, 15).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {/* Place your image and additional content here */}
                      <img
                        className="w-[30rem] h-[15rem] object-contain"
                        src={NavImages.link4}
                        alt=""
                      />
                      <Link to="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-xs">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-xs text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/*Mobileapp */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md px-4 py-2 text-sm text-black hover:bg-yellow-500 focus:outline-none">
                  <Link to="/services/best-mobile-app-development-company">
                    Mobileapp
                  </Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 mt-0.5 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right fixed right-0 mt-4 w-screen rounded-md shadow-lg bg-gray-300 divide-y divide-gray-400 focus:outline-none z-50">
                  <div className="flex">
                    <div className="w-1/4 p-4">
                      {mobileappLinks.slice(0, 5).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {mobileappLinks.slice(5, 10).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {mobileappLinks.slice(10, 15).map((link) => (
                        <Menu.Item key={link.path}>
                          {({ active }) => (
                            <Link to={link.path}>
                              <a
                                className={classNames(
                                  active
                                    ? "bg-yellow-500 text-white"
                                    : "text-black",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                <div className="Column1 flex items-center">
                                  <FontAwesomeIcon
                                    className="p-2 fa-2xl"
                                    icon={link.icon}
                                  />
                                  <div>
                                    {link.title}
                                    <p className="text-xs text-gray-700">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    <div className="w-1/4 p-4">
                      {/* Place your image and additional content here */}
                      <img
                        className="w-[30rem] h-[15rem] object-contain"
                        src={NavImages.link5}
                        alt=""
                      />
                      <Link to="/services">
                        <h2 className="text-blue-600 hover:text-blue-900 cursor-pointer pt-1 text-xs">
                          Services ➤
                        </h2>
                      </Link>
                      <p className="text-xs text-gray-700">
                        Know all the services we provide.
                      </p>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            {/*handburger menu */}
            <li className="p-4 hidden lg:block">
              <Menu as="div" className="relative inline-block text-left ">
                <div>
                  <Menu.Button className=" text-3xl">☰</Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-4 w-48 h-auto  sm:rounded-md  shadow-lg bg-gray-300  ring-black ring-opacity-5 divide-y divide-gray-400 z-50">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/blog">
                          <a
                            className={classNames(
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Blogs
                          </a>
                        </Link>
                      )}
                    </Menu.Item>

                    <div />
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/aboutus">
                          <a
                            className={classNames(
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            About us
                          </a>
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/contactus">
                          <a
                            className={classNames(
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Contact
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>

           {/*mobile menu */}
<li className="p-4 lg:hidden z-50">
  <Menu as="div" className="relative inline-block text-left ">
    <div>
      <Menu.Button className="text-3xl">☰</Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="origin-top-right absolute right-0 mt-4 w-48 h-auto sm:rounded-md shadow-lg bg-gray-300 ring-black ring-opacity-5 divide-y divide-gray-400 z-50">
        <Menu.Item>
          {({ active }) => (
            <Link to="/services">
              <a
                className={classNames(
                  active ? "bg-yellow-500 text-white" : "text-black",
                  "block px-4 py-2 text-sm flex items-center"
                )}
              >
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                Services
              </a>
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link to="/services/best-web-developement-company">
              <a
                className={classNames(
                  active ? "bg-yellow-500 text-white" : "text-black",
                  "block px-4 py-2 text-sm flex items-center"
                )}
              >
                <FontAwesomeIcon icon={faLaptop} className="mr-2" />
                Web Development
              </a>
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link to="/services/best-mobile-app-development-company">
              <a
                className={classNames(
                  active ? "bg-yellow-500 text-white" : "text-black",
                  "block px-4 py-2 text-sm flex items-center"
                )}
              >
                <FontAwesomeIcon icon={faMobile} className="mr-2" />
                Mobile App Development
              </a>
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link to="/services/best-graphic-designing-company">
              <a
                className={classNames(
                  active ? "bg-yellow-500 text-white" : "text-black",
                  "block px-4 py-2 text-sm flex items-center"
                )}
              >
                <FontAwesomeIcon icon={faPalette} className="mr-2" />
                MultiMedia
              </a>
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link to="/services/best-digital-marketing-company-in-vizag">
              <a
                className={classNames(
                  active ? "bg-yellow-500 text-white" : "text-black",
                  "block px-4 py-2 text-sm flex items-center"
                )}
              >
                <FontAwesomeIcon icon={faBullhorn} className="mr-2" />
                Digital Marketing
              </a>
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link to="/services/best-brand-services-company">
              <a
                className={classNames(
                  active ? "bg-yellow-500 text-white" : "text-black",
                  "block px-4 py-2 text-sm flex items-center"
                )}
              >
                <FontAwesomeIcon icon={faHandHoldingUsd} className="mr-2" />
                Branding
              </a>
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link to="/services/best-advertising-company">
              <a
                className={classNames(
                  active ? "bg-yellow-500 text-white" : "text-black",
                  "block px-4 py-2 text-sm flex items-center"
                )}
              >
                <FontAwesomeIcon icon={faAd} className="mr-2" />
                Advertising
              </a>
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link to="/blog">
              <a
                className={classNames(
                  active ? "bg-yellow-500 text-white" : "text-black",
                  "block px-4 py-2 text-sm flex items-center"
                )}
              >
                <FontAwesomeIcon icon={faBlog} className="mr-2" />
                Blogs
              </a>
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link to="/aboutus">
              <a
                className={classNames(
                  active ? "bg-yellow-500 text-white" : "text-black",
                  "block px-4 py-2 text-sm flex items-center"
                )}
              >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                About us
              </a>
            </Link>
          )}
        </Menu.Item>

        <Menu.Item>
          {({ active }) => (
            <Link to="/contactus">
              <a
                className={classNames(
                  active ? "bg-yellow-500 text-white" : "text-black",
                  "block px-4 py-2 text-sm flex items-center"
                )}
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Contact
              </a>
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

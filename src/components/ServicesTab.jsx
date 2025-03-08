import React, { useState } from "react";

import {
  DigitalMarketingImage,
  AdvertisingImage,
  GraphicDesignImage,
  BrandingImage,
  MobileAppDevImage,
  WebDevelopmentImage,

  GraphicDesignBG,
} from "../assets2/image_data";

import {
  DigitalmarketingIcon,
  Advertisingicon,
  Graphicdesignicon,
  Webdevelopmenticon,
  Mobileappicon,
  Brandingicon,
} from "../assets2/icon_data";

const icons = {
  "Digital Marketing": DigitalmarketingIcon,
  "Web Development": Webdevelopmenticon,
  "Mobile App Development": Mobileappicon,
  Branding: Brandingicon,
  "Graphic Design": Graphicdesignicon,
  Advertising: Advertisingicon,
};

const backgroundImages = {
  "Digital Marketing": DigitalmarketingIcon,
  "Web Development": WebDevelopmentImage, // Use the actual image import
  "Mobile App Development": MobileAppDevImage, // Use the actual image import
  Branding: BrandingImage, // Use the actual image import
  "Graphic Design": GraphicDesignBG, // Use the actual image import
  Advertising: AdvertisingImage, // Use the actual image import
};

const ServicesTab = () => {
  const [selected, setSelected] = useState("Digital Marketing");

  const handleButtonClick = (category) => {
    setSelected(category);
  };

  const images = {
    "Digital Marketing": DigitalMarketingImage,
    "Web Development": WebDevelopmentImage,
    "Mobile App Development": MobileAppDevImage,
    Branding: BrandingImage,
    "Graphic Design": GraphicDesignImage,
    Advertising: AdvertisingImage,
  };

  const descriptions = {
    "Digital Marketing":
      "Digital marketing involves promoting products or services through digital channels.",
    "Web Development":
      "Web development is the work involved in developing a website for the Internet.",
    "Mobile App Development":
      "Mobile app development is the process of creating software applications for mobile devices.",
    Branding:
      "Branding is the process of creating a unique name and image for a product in the consumer's mind.",
    "Graphic Design":
      "Graphic design is the art of visual communication that combines images and text.",
    Advertising:
      "Advertising is the activity of producing advertisements for commercial products or services.",
  };

  return (
    <div
      className="flex flex-col md:flex-row my-10 w-full"
    >
      {/* Image Section */}
      <div className="flex-1" style={{ flex: "0 0 40%" }}>
        <div className="flex justify-center items-center h-full">
          <img
            src={images[selected]}
            alt={selected}
            className="sm:w-[520px] w-[300px] object-contain z-10"
          />
        </div>
      </div>

      {/* Title and Description Section */}
      <div className="flex-1" style={{ flex: "0 0 40%" }}>
        <div className="flex flex-col justify-center items-center text-center p-4 md:p-6 lg:p-12 relative h-full">
          <div className="text-center p-2">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2">
              {selected}
            </h1>
            <p className="text-sm md:text-base lg:text-lg max-w-md">
              {descriptions[selected]}
            </p>
          </div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex-1" style={{ flex: "0 0 20%" }}>
        <div className="flex flex-row md:flex-col justify-center items-center p-2 md:p-4 lg:p-8 h-full">
          <div className="flex flex-row md:flex-col justify-center items-center gap-2 md:gap-4 w-full max-w-xs md:max-w-md">
            {Object.keys(images).map((category) => (
              <button
                key={category}
                onClick={() => handleButtonClick(category)}
                className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
                  selected === category ? "bg-gray-200 shadow-md" : "bg-white"
                } hover:bg-gray-100`}
              >
                <img
                  src={icons[category]}
                  alt={category}
                  className="w-10 md:w-12 lg:w-16 h-auto mb-1"
                />
                <span className="text-xs md :text-sm font-medium text-center">
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTab;
import React, { useState } from "react";
import {
  HeroCoverBG,
  Advertising,
  Branding,
  DigitalMarketing,
  GraphicDesign,
  MobileAppDevelopment,
  WebDevelopment,
} from "../assets/data/Imagedata";

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

const ServicesTab = () => {
  const [selected, setSelected] = useState("Digital Marketing");

  const handleButtonClick = (category) => {
    setSelected(category);
  };

  const images = {
    "Digital Marketing": DigitalMarketing,
    "Web Development": WebDevelopment,
    "Mobile App Development": MobileAppDevelopment,
    Branding: Branding,
    "Graphic Design": GraphicDesign,
    Advertising: Advertising,
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
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      <div
        className="flex-1 flex justify-center items-center relative min-h-[50vh]"
      >
        <img
          src={images[selected]}
          alt={selected}
          className="w-72 object-contain z-10"
        />
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center text-center p-6 md:p-12">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${HeroCoverBG})`,
      opacity: 0.3,
      zIndex: -1, // Ensure the background is behind the content
    }}
  ></div>
  
  <h1 className="text-xl md:text-3xl font-bold mb-3 relative z-10">{selected}</h1>
  <p className="text-sm md:text-lg max-w-md relative z-10">{descriptions[selected]}</p>
</div>

      <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-8">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 w-full max-w-xs md:max-w-md">
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
                className="w-12 md:w-16 h-auto mb-2"
              />
              <span className="text-xs md:text-sm font-medium text-center">
                {category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesTab;

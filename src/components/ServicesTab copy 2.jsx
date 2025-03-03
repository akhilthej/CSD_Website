import React, { useState } from 'react';
import {
  HeroCoverBG,
  Advertising,
  Branding,
  DigitalMarketing,
  GraphicDesign,
  MobileAppDevelopment,
  WebDevelopment,
} from "../assets/data/Imagedata";

import {DigitalMarketingIcon} from '../assets2/data'

// Placeholder icons (replace with actual image paths)
const icons = {
  'Digital Marketing': DigitalMarketingIcon,
  'Web Development': WebDevelopment,
  'Mobile App Development': MobileAppDevelopment,
  'Branding': Branding,
  'Graphic Design': GraphicDesign,
  'Advertising': Advertising,
};

const App = () => {
  const [selected, setSelected] = useState('Digital Marketing');

  const handleButtonClick = (category) => {
    setSelected(category);
  };

  const images = {
    'Digital Marketing': DigitalMarketing,
    'Web Development': WebDevelopment,
    'Mobile App Development': MobileAppDevelopment,
    'Branding': Branding,
    'Graphic Design': GraphicDesign,
    'Advertising': Advertising,
  };

  const descriptions = {
    'Digital Marketing': 'Digital marketing involves promoting products or services through digital channels.',
    'Web Development': 'Web development is the work involved in developing a website for the Internet.',
    'Mobile App Development': 'Mobile app development is the process of creating software applications for mobile devices.',
    'Branding': 'Branding is the process of creating a unique name and image for a product in the consumer\'s mind.',
    'Graphic Design': 'Graphic design is the art of visual communication that combines images and text.',
    'Advertising': 'Advertising is the activity of producing advertisements for commercial products or services.',
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div
        className="flex-1 flex justify-center items-center relative"
        style={{
          backgroundImage: `url(${HeroCoverBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src={images[selected]}
          alt={selected}
          className="max-w-full max-h-full relative z-10"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <div className='my-2'>
          <h1 className='text-center '>Our Services</h1>
          <p>Choose our services as per your need. Our team will reach you and explain you regarding all your needs.</p>
        </div>
        <h1 className="text-2xl font-bold mb-2">{selected}</h1>
        <p className="text-center mb-4">{descriptions[selected]}</p>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center ">
        <div className="flex flex-wrap justify-center">
          {Object.keys(images).map((category) => (
            <button
              key={category}
              onClick={() => handleButtonClick(category)}
              className="m-1 p-2 text-sm text-white rounded w-24 flex flex-col items-center"
            >
              <img 
                src={icons[category]} 
                alt={category} 
                className="w-24 h-auto mb-1" // Adjust size as needed
              />
              <span>{category}</span> {/* Category Name */}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
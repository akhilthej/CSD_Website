import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      url:
        'https://drive.google.com/uc?id=1dLGvW3ntk2ey8sgizhgVgamm5krs5wTR',
      title: 'Web Development',
      description: 'Create stunning websites, engage, grow online.',
      button1: { text: 'Get Quotation', link: '/best-web-developement-company' },
      button2: { text: 'Contact us', link: 'https://api.whatsapp.com/send?phone=918143407758&text=Hi,%20need%20Detials%20Regarding%20WebDevelopment' },
    },
    {
      url:
        'https://drive.google.com/uc?id=11Q8mC0-QPAbxfEeKNU55cry3SgXwAgez',
      title: 'Digital Marketing',
      description: 'Boost brands, reach audiences, measure results.',
      button1: { text: 'Learn More', link: '/best-digital-marketing-company' },
      button2: { text: 'Contact Us', link: 'https://api.whatsapp.com/send?phone=918143407758&text=Hi,%20need%20Detials%20Regarding%20DigitalMarketing' },
    },
    {
      url:
        'https://drive.google.com/uc?id=11fb_KYdIeRtpYuu-1zXROl63HtcZjP96',
      title: 'Graphic Designing',
      description: 'Design visuals, convey messages, inspire creativity.',
      button1: { text: 'Explore', link: '/best-graphic-designing-company' },
      button2: { text: 'Contact Us', link: 'https://api.whatsapp.com/send?phone=918143407758&text=Hi,%20need%20Detials%20Regarding%20GraphicDesigning' },
    },
    {
      url:
        'https://drive.google.com/uc?id=1Dxm5_ZCSjFzJsOc3v-pb7PCPjP34KSgp',
      title: 'Branding',
      description: 'Craft identities, build trust, leave impressions.',
      button1: { text: 'Learn More', link: '/best-brand-services-company' },
      button2: { text: 'Contact us', link: 'https://api.whatsapp.com/send?phone=918143407758&text=Hi,%20need%20Detials%20Regarding%20Branding' },
    },
    {
      url:
        'https://drive.google.com/uc?id=1LM6xO9CIRwz0l3jfi-rduTt4K9zFTAPH',
      title: 'Advertising',
      description: 'Promote products, captivate audiences, drive sales.',
      button1: { text: 'Learn More', link: '/best-advertising-company' },
      button2: { text: 'Contact us', link: 'https://api.whatsapp.com/send?phone=918143407758&text=Hi,%20need%20Detials%20Regarding%20Advertising' },
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [currentIndex]);

  return (
    <div className="relative mx-2">
      <div className="flex items-center justify-center h-52 md:h-72 lg:h-[70vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0 rounded-lg"></div>
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center upanddown pb-8 font-extrabold text-white text-4xl md:text-7xl lg:text-8xl mt-3 ">
              {image.title}
              <span className="text-xs sm:text-lg text-white mt-2 text-center">{image.description}</span>
              <div className="mt-2">
                <a href={image.button1.link} className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-5 sm:px-12 py-2 font-medium text-white transition-colors mx-2">{image.button1.text}</a>
                <a href={image.button2.link} className="text-xs sm:text-sm transform rounded bg-orange-500 border border-slate-200 px-5 sm:px-12 py-2 font-medium text-white transition-colors mx-2">{image.button2.text}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
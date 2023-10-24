import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      url:
        'https://drive.google.com/uc?export=view&id=12bHt6P6Qm5csTlzr8S12lldRg-4-m2lg',
      title: 'Events',
      description: 'Discover exciting events in your area.',
      button1: { text: 'Learn More', link: '/events' },
      button2: { text: 'Get Tickets', link: '/tickets' },
    },
    {
      url:
        'https://drive.google.com/uc?export=view&id=1B8bVQ2F9Cny7-p_7aEuP4ZESGrsy7uTj',
      title: 'Advertising',
      description: 'Effective advertising solutions for your business.',
      button1: { text: 'See Services', link: '/services' },
      button2: { text: 'Contact Us', link: '/contact' },
    },
    {
      url:
        'https://drive.google.com/uc?export=view&id=1qbSwRu5YArcxbCsiWQYX6nnPm6K6LKrU',
      title: 'Branding',
      description: 'Strategic marketing services to boost your brand.',
      button1: { text: 'Explore Plans', link: '/plans' },
      button2: { text: 'Contact Us', link: '/contact' },
    },
    {
      url:
        'https://drive.google.com/uc?export=view&id=1Bw291U5er6fgvxAmJwMf_y3T1juJ6KEY',
      title: 'Digital Creative Media',
      description: 'Explore our shop for unique products and gifts.',
      button1: { text: 'Shop Now', link: '/shop' },
      button2: { text: 'Contact Support', link: '/support' },
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
    <div className="relative mx-5 sm:mx-10">
      <div className="flex items-center justify-center h-96 md:h-72 lg:h-[70vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center upanddown pb-8 font-extrabold text-transparent text-4xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  ">
              {image.title}
              <span className="text-lg text-white mt-2">{image.description}</span>
              <div className="mt-2">
                <a href={image.button1.link} className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-white transition-colors  mx-2">{image.button1.text}</a>
                <a href={image.button2.link} className="text-xs sm:text-sm transform rounded bg-orange-500 border border-slate-200 px-12 py-2 font-medium text-white transition-colors  mx-2">{image.button2.text}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2  rounded-full cursor-pointer  focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full cursor-pointer focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;

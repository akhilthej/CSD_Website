import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BrandCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth < 768 ? 3 : 6,
  };

  const brandImages = [
    'https://drive.google.com/uc?id=1RZMqCqOvneXMi4ZBinx5RaCzmWuzISHo',
    'https://drive.google.com/uc?id=1iyWLya_rxwZCn2bxJOiGNSpbh6ka7X5V',
    'https://drive.google.com/uc?id=1KBkqDRYwja9aGwN5i7bi9QBdI9ke4-z3',
    'https://drive.google.com/uc?id=1_9GutGyMCoGKykaJhq5_sc-WAtIi85n5',
    'https://drive.google.com/uc?id=1azO65To3POLRWMgAh7MGoX6k6ZvNd-Lg',
    'https://drive.google.com/uc?id=1VpKn4L8DYkh6gdz_7uGvXYT-UQCoBkJw',
    'https://drive.google.com/uc?id=1V654L6nrx8-ARIS4FDfeIuHBNhR2rqyg',
    'https://drive.google.com/uc?id=1Nkn6m0KqOJvHaCKYEJPX6xpKiipy_kMH',
    'https://drive.google.com/uc?id=15obqrvDYs_uHE8EN4zMZi16G1g2K1oms',
    'https://drive.google.com/uc?id=1aOO_Ag4yFA2jmylZTeuOODuEae8QCQum',
    
    // Add more image URLs here
  ];

  return (
    <div className="py-10 bg-gray-100">
      <p className='text-center font-bold pb-5'>OUR CLIENTS</p>
      <div className="container mx-auto">
        <Slider {...settings}>
          {brandImages.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Brand Logo ${index + 1}`}
                width={200} // Set the desired width
                height={80}  // Set the desired height
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandCarousel;
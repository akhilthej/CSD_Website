import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DFC from '../../assets/Clients/DFC.png'
import AlohaTechLogo from '../../assets/Clients/AlohaTechLogo.png'
import Archivitus from '../../assets/Clients/Archivitus.png'
import iliha from '../../assets/Clients/iliha.png'
import labelanuneni from '../../assets/Clients/labelanuneni.png'
import latonskincare from '../../assets/Clients/latonskincare.png'
import leormedia from '../../assets/Clients/leormedia.pmg.png'
import ragingtuskers from '../../assets/Clients/ragingtuskers.png'
import serpsit from '../../assets/Clients/serpsit.png'
import Prasidda from '../../assets/Clients/Prasidda_logo.png'

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
    DFC,
    AlohaTechLogo,
    labelanuneni,
    iliha,
    latonskincare,
    Prasidda,
    ragingtuskers,
    leormedia,
    serpsit,
    Archivitus,
    
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
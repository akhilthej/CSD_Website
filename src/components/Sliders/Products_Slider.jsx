import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Function to load all images from a specific directory
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// Import all images from the Clients directory, including webp
const images = importAll(require.context('../../assets2/Products', false, /\.(png|jpe?g|svg|webp)$/));

const BrandCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth < 768 ? 4 : 4,
  };

  // Get the image URLs from the imported images
  const brandImages = Object.values(images);

  return (
    <div >
     
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
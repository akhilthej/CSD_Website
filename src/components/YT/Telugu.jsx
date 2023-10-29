import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TeluguMoviesData } from './MoviesData';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';

const Telugu = () => {

  const settings = {
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false, // Show arrows
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
  };

  if (window.innerWidth < 768) {
    settings.slidesToShow = 3; // Show 3 slides on mobile
    settings.arrows = false; // Hide arrows on mobile
  } else {
    settings.slidesToShow = 6; // Show 1 slide on other screen sizes
  }

   return (
    <div className="my-5">
      <h1 className="pl-5 pb-2 cursor-default text-2xl md:text-4xl fade-in-down font-bold text-white tracking-tight">
        Telugu
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          {TeluguMoviesData.map((movie) => (
            <div key={movie.id} className="relative">
              <Link to={`/player/${encodeURIComponent(movie.link)}`} target="_blank">
                <div className="thumbnail-container">
                  <img className="p-3" src={movie.thumbnail} alt={movie.name} />
                  <div className="overlay"></div> {/* Black color overlay */}
                </div>
              </Link>
              <h1 className="text-white text-center">{movie.name}</h1>
              <h3 className="text-white text-center text-sm">{movie.director}</h3>
              <h2 className="text-white text-center text-xs">{movie.gener}</h2>
              <StarRating rating={movie.rating} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Telugu;
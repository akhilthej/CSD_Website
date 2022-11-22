import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../../assets/Common/portfolio_images/ecommerce.png";
import ARK from "../../../assets/Common/portfolio_images/ARK.png"
import Ecommerce from "../../../assets/Common/portfolio_images/ecommerce.png";
import HOC from "../../../assets/Common/portfolio_images/hoc.png";
import MusicApp from "../../../assets/Common/portfolio_images/musicapp.png";

const Portfolio = () => {
 
  return (
    <div className="portfolio " >
      {/* heading */}
      <span >Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider">
          
        <SwiperSlide>
          <img src={ARK} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

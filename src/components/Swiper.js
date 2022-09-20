import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {Autoplay, Pagination } from "swiper";

export default function Swipers() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"

        style={{height:"500px"}}
      >
        {/* <SwiperSlide></SwiperSlide> */}
        <SwiperSlide>   <img style={{height:"436px", marginLeft:"90px", background:"none"}} src={require('../img/glass2.png')} /></SwiperSlide>
        <SwiperSlide>   <img style={{height:"436px", marginLeft:"90px", background:"none"}} src={require('../img/glass2.png')} /></SwiperSlide>
        <SwiperSlide>   <img style={{height:"436px", marginLeft:"90px", background:"none"}} src={require('../img/glass2.png')} /></SwiperSlide>
       
      </Swiper>
    </>
  );
}

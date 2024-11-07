import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.module.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export const SliderHomeBanner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/home/slider/niñas_baner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/home/slider/niños_baner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/home/slider/ofertas.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

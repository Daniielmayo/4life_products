import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./Slider.module.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { CardProduct } from "@/components/Card/Card";

export const SliderProducts = () => {
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
        <CardProduct
          description="primer producto"
          link4lifeProduct="link"
          price={100}
          src=""
          title="titulo 1"
        />
        <CardProduct
          description="primer producto"
          link4lifeProduct="link"
          price={100}
          src=""
          title="titulo 1"
        />
        <CardProduct
          description="primer producto"
          link4lifeProduct="link"
          price={100}
          src=""
          title="titulo 1"
        />
        <CardProduct
          description="primer producto"
          link4lifeProduct="link"
          price={100}
          src=""
          title="titulo 1"
        />
      </Swiper>
    </>
  );
};

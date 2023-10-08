/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./Partner.css";

const Partner = () => {
  return (
    <div className="bg-slate-100">
      <div className="max-w-screen-xl mx-auto partner my-5">
        <div className="container">
          <Swiper
            slidesPerView={4}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1,
              },
              576: {
                width: 576,
                slidesPerView: 2,
              },
              768: {
                width: 768,
                slidesPerView: 3,
              },
            }}
          >
            <div className="row g-2 text-center">
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img src="https://i.ibb.co/g4Y0SgL/logo-1.webp" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img src="https://i.ibb.co/Vq0C1YH/logo-2.webp" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img src="https://i.ibb.co/Ct0pw3S/logo-3.webp" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img src="https://i.ibb.co/q0cvYpj/logo-4.webp" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img src="https://i.ibb.co/PzBkzXT/logo-5.webp" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img src="https://i.ibb.co/Vq0C1YH/logo-2.webp" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img src="https://i.ibb.co/q0cvYpj/logo-4.webp" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img src="https://i.ibb.co/Ct0pw3S/logo-3.webp" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img src="https://i.ibb.co/PzBkzXT/logo-5.webp" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-md-3 col-sm-4">
                  <img src="https://i.ibb.co/g4Y0SgL/logo-1.webp" alt="" />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partner;

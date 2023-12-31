/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-0 md:text-center text-center"
      >
        <SwiperSlide>
          <div className="banner-con banner-bg-1 flex justify-center items-center text-white ">
            <div className="banner-box md:w-2/4">
              <h1 className="text-4xl font-semibold">Education is the Mother of Leadership</h1>
              <h4 className="text-xl py-2 mt-2 ">
              Education can Change Your Life! So what are you waiting for?
              </h4>
              <p className="my-2">
                Dynamically target high-payoff intellectual capital for
                customized technologies. Objectively integrate emerging core
                competencies before process-centric communities.
              </p>
              <div>
                <Link to="/singup">
                  <button  type="submit">SignUp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-2 flex justify-center items-center text-white ">
            <div className="banner-box md:w-2/4">
            <h1 className="text-4xl  font-semibold">Education is the Mother of Leadership</h1>
              <h4 className="text-xl py-2 mt-2 ">
              Education can Change Your Life! So what are you waiting for?
              </h4>
              <p className="my-2">
                Dynamically target high-payoff intellectual capital for
                customized technologies. Objectively integrate emerging core
                competencies before process-centric communities.
              </p>
              <div>
                <Link to="/singup">
                  <button type="submit">SignUp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-3 flex justify-center items-center text-white ">
            <div className="banner-box md:w-2/4">
            <h1 className="text-4xl  font-semibold">Education is the Mother of Leadership</h1>
              <h4 className="text-xl py-2 mt-2 ">
              Education can Change Your Life! So what are you waiting for?
              </h4>
              <p className="my-2">
                Dynamically target high-payoff intellectual capital for
                customized technologies. Objectively integrate emerging core
                competencies before process-centric communities.
              </p>
              <div>
                <Link to="/singup">
                  <button type="submit">SignUp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-4 flex justify-center items-center text-white ">
            <div className="banner-box md:w-2/4">
            <h1 className="text-4xl  font-semibold">Education is the Mother of Leadership</h1>
              <h4 className="text-xl py-2 mt-2 ">
              Education can Change Your Life! So what are you waiting for?
              </h4>
              <p className="my-2">
                Dynamically target high-payoff intellectual capital for
                customized technologies. Objectively integrate emerging core
                competencies before process-centric communities.
              </p>
              <div>
                <Link to="/singup">
                  <button type="submit">SignUp</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

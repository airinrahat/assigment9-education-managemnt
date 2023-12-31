/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import './About.css'
import Aos from "aos";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-32 lg:px-0 px-10">
      <div className="md:grid grid-cols-2 gap-24 items-center" >
        <div>
          <img
            src="https://preview.colorlib.com/theme/kiddy/images/img_1.jpg"
            alt="" data-aos="fade-up"
          />
        </div>
        <div data-aos="fade-up">
          <h2 className="text-[#fd4d40] text-2xl italic md:mt-0 mt-5">About Us</h2>
          <h3 className="text-4xl my-2">The Result of All True Learning</h3>
         
          <p className="font-light leading-7 mb-2 text-xl">
          A modern and unique style to make your Educational platform standout.
          Present Education in beautiful way! A modern and unique style to make your Educational platform standout.
          Present Education in beautiful way!
          </p>
          <button className="btn about-btn mt-4">More About Us</button>
        </div>
      </div>
    </div>

  );
};

export default About;

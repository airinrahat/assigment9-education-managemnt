/* eslint-disable no-unused-vars */
import React from "react";
import './About.css'

const About = () => {
  return (
  
    
   
   
    <div className="max-w-screen-xl mx-auto my-32">
      <div className="grid grid-cols-2 gap-24 items-center">
        <div>
          <img
            src="https://preview.colorlib.com/theme/kiddy/images/img_1.jpg"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-[#fd4d40] text-2xl italic">About Us</h2>
          <h3 className="text-4xl my-2">Bring Fun Life To Your Kids</h3>
          <p className="font-light leading-7 mb-2 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum,
            magni sequi nostrum maxime enim.Magnam id atque dicta deleniti,
            ipsam ipsum distinctio. Facilis praesentium voluptatem accusamus,
            earum veritatis, laudantium. Ea, dolor autem? Sit tempore unde
            debitis, saepe hic earum a vitae!
          </p>
          <button className="btn about-btn mt-4">More About Us</button>
        </div>
      </div>
    </div>

  );
};

export default About;

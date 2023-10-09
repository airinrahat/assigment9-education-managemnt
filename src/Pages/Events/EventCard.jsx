/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaCalendarDay } from 'react-icons/fa';
import { FaClock,FaLocationDot } from "react-icons/fa6";

const EventCard = ({event}) => {
    const {location,details,title,date,time,button,image} = event;

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return (
        <div>
            <div className="card md:flex-row flex-col card-side bg-base-100 shadow-xl md:h-64" data-aos="fade-up">
                <img src={image} className='md:h-full h-40 w-60 rounded-l-xl md:rounded-r-none rounded-r-xl' alt="Movie"/>
                <div className="card-body m-0 p-5">
                    <h2 className="card-title text-bold text-2xl">{title}</h2>
                    <p>{details}</p>
                    <div>
                        <div>
                        <span className='flex font-bold'> <FaCalendarDay className='mr-2 mt-1'></FaCalendarDay> {date}</span>
                        </div>
                        <div > 
                            <span className='flex font-bold'> <FaClock className='mr-2 mt-1'></FaClock>  {time}</span>
                        </div>
                        <div>
                            <p className='flex  font-bold'><FaLocationDot className='mt-1 mr-1'></FaLocationDot> {location}</p>
                        </div>
                    </div>
                </div>
             </div>
       </div>
    );
};

export default EventCard;
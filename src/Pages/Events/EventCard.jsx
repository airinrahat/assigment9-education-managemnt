/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaClock,FaLocationDot } from "react-icons/fa6";

const EventCard = ({event}) => {
    const {location,details,title,date,time,button,image} = event;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} className='w-70 h-3/4' alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title text-bold text-2xl">{title}</h2>
                    <p>{details}</p>
                    <div>
                        <div>
                        <p>{date}</p>
                        </div>
                        <div > 
                            <span className='flex font-bold'> <FaClock className='mr-2 mt-1'></FaClock>  {time}</span>
                        </div>
                        <div>
                            <p className='flex  font-bold'><FaLocationDot className='mt-1 mr-1'></FaLocationDot> {location}</p>
                        </div>
                    </div>
                    <div className="card-actions ">
                    <button className="btn btn-primary">{button}</button>
                    </div>
                </div>
             </div>
       </div>
    );
};

export default EventCard;
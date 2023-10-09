/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {id,name,image,description,price,buttonLabel} = service;

    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <div className="card md:w-96 mx-10 md:mx-0 bg-base-100 shadow-xl" data-aos="zoom-in">
  <figure><img src={image} className='w-[100%] h-60' alt="card image" /></figure>
  <div className="card-body md:p-10 p-5">
    <h2 className="card-title text-2xl">{name}</h2>
    <p>{description.slice(0,110)} .....</p>
    <p className='font-bold'>${price}</p>
    <div className="card-actions ">
      <Link to={`/service/${id}`}>     
       <button className="btn bg-[#dc3545] text-white">{buttonLabel}</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;
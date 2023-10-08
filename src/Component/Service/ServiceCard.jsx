/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {id,name,image,description,price,buttonLabel} = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} className='w-[100%]' alt="card image" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{name}</h2>
    <p>{description}</p>
    <p className='font-bold'>{price}</p>
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
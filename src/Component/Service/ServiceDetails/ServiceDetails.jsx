/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const detail = details.find(detail => detail.id === idInt);
  console.log(detail);
  return (
    <div>
      <h2 className='text-4xl  font-semibold text-center mb-10'>{detail.name} details : {id}</h2>

      <div className="lg:px-0 md:px-10 px-5 mb-10">
        <div className="mx-auto max-w-screen-xl">
          <div className="card card-compact w-80% bg-base-100 ">
            <figure className="relative">
              <img
                src={detail.image}
                className="w-full md:h-[500px] h-60 rounded-xl"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold md:text-3xl text-3xl">
                {detail.name}
              </h2>
              <p className="font-sans text-2xl">{detail.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
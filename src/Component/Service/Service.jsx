/* eslint-disable no-unused-vars */
import React from 'react';
import ServiceCard from './ServiceCard';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
const services = useLoaderData()

 
    console.log(services);    
    return (
        <div className='mx-auto max-w-screen-xl'>
         <h2 className='text-5xl text-center font-bold'>Our Services: {services.length}</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 my-12 gap-10'>
          {
            services.map((service) => (<ServiceCard key={service.id} service={service}></ServiceCard>))
         }
    </div>
            
        </div>
    );
};

export default Service;
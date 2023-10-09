/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Component/Service/ServiceCard';

const Services = () => {
const services = useLoaderData()

 
    console.log(services);    
    return (
        <div className='mx-auto max-w-screen-xl mt-5 mb-24'>
         <h2 className='text-4xl text-center font-bold'>Our Services: {services.length}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-10 gap-10'>
          {
            services.map((service) => (<ServiceCard key={service.id} service={service}></ServiceCard>))
         }
    </div>
            
        </div>
    );
};

export default Services;
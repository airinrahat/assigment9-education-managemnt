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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-12 gap-10'>
                {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 */}
          {
            services.map((service) => (<ServiceCard key={service.id} service={service}></ServiceCard>))
         }
    </div>
            
        </div>
    );
};

export default Service;
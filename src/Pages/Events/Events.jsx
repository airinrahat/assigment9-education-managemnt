/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventCard from './EventCard';

const Events = () => {
    const events = useLoaderData();
    console.log(events);
   
    return (
        <div className='max-w-screen-xl mx-auto mt-5 mb-10'>
             <h2 className='text-4xl text-center mb-10 font-bold'>Our Events</h2>
           <div className="grid lg:grid-cols-2 lg:px-0 px-10 gap-10 items-center">
           {
            events.map((event) => (<EventCard key={event.id} event={event}></EventCard>))
           }
           </div>
        </div>
    );
};

export default Events;
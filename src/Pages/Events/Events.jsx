/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventCard from './EventCard';

const Events = () => {
    const events = useLoaderData();
    console.log(events);
   
    return (

        
        <div className='max-w-screen-xl mx-auto my-10'>
             <h2 className='text-4xl text-center font-bold'>Our Events: {events.length}</h2>
           <div className="grid grid-cols-2 gap-24 items-center">
           {
            events.slice(0,6).map((event) => (<EventCard key={event.id} event={event}></EventCard>))
           }
           </div>
        </div>
    );
};

export default Events;
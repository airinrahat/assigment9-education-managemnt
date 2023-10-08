/* eslint-disable no-unused-vars */
import React  from 'react';
import Service from '../../Component/Service/Service';
import Banner from '../../Component/Banner/Banner';
import About from '../../Component/About/About';
import Event from '../../Component/Event/Event';
import Counter from '../../Component/Counter/Counter';
import Partner from '../../Component/Partner/Partner';


const Home = () => {



    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Service></Service>
           <Event></Event>
           <Counter></Counter>
           <Partner></Partner>
        </div>
    );
};

export default Home;
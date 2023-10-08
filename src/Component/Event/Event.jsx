/* eslint-disable no-unused-vars */
import React from "react";
import "./Event.css";

const Event = () => {
  return (
    <div className="my-24">
      <div className="event-bg flex justify-center items-center text-white text-center">
        <div className="md:w-2/4">
          <h1 className="text-5xl">Become an instructor</h1>
          <p className="my-5 leading-7">
            Become an instructor There is a moment in the life of any aspiring
            astronomer that it is time to buy that first telescope. It’s
            exciting to think about setting up your own viewing station whether
            that is on the deck.
          </p>
          <div>
            <button className="event-btn" type="submit">Join Event</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

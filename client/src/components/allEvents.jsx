import React, { useEffect, useState } from "react";

export default function AllEvents({allEvents, setAllEvents} ) {
    
    //when the page loads, perform this
    useEffect(() => {
      getEvents();
    }, []);

    const getEvents = () => {
      fetch("/api/events")
          .then(res => res.json())
          .then(json => {
            setAllEvents(json);
            console.log(allEvents)
          })
          .catch(error => {
            console.log(error);
          });

    }

    
    return <>
    <div className="All-Events">
      <h1> List of all events:</h1>

      <ul className="list-group"> 
        {allEvents.map((event) => (
          <li className="list-group-item" key={event.id}>{event.title}</li>

        ))}
 
      </ul>
      
    </div>;
    
    </>
  }
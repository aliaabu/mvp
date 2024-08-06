import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
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


    // I'd like to list all the events, in order of date and then in order of time, and then in alphabetical order
    return <>

    
    <div className="All-Events">
      <h1> List of all events:</h1>

      <ul className="events-list"> 
        {/* allEvents && waits for allEvents to load / the async function to complete its work. Can also use conditional statement to do this */}
        {allEvents ? allEvents.map((event) => (
          <Link to={`/events/${event.id}`} className="list-group-item" key={event.id}>{event.title}</Link>
        )): null}
 
      </ul>
    
    </div>
    <div>
      <Outlet />
    </div>
    
    </>
  };


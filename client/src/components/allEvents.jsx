import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Event from "./Event";

export default function AllEvents({allEvents, setAllEvents, selectedEventId, setSelectedEventId} ) {
    
    //when the page loads, perform this
    useEffect(() => {
      getEvents();
    }, []);

    const getEvents = async () => {
      try {
        const result = await fetch(`/api/events`);
        const data = await result.json();
        setAllEvents(data);
        console.log(allEvents)
      } catch (err) {
        console.log(err);
      }
    };

    const deleteEvent = async (id) => {
      console.log("deleteEvent", id)
      try{
        const response = await fetch(`/api/events/${id}`, {
          method: "DELETE",
        });
        const updatedEvents = await response.json();
        setAllEvents(updatedEvents);

      } catch(err) {
        console.log(err)
      }
    }

    return <>

    
    <div className="All-Events">
      <h1> List of all events:</h1>
<div className="row mt-4 mx-2">
      
      <div className="list-group col-6 ">  

      {allEvents ? allEvents.map((event) => (
      <div className="list-group-item d-flex justify-content-between" key={event.id}>
        
        <h6 className="row" onClick={() => setSelectedEventId(event.id)}>
          {event.title}
          </h6> 
        
      
      
      <p><button className="btn btn-sm btn-danger" onClick={() => deleteEvent(event.id)}>delete</button></p>
      </div>
        )): null}
      </div> 

        {selectedEventId && (
          <div className="col">
          <Event selectedEventId />
        </div>
        )
        }
      
    
    
    </div>
    </div>
    </>
  };

  // allEvents && waits for allEvents to load / the async function to complete its work. Can also use conditional statement to do this 
 
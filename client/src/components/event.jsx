import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


export default function Event({event, setEvent, selectedEventId}) {
    useEffect(() => {
        getEventDetails();
    }, [selectedEventId]);


    const getEventDetails = async () => {
        try {
            const result = await fetch(`/api/events/${selectedEventId}`);
            const event = await result.json();
            setEvent(event);
            

        } catch(err) {
            console.log(err)
        }
    };

   

    


    return <>

        <div>
        
        {event && (
            <div>
                <h3>
                    {event.title}
                </h3>

                <p>{event.url}</p>
                <p>{event.description}</p>
                
               
            </div>
        )}

        </div>




    
    
    </>
  }